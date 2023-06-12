module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
	transform: {
		'^.+\\.vue$': 'vue-jest',
		'^.+\\.tsx?$': 'ts-jest',
	},
	testMatch: ["<rootDir>/pages/**/*test.[jt]s?(x)"],
};