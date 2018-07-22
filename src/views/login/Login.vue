<template>
  <div class="login">
    <LoginCard @sign-in="onSignIn"/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import AuthService from '@/services/auth.service.js';

import LoginCard from '@/views/login/components/LoginCard.vue';

const authService = new AuthService();

export default {
  name: 'Login',
  components: {
    LoginCard,
  },
  created() {
    const user = authService.firebaseListener();
    this.setAuthUser(user);
  },
  methods: {
    ...mapMutations('auth', ['setAuthUser']),
    onSignIn() {
      console.log('sign in is working');
    },
  },
};
</script>

<style lang="scss" scoped>
.button-custom-styles {
  width: 50%;
  margin-top: 15px;
}
</style>

