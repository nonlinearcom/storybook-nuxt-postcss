// main.js (ex presets.js)
// main.js is the main point of configuration for storybook.

const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {

	stories: ['../components/**/*.stories.(js|mdx)'],
	

	addons: [
		{
			name: '@storybook/preset-scss',
			options: {
			  cssLoaderOptions: {
				 modules: true,
				 localIdentName: '[name]__[local]--[hash:base64:5]',
			  }
			}
		},
		{
			name: '@storybook/addon-docs',
			options: {
			  vueDocgenOptions: {
				alias: {
				  '@': path.resolve(__dirname, '../'),
				},
			  },
			},
		},
		'@storybook/addon-storysource',
		'@storybook/addon-actions',
		'@storybook/addon-links',
		'@storybook/addon-knobs',
		'@storybook/addon-viewport',
		'@storybook/addon-backgrounds',
		'@storybook/addon-a11y',
		
	],



	webpackFinal: async (config, { configType }) => {


		// config.plugins.push(new VueLoaderPlugin());


		// Remove SB's default vue-loader
		// config.module.rules = config.module.rules.filter(rule =>
		// 	!(rule.test instanceof RegExp) || !rule.test.test('.vue')
		// )

		// remove default css rules
		config.module.rules = config.module.rules.filter(rule =>
			!(rule.test instanceof RegExp) || !rule.test.test('.css')
		)

		//--------------
		// New thing!
		// https://github.com/storybookjs/storybook/issues/6319#issuecomment-619634824
		//--------------
		// config.module.rules.forEach(rule => {
		// 	// See: https://github.com/storybookjs/storybook/issues/6319
		// 	if (rule.test.toString() === '/\\.css$/') {
		// 	  const idx = rule.use.findIndex(({ loader }) => loader && loader.includes('css-loader'));
		// 	  rule.use[idx].options.modules = true;
		// 	}
		//   });


		config.module.rules.push(
	

			// this is working (remember to remove the test:css also ;)

			{
				test: /\.s?css$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader'],
				include: path.resolve(__dirname, '../')
			},

		//	https://github.com/mstrlaw/nuxt-storybook/issues/3#issuecomment-623274159
		
			// {
			// 	test: /\.(post)?css$/,
			// 	use: [
			// 	// Loader for webpack to process CSS with PostCSS
			// 	{
			// 		loader: 'postcss-loader',
			// 		options: {
			// 		/* 
			// 			Enable Source Maps
			// 		*/
			// 		sourceMap: true,
			// 		/*
			// 			Set postcss.config.js config path && ctx 
			// 		*/
			// 		config: {
			// 			path: './.storybook/',
			// 		},
			// 		},
			// 	},
			// 	],
			// 	include: path.resolve(__dirname, '../storybook/'),
			// 	// include: path.resolve(__dirname, '../'),
			// }	
		);

		// we need this alias
		config.resolve.alias['@'] = path.dirname(path.resolve(__dirname))
	
		// config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js';
	


	
		// Return the altered config
		return config;
	  },
};
