import React from 'react';
import { render } from '@testing-library/react';
import StaticContext from '../../../src/pages/StaticContext/StaticContext';

describe('<StaticContext />', () => {
  test('should render StaticContext component', () => {
    const { asFragment } = render(<StaticContext />);
    expect(asFragment(<StaticContext />)).toMatchSnapshot();
  });
});
