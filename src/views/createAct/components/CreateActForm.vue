<template>
<section class="create-act-form">
  <form novalidate class="md-layout" @submit="e => e.preventDefault()">
    <div
      v-if="wizard.stepOneIsVisible"
      class="step-one-wrapper">
      <ActCreationStepOne
        :step-one-info="createActInfo"/>
    </div>
    <div
      v-if="wizard.stepTwoIsVisible"
      class="step-two-wrapper">
      <ActCreationStepTwo
        :step-two-info="createActInfo"/>
    </div>
    <div
      v-if="wizard.stepThreeIsVisible"
      class="step-three-wrapper">
      <ActCreationStepThree
        :act-types="actTypes"
        :clothes="clothes"
        :step-three-info="createActInfo"/>
    </div>
    <div
      v-if="wizard.stepFourIsVisible"
      class="step-four-wrapper">
      <ActCreationStepFour
        :musicians="musicians"
        @expected-musicians-selection="expectedMusiciansHandler"/>
    </div>
    <div
      v-if="wizard.stepFiveIsVisible" 
      class="step-five-wrapper">
      <ActCreationStepFive
        :reinforcements="reinforcements"
        @reinforcements-selection="reinforcementsHandler"/>
    </div>
  </form>
  <BackNextConfirmButtons
    back-text="Volver"
    next-text="Continuar"
    confirm-text="Crear acto"
    :back-button-is-disabled="false"
    :next-button-is-disabled="false"
    :confirm-button-is-disabled="false"
    :navigators-are-visible="true"
    :confirm-is-visible="true"
    @back-button="backButtonHandler"
    @next-button="nextButtonHandler"
    @confirm-button="confirmButtonHandler"/>
</section>
</template>

<script>
import ActCreationStepOne from '@/views/createAct/components/ActCreationStepOne.vue';
import ActCreationStepTwo from '@/views/createAct/components/ActCreationStepTwo.vue';
import ActCreationStepThree from '@/views/createAct/components/ActCreationStepThree.vue';
import ActCreationStepFour from '@/views/createAct/components/ActCreationStepFour.vue';
import ActCreationStepFive from '@/views/createAct/components/ActCreationStepFive.vue';
import BackNextConfirmButtons from '@/common/BackNextConfirmButtons.vue';

export default {
  name: 'CreateActForm',
  components: {
    ActCreationStepOne,
    ActCreationStepTwo,
    ActCreationStepThree,
    ActCreationStepFour,
    ActCreationStepFive,
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
    createActInfo : {
      name: undefined,
      description: undefined,
      location: undefined,
      date: undefined,
      income: undefined,
      expenses: undefined,
      actType: undefined,
      expectedMusicians: undefined,
      reinforcements: undefined,
    },
    wizard: {
      stepOneIsVisible: true,
      stepTwoIsVisible: false,
      stepThreeIsVisible: false,
      stepFourIsVisible: false,
      stepFiveIsVisible: false,
    }
  }),
  computed: {
    isDisabled() {
      // return !(this.actName 
      //   && this.actDescription 
      //   && this.actLocation 
      //   && this.actTypeId
      //   && this.clothesElementId
      //   && this.actDayDate);
      return false;
    },
    expectedMusiciansWithMultipleInstruments() {
      console.log(this.expectedMusicians);
      return this.expectedMusicians.find((expectedMusician) => {
        return expectedMusician.instruments.length > 1;
      });
    }
  },
  methods: {
    async createActSubmit() {
      console.log(this.createActInfo);
      // const isValid = await this.$validator.validate();
      // if (isValid) {
      //   const actInfo = {
      //     name: this.actName,
      //     description: this.actDescription,
      //     location: this.actLocation,
      //     income: this.actIncome,
      //     expenses: this.actExpenses,
      //     actType: this.actTypes.find((actType) => actType.id === this.actTypeId),
      //     clothes: this.clothes.find((clothesElement) => clothesElement.id === this.clothesElementId),
      //     date: this.actDayDate,
      //     expectedMusicians: this.expectedMusicians,
      //     reinforcements: this.confirmedReinforcements,
      //   };
      //   this.$emit('create-act-submit', actInfo);
      // } else {
      //   console.log('not valid act');
      // }
    },
    expectedMusiciansHandler(expectedMusicians) {
      this.createActInfo.expectedMusicians = expectedMusicians;
    },
    reinforcementsHandler(reinforcements) {
      this.createActInfo.reinforcements = reinforcements;
    },
    backButtonHandler() {
      console.log('go back!');
    },
    nextButtonHandler() {
      console.log('go next!');
    },
    confirmButtonHandler() {
      console.log('confirm!');      
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
