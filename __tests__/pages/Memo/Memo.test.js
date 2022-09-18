import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '../../settings/test-utils';
import Memo from '../../../src/pages/Memo/Memo';

describe('<Memo />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<Memo />);
  });
  test('should render Memo component', () => {
    const { asFragment } = wrapper;
    expect(asFragment(wrapper)).toMatchSnapshot();
  });

  test('should change input value', async () => {
    const { getByTestId } = wrapper;
    const Input = getByTestId(/change-title-input/i);
    await userEvent.type(Input, 'mock value');
    expect(Input.value).toEqual('John Cartermock value');
  });

  test('should increase initial count value', async () => {
    const { getByTestId, getByText } = wrapper;
    const Button = getByTestId(/click-handler-button/i);
    expect(getByText(/0/i)).toBeInTheDocument();
    await userEvent.click(Button);
    expect(getByText(/1/i)).toBeInTheDocument();
  });
});
