import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  roots: ['<rootDir>'],
  testMatch: ['**/src/**/*test*.(ts|tsx)'],
  transform: {
    '\\.[jt]sx$': 'ts-jest'
  },
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', '<rootdir>', 'src'],
  moduleNameMapper: {
    "src/(.*)": "<rootDir>/src/$1",
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '_mocks/fileMock.js',
    '\\.[s]css$': '_mocks/styleMock.js',
  },
  preset: 'ts-jest'
}

export default config
