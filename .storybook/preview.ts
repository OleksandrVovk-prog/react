import type { Preview } from '@storybook/react';
import i18n from '../src/i18n';
import PreviewDecorator from './decorators/Preview';

const preview: Preview = {
  parameters: {
    i18n,
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['README'],
      },
    },
  },
  globals: {
    locale: 'en',
    locales: {
      en: 'English',
      ua: 'Ukrainian',
    },
  },
  decorators: [
    PreviewDecorator,
  ],
};

export default preview;