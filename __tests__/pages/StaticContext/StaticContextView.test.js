import React from 'react';
import { render } from '@testing-library/react';
import StaticContextView from '../../../src/pages/StaticContext/StaticContextView';
import { data } from '../../../src/context/pages/StaticContext';

describe('<StaticContextView />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<StaticContextView />);
  });
  test('should render StaticContextView component', () => {
    const { asFragment } = wrapper;
    expect(asFragment(wrapper)).toMatchSnapshot();
  });
  test('should contain context data', () => {
    const { getByText } = wrapper;
    const Element = getByText(data.title);
    expect(Element).toBeInTheDocument();
  });
});
