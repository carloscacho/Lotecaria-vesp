module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{js,png,html,json,md,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};