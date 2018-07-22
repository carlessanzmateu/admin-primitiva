<template>
<section class="login-form">
  <form novalidate class="md-layout" @submit="e => e.preventDefault()">
    <div class="md-layout-item md-small-size-100">
      <md-field>
        <label for="username">Usuario</label>
        <md-input v-validate="'required|email'"
                  :required="true"
                  name="username"
                  id="login-user"
                  v-model="userValue"/>
        <!-- <span>{{ errors.first('email') }}</span> -->
      </md-field>
      <md-field>
        <label for="login-password">Contraseña</label>
        <md-input v-validate="'required'"
                  :required="true"
                  name="login-password"
                  id="login-password"
                  type="password"
                  v-model="passwordValue"/>
      </md-field>
    </div>
  </form>

  <md-card-actions>
    <Button buttonText="Entrar" @button-clicked="signIn" :disabled="isDisabled"></Button>
    <Button buttonText="SignOut" @button-clicked="true"></Button>
  </md-card-actions>
</section>
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
  data: () => ({
    userValue: undefined,
    passwordValue: undefined,
    authUser: null,
  }),
  computed: {
    isDisabled() {
      return !(this.userValue && this.passwordValue);
    },
    hasEmail() {
      return this.authUser.email;
    },
  },
  methods: {
    async signIn() {
      const isValid = await this.$validator.validate();
      if (isValid) {
        this.$emit('sign-in');
      } else {
        console.log('not valid sign in');
      }
    },
  },
};

</script>

<style scoped lang="scss">
.button-custom-styles {
  width: 100%;
}
</style>
