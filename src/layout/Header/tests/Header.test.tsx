import { screen } from '@testing-library/react';
import render from '../../../../__tests__/test-utils';

import Header from '../Header';

describe('<Header />', () => {
  test('should render component', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('should contain needed elements', () => {
    render(<Header />);
    const title = screen.getByText('Try to build something great');
    const listLinks = screen.getAllByRole('link');
    const button = screen.getByTestId('toggle-language-button');
    const loginLink = screen.getByText('Login');
    expect(title).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(listLinks).toHaveLength(3);
  });
});
