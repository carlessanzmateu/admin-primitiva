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
    
  </form>
</section>
</template>

<script>
import List from '@/common/List.vue';

export default {
  name: 'ActCreationStepFive',
  components: {
    List,
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
    }
  }
};

</script>

<style lang="scss">
.act-creation-step-four {
  width: 100%;
}
</style>
