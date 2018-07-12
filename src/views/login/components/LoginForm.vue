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
    <Button buttonText="SignOut" @button-clicked="signOut"></Button>
  </md-card-actions>

  <span if="authUser">{{authUser.email}}</span>
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
  created () {
    firebase.auth().onAuthStateChanged(user => {
      this.authUser = user;
    });
  },
  data: () => ({
    userValue: undefined,
    passwordValue: undefined,
    authUser: null
  }),
  computed: {
    isDisabled() {
      return !(this.userValue && this.passwordValue);
    },
    hasEmail() {
      console.log(this.authUser);
      return this.authUser.email
    }
  },
  methods: {
    register () {
      // firebase.auth().createUserWithEmailAndPassword('carlessanzmateu@gmail.com','1234567')
    },
    signOut() {
      firebase.auth().signOut();
    },
    async signIn () {
      const isValid = await this.$validator.validate();
      if(!isValid) {
        console.log('not valid');
        return;
      }
      firebase.auth().signInWithEmailAndPassword(this.userValue, this.passwordValue);
    }
  },
};

</script>

<style scoped lang="scss">
.button-custom-styles {
  width: 100%;
}
</style>
