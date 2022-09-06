/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
            decorators: true,
          },
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            react: {
              runtime: 'automatic',
            },
          },
        },
        module: {
          type: 'es6',
          noInterop: false,
        },
      },
    ],
  },

  clearMocks: true,
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',

  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.tsx', '!src/**/*.spec.tsx', '!src/**/*App.tsx', '!src/index.tsx'],
  coverageReporters: ['lcov', 'json'],
}
