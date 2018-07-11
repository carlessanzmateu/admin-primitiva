<template>
  <div class="login">
    <LoginCard/>
  </div>
</template>

<script>
import LoginCard from '@/views/login/components/LoginCard.vue';

export default {
  name: 'Login',
  components: {
    LoginCard,
  },
};
</script>

<style lang="scss" scoped>
.button-custom-styles {
  width: 50%;
  margin-top: 15px;
}
</style>

