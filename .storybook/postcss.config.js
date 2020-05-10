module.exports = {
	plugins: {
		// PostCSS Preset Env includes autoprefixer and browsers option will be passed to it automatically.
		'postcss-preset-env': {
			stage: 0,
			// browsers: 'last 2 versions',
			importFrom: [
				'./assets/css/variables.css',
				'./assets/css/app.css'
			],
			autoprefixer: {
				grid: false
			}
		},
		'postcss-import': {},
		'postcss-url': {},
		'postcss-nested': {}
	}
}
