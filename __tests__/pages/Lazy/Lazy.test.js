import React from 'react';
import userEvent from '@testing-library/user-event';
import fetchMock from 'jest-fetch-mock';
import { render } from '../../settings/test-utils';
import Lazy from '../../../src/pages/Lazy/Lazy';

describe('<Lazy />', () => {
  let wrapper;
  const mockDataResponse = {
    Title: 'mock title'
  };
  const mockDataReject = 'mock data reject';
  beforeEach(() => {
    fetchMock.mockResponseOnce(JSON.stringify(mockDataResponse));
    fetchMock.mockRejectOnce(JSON.stringify(mockDataReject));
    wrapper = render(<Lazy />);
  });

  test('should render Lazy component', () => {
    const { asFragment } = wrapper;
    expect(asFragment(wrapper)).toMatchSnapshot();
  });

  test('should change input value', async () => {
    const { getByTestId } = wrapper;
    const Input = getByTestId(/input-search/i);
    await userEvent.type(Input, 'mock value');
    expect(Input.value).toEqual('mock value');
  });
  test('should change loading value to true', async () => {
    const { getByTestId, getByText } = wrapper;
    const Button = getByTestId('update-film-button');
    await userEvent.click(Button);
    expect(getByText(/Loading.../i)).toBeInTheDocument();
  });
});
