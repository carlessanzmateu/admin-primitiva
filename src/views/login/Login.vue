<template>
  <div class="login">
    <LoginCard @sign-in="onSignIn"/>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';

import AuthService from '@/services/auth.service';

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
    this.authService = new AuthService();
  },
  methods: {
    ...mapActions('auth', ['setAuthUser']),
    async onSignIn(signInInfo) {
      this.userInfo = await this.authService.signIn(signInInfo.user, signInInfo.password);
      this.setAuthUser(this.userInfo);
      if(this.userInfo) {
        this.$router.push('/');
      }
    },
    getAuthUserFromStore() {
      return this.authUser;
    }
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: linear-gradient(white 50%, #3399ff);
}
.button-custom-styles {
  width: 50%;
  margin-top: 15px;
}
</style>

