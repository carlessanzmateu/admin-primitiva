<template>
  <div class="md-layout">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <Toolbar @click-menu="toggleMenu" :userName="hasAuthUser"/>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <router-link to="/">
            <md-list-item @click="toggleMenu">
              <md-icon>home</md-icon>
              <span class="md-list-item-text">Home</span>
            </md-list-item>
          </router-link>
          <router-link to="/acts">
            <md-list-item @click="toggleMenu">
              <md-icon>near_me</md-icon>
              <span class="md-list-item-text">Actos</span>
            </md-list-item>
          </router-link>
          <md-list-item @click="signOut" v-if="hasAuthUser">
            <md-icon>power_settings_new</md-icon>
            <span class="md-list-item-text">Salir</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content class="content-contaier">
        <div id="app" class="md-layout-item">
          <router-view/>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import AuthService from '@/services/auth.service.js';

import Toolbar from '@/common/Toolbar.vue';

export default {
  name: 'Reveal',
  components: {
    Toolbar,
  },
  created() {
    this.authService = new AuthService(firebase);
  },
  computed: {
    ...mapState('auth', ['authUser']),
    hasAuthUser() {
      return this.authUser ? this.authUser.email : undefined;
    },
  },
  data: () => ({
    menuVisible: false,
    userEmail: '',
  }),
  methods: {
    ...mapMutations('auth',['removeAuthUser']),
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    async signOut() {
      await this.authService.signOut();
      this.removeAuthUser();
      this.toggleMenu();
    }
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content-contaier {
  min-width: 100vw;
  min-height: 100vh;
}
.md-drawer {
  background-color: white;
}
</style>
