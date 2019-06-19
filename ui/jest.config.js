module.exports = {
    collectCoverageFrom: [
      'src/app/**/*.{js,jsx}'
    ],
    coverageThreshold: {
      global: {
        statements: 90,
        branches: 90,
        functions: 90,
        lines: 90
      }
    },
    coverageReporters: ['json', 'lcov', 'text-summary'],
    moduleDirectories: ['node_modules', 'app'],
    transform: {
      '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest'
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$', '^.+\\.module\\.(css|sass|scss)$'],
    moduleNameMapper: {
      '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/config/jest-mocks/cssModule.js',
      '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/config/jest-mocks/image.js'
    },
    testRegex: '.*\\.test\\.js$'
  };
