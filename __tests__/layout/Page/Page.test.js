import React from 'react';
import userEvent from '@testing-library/user-event';
import i18n from 'i18next';
import { render } from '../../settings/test-utils';
import Page from '../../../src/layout/Page/Page';

describe('<Page />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(
      <Page />
    );
  });

  test('Page component should render', () => {
    const { asFragment } = wrapper;
    expect(asFragment(wrapper)).toMatchSnapshot();
  });

  test('should render button', () => {
    const { getByTestId } = wrapper;
    const Button = getByTestId('toggle-language-button');
    expect(Button).toBeInTheDocument();
  });

  test('should change language', async () => {
    const { getByTestId } = wrapper;
    const Button = getByTestId('toggle-language-button');
    expect(Button).toHaveTextContent(i18n.language);
    await userEvent.click(Button);
    expect(Button).toHaveTextContent(i18n.language);
  });

  test('should render about', () => {
    const { getByText } = wrapper;
    expect(getByText(i18n.t('about'))).toBeInTheDocument();
  });

  test('should render lazy', () => {
    const { getByText } = wrapper;
    expect(getByText(i18n.t('lazy'))).toBeInTheDocument();
  });
});
