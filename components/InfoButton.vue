<template>
  <button class="button btn" :class="type" :disabled="disabled" @click="click">
    <!-- @slot Default to label prop -->
    <!-- <img width="60px" src="../../logo.png" /> -->
    <slot>
      {{ label }}
    </slot>
  </button>
</template>


<script>
/**
 * InfoButton component description
 */
export default {
  props: {
    /**
     * Whether to disable button
     */
    disabled: {
      type: Boolean,
    },
    /**
     * Button type
     */
    type: {
      type: String,
      default: 'normal',
    },
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    click(ev) {
      /**
       * Passthrough click event
       * @type {Event}
       */
      this.$emit('click', ev);
    },
  },
};
</script>



<style lang="postcss">
.btn{

	background-color: var(--green);
	border:none;
	color: black;
}

@media(--medium-window){

	.btn {
		background-color: red;
	}
}

</style>
