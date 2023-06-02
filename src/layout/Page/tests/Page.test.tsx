import { screen } from '@testing-library/react';
import render from '../../../../__tests__/test-utils';

import Page from '../Page';

describe('<Page />', () => {
  test('should render component', () => {
    const { asFragment } = render(<Page />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('should render component with header and title', () => {
    render(<Page />);
    const header = screen.getByTestId('header');
    const h1List = screen.getAllByRole('heading', { level: 1 });
    expect(header).toBeInTheDocument();
    expect(h1List.length).toBeLessThan(2);
  });
});
