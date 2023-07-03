import { screen, fireEvent, waitFor } from '@testing-library/react';

import render from '../../../../__tests__/test-utils';
import { initServer } from '../../../../__tests__/mswServer';
import { testIdErrorMessage, testIdNavigate } from '../../../constants/TestId';
import { userErrorCredentials } from '../../../mocks/user';
import auth from '../../../mocks/auth';
import Login from '../Login';

initServer();

describe('<Login />', () => {
  test('should render component', async () => {
    const { asFragment } = render(<Login />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('should be redirected if the user was logged in', async () => {
    render(<Login />, { preloadedState: { auth } });
    expect(screen.getByTestId(testIdNavigate)).toBeInTheDocument();
  });
  test('should not be redirected if the user was not logged in', async () => {
    render(<Login />);
    expect(screen.queryByTestId(testIdNavigate)).not.toBeInTheDocument();
  });
  test('should be redirected after login and show error if user set invalid credentials', async () => {
    render(<Login />);
    const nameInput = screen.getByLabelText(/name/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button');
    fireEvent.change(nameInput, { target: { value: userErrorCredentials.username } });
    fireEvent.change(passwordInput, { target: { value: userErrorCredentials.password } });
    fireEvent.click(submitButton);
    await waitFor(
      async () => {
        expect(await screen.findByTestId(testIdErrorMessage)).toBeInTheDocument();
      },
    );
    fireEvent.change(nameInput, { target: { value: 'username' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);
    await waitFor(
      async () => {
        expect(await screen.findByTestId(testIdNavigate)).toBeInTheDocument();
      },
    );
  });
});
