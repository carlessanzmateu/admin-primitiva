<template>
  <div class="md-layout">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Banda Primitiva Benetússer</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <router-link to="/acts">
            <md-list-item>
              <md-icon>near_me</md-icon>
              <span class="md-list-item-text">Actos</span>
            </md-list-item>
          </router-link>
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
export default {
  name: 'Reveal',
  data: () => ({
    menuVisible: false,
  }),
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
