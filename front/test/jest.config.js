module.exports = {
    verbose: true,
    setupFiles: [
        "./jestSetup.js"
    ],
    moduleNameMapper: {
        "^.+\\.(css|scss|less)$": "identity-obj-proxy",
        "\\.(svg|jpg|png)$": "./empty-module.js"
    },
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.jsx$": "babel-jest",
    },
	moduleFileExtensions: [
        "jsx",
		"js"
	],
	testMatch: [
		"**/test/components/**/*.(js|jsx)"
	]
};