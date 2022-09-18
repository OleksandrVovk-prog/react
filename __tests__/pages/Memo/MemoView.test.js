import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '../../settings/test-utils';
import MemoView from '../../../src/pages/Memo/MemoView';

describe('<MemoView />', () => {
  let wrapper;
  const mockString = 'mock string';
  const mockNumber = 1;
  const mockFunc = jest.fn();

  beforeEach(() => {
    wrapper = render(
      <MemoView
        title={mockString}
        production={mockString}
        poster={mockString}
        clickCounter={mockNumber}
        handleClick={mockFunc}
        changeTitle={mockFunc}
      />
    );
  });

  test('should render MemoView component', () => {
    const { asFragment } = wrapper;
    expect(asFragment(wrapper)).toMatchSnapshot();
  });

  test('should call mockFunc', async () => {
    const { getByTestId } = wrapper;
    const Input = getByTestId(/change-title-input/i);
    await userEvent.type(Input, 'change input handler');
    expect(mockFunc).toHaveBeenCalled();
  });
});
