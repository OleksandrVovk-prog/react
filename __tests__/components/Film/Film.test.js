import React from 'react';
import { render } from '@testing-library/react';
import Film from '../../../src/components/Film/Film';

describe('<Film />', () => {
  const mockFilm = {
    Title: 'mock film title',
    Poster: 'mock film poster'
  };
  test('should render Film component', () => {
    const { asFragment } = render(<Film film={mockFilm} />);
    expect(asFragment(<Film film={mockFilm} />)).toMatchSnapshot();
  });

  test('Film component should have file title', () => {
    const { getByText } = render(<Film film={mockFilm} />);
    expect(getByText(mockFilm.Title)).toBeInTheDocument();
  });
});
