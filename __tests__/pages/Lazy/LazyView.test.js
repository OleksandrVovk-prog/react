import React from 'react';
import userEvent from '@testing-library/user-event';
import i18next from 'i18next';
import { act } from '@testing-library/react';
import { render } from '../../settings/test-utils';
import LazyView from '../../../src/pages/Lazy/LazyView';

describe('<LazyView />', () => {
  let wrapper;
  const mockFunc = jest.fn();

  const props = {
    information: {
      Title: 'mock information title',
      Poster: 'mock information poster'
    },
    getFilm: mockFunc,
    title: i18next.t('lazyPage'),
    buttonTitle: i18next.t('search'),
    loading: false,
    search: 'mock search',
    handleSearch: mockFunc
  };

  beforeEach(async () => {
    wrapper = await act(async () => render(
      <LazyView
        information={props.information}
        getFilm={props.getFilm}
        title={props.title}
        buttonTitle={props.buttonTitle}
        loading={props.loading}
        search={props.search}
        handleSearch={props.handleSearch}
      />
    ));
  });

  test('should render LazyView component', () => {
    const { asFragment } = wrapper;
    expect(asFragment(wrapper)).toMatchSnapshot();
  });

  test('should render Button component', () => {
    const { getByTestId } = wrapper;
    const Button = getByTestId('update-film-button');
    expect(Button).toBeInTheDocument();
  });

  test('should render loading element', async () => {
    const { getByText } = await act(async () => render(<LazyView
      information={props.information}
      getFilm={props.getFilm}
      title={props.title}
      buttonTitle={props.buttonTitle}
      loading
      search={props.search}
      handleSearch={props.handleSearch}
    />));
    const Loading = getByText(/loading/i);
    expect(Loading).toBeInTheDocument();
  });

  test('on Button click should call mockFunc function', async () => {
    const { getByTestId } = wrapper;
    const Button = getByTestId('update-film-button');
    await userEvent.click(Button);
    expect(mockFunc).toHaveBeenCalled();
  });
});
