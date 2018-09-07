<template>
<section class="act-creation-step-four">
  <form novalidate class="md-layout" @submit="e => e.preventDefault()">
    <List
      :list-options="musicians"
      :can-duplicate="false"
      title="Músicos esperados"
      property-with-info="name"
      @selection="expectedMusiciansHandler"/>
    <BackNextConfirmButtons
      back-text="Volver"
      next-text="Continuar"
      confirm-text="Crear acto"
      :back-button-is-disabled="false"
      :next-button-is-disabled="false"
      :confirm-button-is-disabled="false"
      :navigators-are-visible="true"
      :confirm-is-visible="false"
      @back-button="backButtonHandler"
      @next-button="nextButtonHandler"/>
  </form>
</section>
</template>

<script>
import List from '@/common/List.vue';
import BackNextConfirmButtons from '@/common/BackNextConfirmButtons.vue';

export default {
  name: 'ActCreationStepFour',
  components: {
    List,
    BackNextConfirmButtons,
  },
  props: {
    musicians: {
      type: Array,
      required: true,
    },
  },
  methods: {
    expectedMusiciansHandler(musicians) {
      this.$emit('expected-musicians-selection', musicians);
    },
    backButtonHandler() {
      this.$emit('go-step-three');
    },
    nextButtonHandler() {
      this.$emit('go-step-five');
    },
  },
};

</script>

<style lang="scss">
.act-creation-step-four {
  width: 100%;
}
</style>
