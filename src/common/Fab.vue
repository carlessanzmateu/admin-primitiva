<template>
  <md-button class="md-fab md-primary fab-button">
    <md-icon>{{ iconName }}</md-icon>
  </md-button>
</template>

<script>
export default {
  name: 'fab',
  props: {
    iconName: {
      type: String,
      required: true,
    },
  }
};
</script>
