import React from 'react';
import fetchMock from 'jest-fetch-mock';
import { render, act } from '@testing-library/react';
import App from '../src/App';

describe('<App />', () => {
  test('should render App component', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ value: 'mock data' }));
    fetchMock.mockRejectOnce(JSON.stringify('mock error'));
    const { asFragment } = await act(async () => render(<App />));
    expect(asFragment()).toMatchSnapshot();
  });
});
