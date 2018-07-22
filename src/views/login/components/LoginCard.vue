<template>
  <div class="login-card">
    <Card>
      <md-card-header>
        <div class="md-title">Login</div>
      </md-card-header>
      <LoginForm @sign-in="onSignIn"/>
    </Card>
  </div>
</template>

<script>
import Card from '@/common/Card.vue';
import Button from '@/common/Button.vue';
import LoginForm from '@/views/login/components/LoginForm.vue';

export default {
  name: 'LoginCard',
  components: {
    Card,
    Button,
    LoginForm,
  },
  methods: {
    onSignIn() {
      this.$emit('sign-in');
    },
  },
};
</script>

<style scoped lang="scss">
.button-custom-styles {
  width: 100%;
}
</style>
