<template>
<section class="act-creation-step-five">
  <form novalidate class="md-layout" @submit="e => e.preventDefault()">
    <div class="step-five-wrapper">
      <List
        :list-options="reinforcements"
        title="Refuerzos"
        property-with-info="name"
        @selection="reinforcementsHandler"/>
    </div>
    <BackNextConfirmButtons
      back-text="Volver"
      next-text="Continuar"
      confirm-text="Crear acto"
      :back-button-is-disabled="false"
      :next-button-is-disabled="true"
      :confirm-button-is-disabled="false"
      :navigators-are-visible="true"
      :confirm-is-visible="true"
      @back-button="backButtonHandler"
      @confirm-button="confirmButtonHandler"/>
  </form>
</section>
</template>

<script>
import List from '@/common/List.vue';
import BackNextConfirmButtons from '@/common/BackNextConfirmButtons.vue';

export default {
  name: 'ActCreationStepFive',
  components: {
    List,
    BackNextConfirmButtons,
  },
  props: {
    reinforcements: {
      type: Array,
      required: true,
    },
  },
  methods: {
    reinforcementsHandler(reinforcements) {
      this.$emit('reinforcements-selection', reinforcements);
    },
    backButtonHandler() {
      this.$emit('go-step-four');
    },
    confirmButtonHandler() {
      this.$emit('confirm-wizard');
    },
  },
};

</script>

<style lang="scss">
.act-creation-step-four {
  width: 100%;
}
</style>
