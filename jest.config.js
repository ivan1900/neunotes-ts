/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  verbose: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/test/',
    '/dist/',
  ],
};
