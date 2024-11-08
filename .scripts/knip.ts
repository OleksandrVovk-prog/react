import type { KnipConfig } from 'knip';

const styleCompiler = (text: string) => Array.from(text.matchAll(/(?<=@)import[^;]+/g)).join('\n');

const config: KnipConfig = {
  entry: [
    'src/index.[jt]s?(x)!',
  ],
  project: ['src/**/*.{js,ts,jsx,tsx,css,sass,scss}!'],
  jest: {
    config: ['jest.config.{js,ts,mjs,cjs,json}', 'package.json'],
    entry: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)', 'src/mocks/**/*.[jt]s?(x)'],
  },
  ignoreDependencies: [
    // Used in tests
    '@testing-library/jest-dom',
    '@testing-library/user-event',

    // Used without import
    'sass',
  ],
  ignoreBinaries: [
    'eslint',
  ],
  compilers: {
    scss: styleCompiler,
    css: styleCompiler,
    sass: styleCompiler,
  },
  exclude: ['types', 'devDependencies'],
  ignore: ['.scripts/*', 'src/setupTests.ts'],
};

export default config;
