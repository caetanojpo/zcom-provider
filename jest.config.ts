import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jsdom',
	collectCoverageFrom: [
		'src/**/*.{js,jsx,ts,tsx}',
		'!src/**/*.d.ts',
	],
  coverageDirectory: 'coverage',
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
	  '\\.(css|scss|sass)$': 'identity-obj-proxy',
	  '^@/(.*)$': '<rootDir>/src/$1',
  },
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
};

export default createJestConfig(customJestConfig);
