<template>
  <div class="login-card">
    <Card>
      <md-card-header>
        <div class="md-title">Login</div>
      </md-card-header>

      <form novalidate class="md-layout" @submit.prevent="validateUser">
        <div class="md-layout-item md-small-size-100">
          <md-field>
            <label for="last-name">Usuario</label>
            <md-input name="last-name" id="login-user"/>
          </md-field>
          <md-field>
            <label for="last-name">Contraseña</label>
            <md-input name="last-name" id="login-password" type="password"/>
          </md-field>
        </div>
      </form>

      <md-card-actions>
        <Button buttonText="Entrar"></Button>
      </md-card-actions>
    </Card>
  </div>
</template>

<script>
import Card from '@/common/Card.vue';
import Button from '@/common/Button.vue';

export default {
  name: 'LoginCard',
  components: {
    Card,
    Button,
  },
};
</script>

<style scoped lang="scss">
.button-custom-styles {
  width: 100%;
}
</style>
