<template>
  <section class="musicians-list">
    <h6 v-if="notSelectedMusicians.length">Musicos disponibles</h6>
    <ul class="available-musicians">
      <li
        v-for="(availableMusician, index) in notSelectedMusicians"
        :key="index"
        class="available-musician"
        @click="selectAvailableMusician(availableMusician, index)">
          {{ musicianNamePrettify(availableMusician) }}
          <span
            class="add-button">
            <md-icon>add</md-icon>
          </span>
        </li>
    </ul>

    <h6 v-if="selectedMusicians.length">Musicos asistentes</h6>
    <ul class="selected-musicians">
      <li
        v-for="(selectedMusician, index) in selectedMusicians"
        :key="index"
        class="selected-musician"
        @click="removeSelectedMusician(selectedMusician, index)">
          {{ musicianNamePrettify(selectedMusician) }}
          <span
            class="remove-button">
            <md-icon>clear</md-icon>
          </span>
        </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'MusiciansList',
  props: {
    availableMusiciansList: {
      type: Array,
      required: true,
    },
    preSelectedMusicians: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  created() {
    this.notSelectedMusicians = this.availableMusiciansList;
    this.selectedMusicians = this.preSelectedMusicians ? this.preSelectedMusicians : [];
  },
  data: () => ({
    notSelectedMusicians: undefined,
    selectedMusicians: undefined,
  }),
  methods: {
    musicianNamePrettify(musician) {
      return `${musician.name} ${musician.firstSurname} ${musician.secondSurname}`;
    },
    selectAvailableMusician(musician, indexSelection) {
      this.selectedMusicians.push(musician);
      this.notSelectedMusicians.splice(indexSelection, 1);

      this.$emit('selection', this.selectedMusicians);
    },
    removeSelectedMusician(musician, indexSelection) {
      this.notSelectedMusicians.push(musician);
      this.selectedMusicians.splice(indexSelection, 1);

      this.$emit('selection', this.selectedMusicians);
    },
  },
};
</script>

<style lang="scss" scoped>
.add-button {
  cursor: pointer;
}
.available-musician,
.selected-musician {
  display: flex;
  justify-content: space-between;
  width: 75%;
}

.available-musician:hover,
.selected-musician:hover {
  background-color: #e6e6e6;
  cursor: pointer;

  .add-button {
    color: rgb(41, 206, 41);
  }

  .remove-button {
    color: rgb(255, 27, 27);
  }
}
</style>

