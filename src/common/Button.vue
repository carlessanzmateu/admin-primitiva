<template>
  <md-button class="md-raised button-custom-styles" @click="isClicked">{{ buttonText }}</md-button>
</template>

<script>
export default {
  name: 'buttonWithText',
  props: {
    buttonText: {
      type: String,
      required: true,
    },
  },
  methods: {
    isClicked() {
      this.$emit('button-clicked')
    }
  }
};
</script>
