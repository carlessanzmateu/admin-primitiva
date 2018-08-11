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
  </form>
</section>
</template>

<script>
import Button from '@/common/Button.vue';

export default {
  name: 'ActCreationStepOne',
  components: {
    Button,
  },
  props: {
    stepOneInfo: {
      type: Object,
      required: true,
    }
  },
  // computed: {
  //   isDisabled() {
  //     return !(this.stepOneInfo.name && this.stepOneInfo.description && this.stepOneInfo.location);
  //   },
  // },
  // methods: {
  //   async createActSubmit() {
  //     const isValid = await this.$validator.validate();
  //     if (isValid) {
  //       const actInfo = {
  //         name: this.actName,
  //         description: this.actDescription,
  //         location: this.actLocation,
  //       };
  //       this.$emit('step-one', actInfo);
  //     } else {
  //       console.log('not valid step oen act creation');
  //     }
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.act-creation-step-one {
  width: 100%;
}
</style>

