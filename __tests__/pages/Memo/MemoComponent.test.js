import React from 'react';
import { render } from '../../settings/test-utils';
import MemoComponent from '../../../src/pages/Memo/components/MemoComponent';

describe('<MemoComponent />', () => {
  let wrapper;
  const mockString = 'mock string';

  beforeEach(() => {
    wrapper = render(
      <MemoComponent
        production={mockString}
        title={mockString}
        poster={mockString}
      />
    );
  });

  test('should render MemoComponent component', () => {
    const { asFragment } = wrapper;
    expect(asFragment(wrapper)).toMatchSnapshot();
  });

  test('should render image', () => {
    const { getByRole } = wrapper;
    const Image = getByRole('img');
    expect(Image).toBeInTheDocument();
  });
});
