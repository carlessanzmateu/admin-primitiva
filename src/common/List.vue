<template>
  <section class="list">
    <h3 v-if="title">{{ title }}</h3>
    <h6 v-if="availableItems.length">Disponibles</h6>
    <ul class="available-items">
      <li
        v-for="(availableItem, index) in availableItems"
        :key="index"
        class="available-item">
          {{ availableItem[propertyWithInfo] }}
          <span
            class="add-button"
            @click="selectAvailableItem(index)">
            <md-icon>add</md-icon>
          </span>
        </li>
    </ul>
    <h6 v-if="selectedItems.length">Seleccionados</h6>
    <ul class="selected-items">
      <li
        v-for="(selectedItem, index) in selectedItems"
        :key="index"
        class="selected-item">
          {{ selectedItem[propertyWithInfo] }}
          <span
            class="add-button"
            @click="removeSelectedItem(index)">
            <md-icon>clear</md-icon>
          </span>
        </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'List',
  props: {
    listOptions: {
      type: Array,
      required: true
    },
    propertyWithInfo: {
      type: String,
      required: true,
    },
    title: {
      type: String
    }
  },
  created() {
    this.availableItems = this.listOptions;
  },
  data: () => ({
    availableItems: undefined,
    selectedItems: [],
  }),
  methods: {
    selectAvailableItem(indexSelection) {
      this.selectedItems.push(this.availableItems[indexSelection]);
      this.availableItems.splice(indexSelection, 1);
      this.$emit('selection', this.selectedItems);
    },
    removeSelectedItem(indexSelection) {
      this.availableItems.push(this.selectedItems[indexSelection]);
      this.selectedItems.splice(indexSelection, 1);
      this.$emit('selection',this.selectedItems);
    },
  },
};
</script>

<style lang="scss" scoped>
.add-button {
  cursor: pointer;
}
.available-item,
.selected-item {
  display: flex;
  justify-content: space-between;
}
</style>

