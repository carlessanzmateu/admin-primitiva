<template>
  <section>
    <md-button class="md-icon-button" @click="clickOnMenuButton">
      <md-icon>menu</md-icon>
    </md-button>
    <span class="md-title">Banda Primitiva Benetússer</span>
    <span class="md-title" v-if="userName"> - {{ userName }}</span>
  </section>
</template>

<script>
export default {
  name: 'Toolbar',
  props: {
    userName: {
      type: String
    }
  },
  methods: {
    clickOnMenuButton() {
      this.$emit('click-menu');
    }
  }
};
</script>
