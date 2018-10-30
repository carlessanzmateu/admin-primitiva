<template>
<section class="act-creation-step-one">
  <form novalidate class="md-layout" @submit="e => e.preventDefault()">
    <div class="md-layout-item md-small-size-100">
      <md-field>
        <label for="actName">Nombre del acto</label>
        <md-input v-validate="'required'"
                  :required="true"
                  name="actName"
                  v-model="stepOneInfo.name"/>
      </md-field>
      <md-field>
        <label>Descripción</label>
        <md-textarea v-model="stepOneInfo.description"></md-textarea>
      </md-field>
      <md-field>
        <label for="actLocation">Lugar</label>
        <md-input v-validate="'required'"
                  :required="true"
                  name="actLocation"
                  v-model="stepOneInfo.location"/>
      </md-field>
      <md-datepicker v-model="stepOneInfo.date" md-immediately />
    </div>
    <BackNextConfirmButtons
      back-text="Volver"
      next-text="Continuar"
      confirm-text="Crear acto"
      :back-button-is-disabled="true"
      :next-button-is-disabled="!canNavigateToNextStep"
      :confirm-button-is-disabled="false"
      :navigators-are-visible="true"
      :confirm-is-visible="false"
      @next-button="nextButtonHandler"/>
  </form>
</section>
</template>

<script>
import Button from '@/common/Button.vue';
import BackNextConfirmButtons from '@/common/BackNextConfirmButtons.vue';

export default {
  name: 'ActCreationStepOne',
  components: {
    Button,
    BackNextConfirmButtons,
  },
  props: {
    stepOneInfo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    canNavigateToNextStep() {
      return !!this.stepOneInfo.name &&
        !!this.stepOneInfo.description &&
        !!this.stepOneInfo.location &&
        !!this.stepOneInfo.date;
    },
  },
  methods: {
    nextButtonHandler() {
      this.$emit('go-step-two');
    },
  },
};
</script>

<style lang="scss" scoped>
.act-creation-step-one {
  width: 100%;
}
</style>

