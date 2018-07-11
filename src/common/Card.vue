<template>
  <md-card>
    <slot/>
  </md-card>
</template>

<script>
export default {
  name: 'card',
};
</script>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
