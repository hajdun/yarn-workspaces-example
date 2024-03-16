import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    roots: ['<rootDir>'],
    testMatch: [
        '**/src/**/*test*.(ts|tsx)',
    ],
    transform: {
        "\\.[j]sx$": "babel-jest",
        "\\.[t]sx$": "ts-jest"
    },
    testEnvironment: 'jsdom',
    moduleDirectories: ["node_modules", "<rootdir>"],
    moduleNameMapper: {
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/_mocks/fileMock.js",
        "\\.[s]css$": "identity-obj-proxy",
      //  "src/(.*)": "<rootDir>/src/$1",
    },
    preset: 'ts-jest',
    modulePaths: ['<rootDir>'],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"]
};

export default config;