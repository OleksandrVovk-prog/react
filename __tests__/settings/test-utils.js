// TEMPORARY DISABLED, can be helpful with router and i18n contact to your tech lead if you will find an error
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { render as rtlRender } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import i18n from '../../src/i18n';

function render(ui, renderOptions) {
  function Wrapper({ children }) {
    return (
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          {children}
        </I18nextProvider>
      </BrowserRouter>
    );
  }
  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
  };
}

export * from '@testing-library/react';

export { render };
