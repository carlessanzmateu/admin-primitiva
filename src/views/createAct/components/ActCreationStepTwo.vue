<template>
<section class="act-creation-step-two">
  <form novalidate class="md-layout" @submit="e => e.preventDefault()">
      <md-field>
        <label for="actIncome">Beneficio</label>
        <md-input 
          v-validate="'required'"
          :required="true"
          name="actIncome"
          v-model="stepTwoInfo.income"
          type="number"/>
      </md-field>
      <md-field>
        <label for="actExpenses">Gastos</label>
        <md-input 
          v-validate="'required'"
          :required="true"
          name="actExpenses"
          v-model="stepTwoInfo.expenses"
          type="number"/>
      </md-field>
      <BackNextConfirmButtons
        back-text="Volver"
        next-text="Continuar"
        confirm-text="Crear acto"
        :back-button-is-disabled="false"
        :next-button-is-disabled="!canNavigateToNextStep"
        :confirm-button-is-disabled="false"
        :navigators-are-visible="true"
        :confirm-is-visible="false"
        @back-button="backButtonHandler"
        @next-button="nextButtonHandler"/>
  </form>
</section>
</template>

<script>
import BackNextConfirmButtons from '@/common/BackNextConfirmButtons.vue';

export default {
  name: 'ActCreationStepTwo',
  components: {
    BackNextConfirmButtons,
  },
  props: {
    stepTwoInfo: {
      type: Object,
      required: true,
    }
  },
  computed: {
    canNavigateToNextStep() {
      return !!this.stepTwoInfo.income && !!this.stepTwoInfo.expenses;
    },
  },
  methods: {
    backButtonHandler() {
      this.$emit('go-step-one');
    },
    nextButtonHandler() {
      this.$emit('go-step-three');
    },
  },
};

</script>

<style lang="scss">
.act-creation-step-two {
  width: 100%;
}
</style>

