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
  </form>
</section>
</template>

<script>

export default {
  name: 'ActCreationStepTwo',
  props: {
    stepTwoInfo: {
      type: Object,
      required: true,
    }
  },
};

</script>

<style lang="scss">
.act-creation-step-two {
  width: 100%;
}
</style>

