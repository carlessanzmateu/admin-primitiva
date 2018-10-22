<template>
  <section class="list">
    <h3 v-if="title">{{ title }}</h3>
    <h6 v-if="availableItems.length">Disponibles para añadir</h6>
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
    <h6 v-if="selectedItems.length">Añadidos</h6>
    <ul class="selected-items">
      <li
        v-for="(selectedItem, index) in selectedItems"
        :key="index"
        class="selected-item">
          {{ selectedItem[propertyWithInfo] }}
          <span
            class="remove-button"
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
      required: true,
    },
    preSelectedItems: {
      type: Array,
      default: () => [],
    },
    propertyWithInfo: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    canDuplicate: {
      type: Boolean,
      default: true,
    },
  },
  created() {
    this.availableItems = this.listOptions;
    this.selectedItems = this.preSelectedItems ? this.preSelectedItems : [];
  },
  data: () => ({
    availableItems: undefined,
    selectedItems: undefined,
  }),
  methods: {
    selectAvailableItem(indexSelection) {
      this.selectedItems.push(this.availableItems[indexSelection]);
      if (!this.canDuplicate) {
        this.availableItems.splice(indexSelection, 1);
      }
      this.$emit('selection', this.selectedItems);
    },
    removeSelectedItem(indexSelection) {
      if (!this.canDuplicate) {
        this.availableItems.push(this.selectedItems[indexSelection]);
      }
      this.selectedItems.splice(indexSelection, 1);

      this.$emit('selection', this.selectedItems);
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

.available-item:hover,
.selected-item:hover {
  background-color: #e6e6e6;
}

.add-button:hover {
  color: rgb(41, 206, 41);
}

.remove-button:hover {
  color: rgb(255, 27, 27);
}
</style>

