<template>
<section class="create-act-form">
  <form novalidate class="md-layout" @submit="e => e.preventDefault()">
    <div
      v-show="wizard.stepOneIsVisible"
      class="step-one-wrapper">
      <ActCreationStepOne
        :step-one-info="createActInfo"
        @go-step-two="goStepTwo"/>
    </div>
    <div
      v-show="wizard.stepTwoIsVisible"
      class="step-two-wrapper">
      <ActCreationStepTwo
        :step-two-info="createActInfo"
        @go-step-one="goStepOne"
        @go-step-three="goStepThree"/>
    </div>
    <div
      v-show="wizard.stepThreeIsVisible"
      class="step-three-wrapper">
      <ActCreationStepThree
        :act-types="actTypes"
        :clothes="clothes"
        :step-three-info="createActInfo"
        @go-step-two="goStepTwo"
        @go-step-four="goStepFour"/>
    </div>
    <div
      v-show="wizard.stepFourIsVisible"
      class="step-four-wrapper">
      <ActCreationStepFour
        :musicians="musicians"
        @expected-musicians-selection="expectedMusiciansHandler"
        @go-step-three="goStepThree"
        @go-step-five="goStepFive"/>
    </div>
    <div
      v-show="wizard.stepFiveIsVisible"
      class="step-five-wrapper">
      <ActCreationStepFive
        :reinforcements="reinforcements"
        @reinforcements-selection="reinforcementsHandler"
        @go-step-four="goStepFour"
        @confirm-wizard="createActSubmit"/>
    </div>
  </form>
</section>
</template>

<script>
import ActCreationStepOne from '@/views/createAct/components/ActCreationStepOne.vue';
import ActCreationStepTwo from '@/views/createAct/components/ActCreationStepTwo.vue';
import ActCreationStepThree from '@/views/createAct/components/ActCreationStepThree.vue';
import ActCreationStepFour from '@/views/createAct/components/ActCreationStepFour.vue';
import ActCreationStepFive from '@/views/createAct/components/ActCreationStepFive.vue';

export default {
  name: 'CreateActForm',
  components: {
    ActCreationStepOne,
    ActCreationStepTwo,
    ActCreationStepThree,
    ActCreationStepFour,
    ActCreationStepFive,
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
    musicians: {
      type: Array,
      required: true,
    },
    reinforcements: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    createActInfo: {
      name: undefined,
      description: undefined,
      location: undefined,
      date: undefined,
      income: undefined,
      expenses: undefined,
      actType: undefined,
      clothes: undefined,
      expectedMusicians: undefined,
      reinforcements: undefined,
    },
    wizard: {
      stepOneIsVisible: true,
      stepTwoIsVisible: false,
      stepThreeIsVisible: false,
      stepFourIsVisible: false,
      stepFiveIsVisible: false,
    },
  }),
  methods: {
    async createActSubmit() {
      const isValid = await this.$validator.validate();
      if (isValid) {
        this.$emit('create-act-submit', this.createActInfo);
      } else {
        console.log('not valid act');
      }
    },
    expectedMusiciansHandler(expectedMusicians) {
      this.createActInfo.expectedMusicians = expectedMusicians;
    },
    reinforcementsHandler(reinforcements) {
      this.createActInfo.reinforcements = reinforcements;
    },
    resetFormStep() {
      const keys = Object.keys(this.wizard);

      keys.forEach((key) => {
        this.wizard[key] = undefined;
      });
    },
    goStepOne() {
      this.resetFormStep();
      this.wizard.stepOneIsVisible = true;
    },
    goStepTwo() {
      this.resetFormStep();
      this.wizard.stepTwoIsVisible = true;
    },
    goStepThree() {
      this.resetFormStep();
      this.wizard.stepThreeIsVisible = true;
    },
    goStepFour() {
      this.resetFormStep();
      this.wizard.stepFourIsVisible = true;
    },
    goStepFive() {
      this.resetFormStep();
      this.wizard.stepFiveIsVisible = true;
    },
  },
};

</script>

<style scoped lang="scss">
.step-one-wrapper,
.step-two-wrapper,
.step-three-wrapper,
.step-four-wrapper,
.step-five-wrapper {
  width: 100%;
}
.button-custom-styles {
  width: 100%;
}

.multiple-instruments-advise {
  color: red;
}
</style>
