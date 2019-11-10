module.exports = {
  verbose: true,
  preset: "jest-puppeteer",
  moduleFileExtensions: ['js', 'jsx', 'ts'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss|less)$': 'identity-obj-proxy',
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  // modulePathIgnorePatterns: ["<rootDir>/tests/e2e/"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest"
  },
  setupFilesAfterEnv: ['./tests/setup.js']
}
