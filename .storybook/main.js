// main.js (ex presets.js)
// main.js is the main point of configuration for storybook.

const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {

	stories: ['../components/**/*.stories.(js|mdx)'],
	

	addons: [
		// '@storybook/preset-scss',
		// '@storybook/addon-docs',
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

		// // Remove the existing css rule
		// config.module.rules = config.module.rules.filter(
		// 	f => f.test.toString() !== '/\\.css$/'
		// );

		// Make whatever fine-grained changes you need
		config.module.rules.push(
			// {
			// 	test: /\.vue$/,
			// 	loader: 'vue-loader',
			// 	options: {
			// 	  loaders: {},
			// 	  // other vue-loader options go here
			// 	},
			// },
			// {
			// 	test: /\.vue$/,
			// 	use: ['vue-loader', 'vue-loader']
			// },
			// {
			// 	test: /\.js$/,
			// 	loader: 'babel-loader',
			// 	exclude: /node_modules/,
			// },
			// {
			// 	test: /\.stories\.jsx?$/,
			// 	loader: require.resolve('@storybook/source-loader'),
			// 	include: [path.resolve(__dirname, '../components')],
			// 	enforce: 'pre',
			// },
			{
				test: /\.s?css$/,
				use: [
				  'vue-style-loader',
				  'style-loader',
				  'css-loader',
				//   'sass-loader',
				//   {
				// 	loader: 'sass-resources-loader',
				// 	options: {
				// 	  // Provide path to the file with resources
				// 	//   resources: './assets/styles/shared.scss',
		
				// 	  /*
				// 	  // Or array of paths
				// 	  resources: ['./path/to/vars.scss', './path/to/mixins.scss'] */
				// 	},
				//  },
				],
				include: path.resolve(__dirname, '../'),
			},
		
			// {
			// 	test: /\.s?css$/,
			// 	loaders: ['style-loader', 'css-loader', 'sass-loader'],
			// 	include: path.resolve(__dirname, '../')
			// },

		//	https://github.com/mstrlaw/nuxt-storybook/issues/3#issuecomment-623274159
		
			// {
			// 	test: /\.(post)?css$/,
			// 	loaders: [
			// 	  'style-loader',
			// 	  'css-loader',
			// 	  {
			// 		loader: 'postcss-loader',
			// 		options: {
			// 		  config: { path: './.storybook/' }
			// 		}
			// 	  }
			// 	],
			// 	include: path.resolve(__dirname, '../')
			// }
		
			// {
			// 	test: /\.css$/,
			// 	use: [
			// 	  'vue-style-loader',
			// 	  {
			// 		loader: 'css-loader',
			// 		options: {
			// 		  // enable CSS Modules
			// 		  modules: true,
			// 		  // customize generated class names
			// 		  localIdentName: '[local]_[hash:base64:8]',
			// 		},
			// 	  },
			// 	],
			// }
		);

		// config.resolve = {
		// 	extensions: ['.js', '.vue', '.json'],
		// 	alias: {
		// 	  	vue$: 'vue/dist/vue.esm.js',
		// 		'@': path.resolve('../'),
		// 	},
		//   };
		
		config.resolve.alias['@'] = path.dirname(path.resolve(__dirname))
		

		// config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js';
	
		// config.resolve = {
		// 	extensions: ['.js', '.vue', '.json'],
		// 	alias: {
		// 	  vue$: 'vue/dist/vue.esm.js',
		// 	//   '@': resolve('src'),
		// 	},
		// };

		// const newAlias = {
		// 	...config.resolve.alias,
		// 	'./styles/screenSizes.css': path.resolve('./src/styles/screenSizes.css'),
		// 	'./styles/colors.css': path.resolve('./src/styles/colors.css'),
		// 	'./styles/typography.css': path.resolve('./src/styles/typography.css'),
		// 	'./styles/fonts': path.resolve('./src/styles/fonts'),
		// 	'./styles/vendor': path.resolve('./src/styles/vendor'),
		//   }

	
		// Return the altered config
		return config;
	  },
};
