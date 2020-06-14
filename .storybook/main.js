// main.js (ex presets.js)
// main.js is the main point of configuration for storybook.

const path = require('path')

module.exports = {
	stories: ['../components/**/*.stories.@(js|mdx)'],

	addons: [
		// preset-scss doesn't work with custom postcss config (yet)
		// https://github.com/storybookjs/presets/issues/131#issue-607035000
		// '@storybook/preset-scss',
		// '@storybook/addon-docs',
		{
			name: '@storybook/addon-docs',
			options: {
				configureJSX: true,
				vueDocgenOptions: {
					alias: {
						'@': path.resolve(__dirname, '../')
					}
				}
			}
		},
		'@storybook/addon-controls',
		'@storybook/addon-storysource',
		'@storybook/addon-actions',
		'@storybook/addon-links',
		'@storybook/addon-viewport',
		'@storybook/addon-backgrounds',
		'@storybook/addon-a11y'
	],

	webpackFinal: async (config, { configType }) => {

		// apparently we need to remove default rules before overwrite them (?)

		// remove default css rules
		config.module.rules = config.module.rules.filter(
			rule => !(rule.test instanceof RegExp) || !rule.test.test('.css')
		)

		config.module.rules.push({
			test: /\.(post)?css$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						// // enable CSS Modules
						// modules: true,
						importLoaders: 1
					}
				},
				{
					loader: 'postcss-loader',
					options: {
						sourceMap: true,
						config: {
							path: './.storybook/'
						}
					}
				}
			]
		})

		// we need this alias
		config.resolve.alias['@'] = path.dirname(path.resolve(__dirname))

		return config
	}
}
