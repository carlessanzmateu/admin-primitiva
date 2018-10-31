<template>
  <section class="multiple-instruments-list">
    <h6>Instrumentos duplicados de {{ musicianNamePrettify() }}</h6>
    <ul class="available-instruments">
      <li
        v-for="(availableInstrument, index) in notSelectedinstruments"
        :key="index"
        class="available-instrument"
        @click="selectAvailableInstrument(availableInstrument, index)">
          {{ availableInstrument.id }}
          <span
            v-if="canAdd"
            class="add-button">
            <md-icon>add</md-icon>
          </span>
        </li>
    </ul>

    <h6>Instrumento seleccionado</h6>
    <ul class="selected-instruments">
      <li
        v-for="(instrument, index) in selectedInstrument"
        :key="index"
        class="selected-instruments"
        @click="removeSelectedInstrument(instrument, index)">
          {{ instrument.id }}
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
  name: 'MultipleInstrumentsList',
  props: {
    availableInstrumentsList: {
      type: Array,
      required: true,
    },
    musician: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.notSelectedinstruments = this.availableInstrumentsList;
  },
  computed: {
    canAdd() {
      return !this.selectedInstrument || this.selectedInstrument.length === 0;
    },
  },
  data: () => ({
    notSelectedinstruments: [],
    selectedInstrument: [],
  }),
  methods: {
    musicianNamePrettify() {
      return `${this.musician.name} ${this.musician.firstSurname} ${this.musician.secondSurname}`;
    },
    selectAvailableInstrument(instrument, indexSelection) {
      if (!this.canAdd) {
        return;
      }
      this.selectedInstrument.push(instrument);
      this.notSelectedinstruments.splice(indexSelection, 1);

      this.$emit('selection', this.selectedInstrument);
    },
    removeSelectedInstrument(instrument, indexSelection) {
      this.notSelectedinstruments.push(instrument);
      this.selectedInstrument.splice(indexSelection, 1);

      this.$emit('selection', this.selectedInstrument);
    },
  },
};
</script>

<style lang="scss" scoped>
.add-button {
  cursor: pointer;
}
.available-instrument,
.selected-instruments {
  display: flex;
  justify-content: space-between;
  width: 75%;
}

.available-instrument:hover,
.selected-instruments:hover {
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

