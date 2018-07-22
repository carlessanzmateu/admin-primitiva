<template>
  <div class="login">
    <LoginCard @sign-in="onSignIn"/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import AuthService from '@/services/auth.service.js';

import LoginCard from '@/views/login/components/LoginCard.vue';

export default {
  name: 'Login',
  components: {
    LoginCard,
  },
  data: () => ({
    authService: undefined,
    userInfo: undefined,
  }),
  created() {
    this.authService = new AuthService(firebase);
  },
  methods: {
    ...mapMutations('auth', ['setAuthUser']),
    async onSignIn(signInInfo) {
      this.userInfo = await this.authService.signIn(signInInfo.user, signInInfo.password);
      this.setAuthUser(this.userInfo);
    },
    getAuthUserFromStore() {
      return this.authUser;
    }
  },
};
</script>

<style lang="scss" scoped>
.button-custom-styles {
  width: 50%;
  margin-top: 15px;
}
</style>

