<template>
  <section>
    <img
      v-if="urlToImage"
      class="musician-avatar"
      :src="urlToImage"/>
    <img
      v-if="!urlToImage"
      class="musician-avatar"
      src="../../../assets/logo.png"/>
  </section>
</template>

<script>
export default {
  name: 'MusicianAvatar',
  props: {
    urlToImage: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.musician-avatar {
  width: 200px;
  height: 200px;
  border-radius: 100px;
}
</style>

