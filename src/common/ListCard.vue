<template>
  <div class="list-card">
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{ title }}</div>
          <div class="md-subhead">{{ subtitle }}</div>
        </md-card-header>

        <md-card-content>
          {{ description }}
        </md-card-content>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'ListCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
    description: {
      type: String,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
