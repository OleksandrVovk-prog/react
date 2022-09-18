import React from 'react';
import { render } from '../../settings/test-utils';
import Header from '../../../src/layout/Header/Header';
import { Context as PageContext } from '../../../src/context/layout/Page';

describe('<Header />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <PageContext.Consumer>
        { () => <Header /> }
      </PageContext.Consumer>
    );
  });
  test('should render Header component', () => {
    const { asFragment } = wrapper;
    expect(asFragment(
      <Header />
    )).toMatchSnapshot();
  });
});
