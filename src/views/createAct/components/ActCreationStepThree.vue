<template>
<section class="act-creation-step-three">
  <form novalidate class="md-layout" @submit="e => e.preventDefault()">
    <div class="step-three-wrapper">
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
    </div>
    
  </form>
</section>
</template>

<script>
export default {
  name: 'ActCreationStepThree',
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
};

</script>

<style lang="scss">
.act-creation-step-three {
  width: 100%;
}
</style>
