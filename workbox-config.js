module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,json,png,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};