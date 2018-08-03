<template>
  <section>
    <md-button class="md-icon-button" @click="clickOnMenuButton" v-if="hasAuthUser">
      <md-icon>menu</md-icon>
    </md-button>
    <span class="md-title site-name" @click="goHome">Banda Primitiva Benetússer</span>
  </section>
</template>

<script>
export default {
  name: 'Toolbar',
  props: {
    hasAuthUser: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    clickOnMenuButton() {
      this.$emit('click-menu');
    },
    goHome() {
      this.$emit('go-home');
    },
  },
};
</script>

<style lang="scss" scoped>
  .site-name {
    cursor: pointer;
  }
</style>

