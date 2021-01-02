export default {
  clearMocks: true,
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '@element/(.*)/(.*)$': '<rootDir>/src/app/components/elements/$1/$2',
    '@layout/(.*)/(.*)$': '<rootDir>/src/app/components/layouts/$1/$2',
    '@module/(.*)/(.*)$': '<rootDir>/src/app/components/modules/$1/$2',
    '@template/(.*)/(.*)$': '<rootDir>/src/app/components/templates/$1/$2',
    '@constant/(.*)/(.*)$': '<rootDir>/src/app/constants/$1/$2',
    '@context/(.*)/(.*)$': '<rootDir>/src/app/context/$1/$2',
    '@hook/(.*)/(.*)$': '<rootDir>/src/app/hooks/$1/$2',
    '@util/(.*)/(.*)$': '<rootDir>/src/app/utils/$1/$2',
  },
};
