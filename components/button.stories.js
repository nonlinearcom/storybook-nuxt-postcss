import Vue from 'vue';
import MyButton from './Button.vue';


export default {
  	title: 'Button',
	component: MyButton,
	argTypes: {
		rounded: {
			defaultValue: true
		},
		color: {
			control: {
				type: 'color'
			},
			defaultValue: '#f00'
		},
	}
};

export const Rounded = (args) => ({
	props: Object.keys(args),
  	components: { MyButton },
	template: '<my-button :color="color" :rounded="rounded">{{label}}</my-button>'
});

Rounded.storyName = 'rounded .js';
Rounded.parameters = { layout: 'centered' };
Rounded.args = { rounded: true, label: 'A Button with rounded edges' };
Rounded.decorators = [];


export const Square = Rounded.bind();

Square.args = {
  rounded: false,
  color: '#00f',
  label: 'A Button with square edges',
};


