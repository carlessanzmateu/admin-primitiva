<template>
  <md-button class="md-raised button-custom-styles">{{ buttonText }}</md-button>
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
};
</script>
