<template>
<section class="act-creation-step-four">
  <form novalidate class="md-layout" @submit="e => e.preventDefault()">
    <div class="step-four-wrapper">
      <List
          :list-options="musicians"
          :can-duplicate="false"
          title="Músicos esperados"
          property-with-info="name"
          @selection="expectedMusiciansHandler"/>
    </div>
    
  </form>
</section>
</template>

<script>
import List from '@/common/List.vue';

export default {
  name: 'ActCreationStepFour',
  components: {
    List,
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
    }
  }
};

</script>

<style lang="scss">
.act-creation-step-four {
  width: 100%;
}
</style>
