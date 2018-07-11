<template>
  <div class="list-card">
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{ info.title }}</div>
          <div class="md-subhead">{{ info.subtitle }}</div>
        </md-card-header>

        <md-card-content>
          {{ info.description }}
        </md-card-content>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'ListCard',
  props: {
    info: {
      title: {
        type: String,
        required: true,
      },
      subtitle: {
        type: String,
        required: false,
      },
      description: {
        type: String,
        required: false,
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
