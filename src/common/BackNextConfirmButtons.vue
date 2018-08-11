<template>
  <section class="back-next-confirm-buttons">
    <div
      v-if="navigatorsAreVisible"
      class="navigators">
      <Button :buttonText="backText" @button-clicked="backClickHandler" :disabled="backButtonIsDisabled"></Button>
      <Button :buttonText="nextText" @button-clicked="nextClickHandler" :disabled="nextButtonIsDisabled"></Button>
    </div>
    <div
      v-if="confirmIsVisible"
      class="confirm">
      <Button :buttonText="confirmText" @button-clicked="confirmHandler" :disabled="confirmButtonIsDisabled"></Button>
    </div>
  </section>
</template>

<script>
import Button from '@/common/Button.vue';

export default {
  name: 'BackNextConfirmButton',
  components: {
    Button,
  },
  props: {
    backText: {
      type: String,
      default: 'Volver',
    },
    nextText: {
      type: String,
      default: 'Continuar'
    },
    confirmText: {
      type: String,
      default: 'Confirmar'
    },
    backButtonIsDisabled: {
      type: Boolean,
      required: true,
    },
    nextButtonIsDisabled: {
      type: Boolean,
      required: true,
    },
    confirmButtonIsDisabled: {
      type: Boolean,
      required: true,
    },
    navigatorsAreVisible: {
      type: Boolean,
      required: true,
    },
    confirmIsVisible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    backClickHandler() {
      this.$emit('back-button');
    },
    nextClickHandler() {
      this.$emit('next-button');
    },
    confirmHandler() {
      this.$emit('confirm-button');
    },
  }
};

</script>

<style lang="scss">
.act-creation-step-four {
  width: 100%;
}
</style>
