<template>
<section class="act-creation-step-three">
  <form novalidate class="md-layout" @submit="e => e.preventDefault()">
    <md-field>
      <label for="actTypeName">Tipo de acto</label>
      <md-select v-model="stepThreeInfo.actType" name="actTypeName" id="actTypeName">
        <md-option
        v-for="(actType, key) in actTypes"
        :key="key"
        :value="actType.docId">{{ actType.name }}</md-option>
      </md-select>
    </md-field>
    <md-field>
      <label for="actTypeName">Ropa</label>
      <md-select v-model="stepThreeInfo.clothes" name="clothes" id="clothesName">
        <md-option
        v-for="(clothesElement, key) in clothes"
        :key="key"
        :value="clothesElement.docId">{{ clothesElement.alias }}</md-option>
      </md-select>
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
  name: 'ActCreationStepThree',
  components: {
    BackNextConfirmButtons,
  },
  props: {
    actTypes: {
      type: Array,
      required: true,
    },
    clothes: {
      type: Array,
      required: true,
    },
    stepThreeInfo: {
      type: Object,
      required: true,
    }
  },
  computed: {
    canNavigateToNextStep() {
      return !!this.stepThreeInfo.actType && !!this.stepThreeInfo.clothes;
    },
  },
  methods: {
    backButtonHandler() {
      this.$emit('go-step-two');
    },
    nextButtonHandler() {
      this.$emit('go-step-four');
    },
  },
};

</script>

<style lang="scss">
.act-creation-step-three {
  width: 100%;
}
</style>
