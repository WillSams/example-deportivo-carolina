// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['/node_modules/'],

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['text', 'lcov'],

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node', 'png'],

  // Use this configuration option to add custom reporters to Jest
  reporters: [
    'default',
    [
      'jest-junit',
      { outputDirectory: './specs/test-results/jest/', outputName: 'results.xml' },
    ],
  ],

  // The test environment that will be used for testing
  testEnvironment: 'jest-environment-jsdom-global',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/?(*.)+(spec).js?(x)'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/'],

  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/specs/fileTransformer.js',
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['/node_modules/'],
};
