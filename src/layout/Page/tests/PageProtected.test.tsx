import { screen } from '@testing-library/react';
import render from '../../../../__tests__/test-utils';
import { mockedNavigateId } from '../../../../__tests__/constants';

import PageProtected from '../PageProtected';
import auth from '../../../mocks/auth';

describe('<PageProtected />', () => {
  test('should render component', async () => {
    const { asFragment } = render(<PageProtected redirectUri="/login" />, { preloadedState: { auth } });
    expect(asFragment()).toMatchSnapshot();
  });
  test('should stay on page', async () => {
    render(<PageProtected redirectUri="/login" />, { preloadedState: { auth } });
    expect(screen.queryByTestId(mockedNavigateId)).not.toBeInTheDocument();
  });
  test('should redirect to Login', async () => {
    render(<PageProtected redirectUri="/login" />);
    expect(screen.getByTestId(mockedNavigateId)).toBeInTheDocument();
  });
});
