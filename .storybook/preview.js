// preview.js (ex config.js)
// preview.js configures the "preview" iframe that renders your components.

import Vue from 'vue'
import Vuex from 'vuex'
import { addParameters } from "@storybook/vue";

// global style
import '@/assets/css/variables.css'
import '@/assets/css/app.css'

import MyButton from '../components/Button.vue';

Vue.component('my-button', MyButton);


Vue.use(Vuex)


addParameters({
	options: {
		storySort: (a, b) =>
		  a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
	},
	passArgsFirst: true,
	backgrounds: {
		default: 'white',
		values: [
		  { name: 'white', value: '#ffffff' },
		  { name: 'light-gray', value: '#f5f5f5' },
		]
	},
	docs: {
		// inlineStories: true,
		iframeHeight: '60px'
	}
});

// https://dev.to/f3ltron/storybook-tailwind-nuxt-one-webpack-config-3kbj
Vue.component('nuxt-link', {
	functional: true,
	render: function (createElement, context) {
		let allClass = {}
		let arrClass = context.data.staticClass
			? context.data.staticClass.split(' ')
			: []
		arrClass.forEach(theClass => {
			allClass[theClass] = true
		})
		return createElement('a', { class: allClass }, context.children)
	}
})

Vue.component('client-only', {
	functional: true,
	render (_createElement, context) {
		return context.children
	}
})
