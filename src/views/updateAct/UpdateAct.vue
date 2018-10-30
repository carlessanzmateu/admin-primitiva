<template>
  <section class="update-act">
    <h1>Actualizar acto</h1>
    <div class="update-container" v-if="hasNecessaryInfo">
      <h3>Nombre:</h3>
      <md-field>
        <label for="actName">Nombre del acto</label>
        <md-input
          v-validate="'required'"
          :required="true"
          name="actName"
          v-model="getAct.name"/>
      </md-field>
      <h3>Descripción:</h3>
      <md-field>
        <label>Descripción</label>
        <md-textarea v-model="getAct.description"></md-textarea>
      </md-field>
      <h3>Lugar:</h3>
      <md-field>
        <label for="actLocation">Lugar</label>
        <md-input
          v-validate="'required'"
          :required="true"
          name="actLocation"
          v-model="getAct.location"/>
      </md-field>
      <h3>Fecha</h3>
      <!-- <md-datepicker v-model="act.date" md-immediately /> -->
      <h3>Beneficio:</h3>
      <md-field>
        <label for="actIncome">Beneficio</label>
        <md-input
          v-validate="'required'"
          :required="true"
          name="actIncome"
          v-model="getAct.income"
          type="number"/>
      </md-field>
      <h3>Gastos:</h3>
      <md-field>
        <label for="actExpenses">Gastos</label>
        <md-input
          v-validate="'required'"
          :required="true"
          name="actExpenses"
          v-model="getAct.expenses"
          type="number"/>
      </md-field>
      <h3>Tipo de acto:</h3>
      <md-field>
        <label for="actTypeName">Tipo de acto</label>
        <md-select v-model="getAct.actType" name="actTypeName" id="actTypeName">
          <md-option
          v-for="(actType, key) in getAllActTypes"
          :key="key"
          :value="actType.docId">{{ actType.name }}</md-option>
        </md-select>
      </md-field>

      <h3>Ropa</h3>
      <md-field>
        <label for="actTypeName">Ropa</label>
        <md-select v-model="getAct.clothes" name="clothes" id="clothesName">
          <md-option
          v-for="(clothesElement, key) in getAllClothes"
          :key="key"
          :value="clothesElement.docId">{{ clothesElement.alias }}</md-option>
        </md-select>
      </md-field>

      <h3>Músicos inscritos</h3>
      <MusiciansList
        v-if="notExpectedMusicians"
        :available-musicians-list="getNotExpectedMusicians.notExpected"
        :pre-selected-musicians="getNotExpectedMusicians.expected"
        @selection="expectedMusiciansHandler"/>

      <div
        v-if="musiciansWithMultipleInstruments"
        v-for="(musician, key) in musiciansWithMultipleInstruments"
        :key="key">
        <h3>Instrumentos duplicados de {{ musician.name }}</h3>
        <List
        :list-options="musician.instruments"
        :can-duplicate="false"
        :isOneSelection="true"
        property-with-info="id"
        @selection="selectedInstrumentPerMusician"/>
      </div>

      <h3>Músicos asistentes</h3>
      <!-- <List
        v-if="notExpectedMusicians"
        :list-options="getNotExpectedMusicians.notExpected"
        :pre-selected-items="getNotExpectedMusicians.expected"
        :can-duplicate="false"
        property-with-info="name"
        @selection="expectedMusiciansHandler"/> -->
    </div>
  </section>
</template>

<script>
import MusiciansAssembler from '@/assemblers/musicians.assembler';

import { mapActions, mapGetters, mapMutations } from 'vuex';

import List from '@/common/List.vue';
import MusiciansList from '@/common/MusiciansList.vue';

export default {
  name: 'updateAct',
  components: {
    List,
    MusiciansList,
  },
  data: () => ({
    actReadyToUpdate: undefined,
    notExpectedMusicians: undefined,
    musiciansWithMultipleInstruments: undefined,
  }),
  computed: {
    ...mapGetters('acts', ['getAct']),
    ...mapGetters('musicians', ['getAllMusicians','getNotExpectedMusicians']),
    ...mapGetters('actTypes', ['getAllActTypes']),
    ...mapGetters('clothes', ['getAllClothes']),
    ...mapGetters('instruments', ['getAllInstruments']),
    hasNecessaryInfo() {
      return !!this.getAllActTypes
        && !!this.getAllClothes
        && !!this.getAllMusicians
        && !!this.getAllInstruments;
    },
  },
  mounted() {
    this.fetchActDetail(this.$route.params.id);
    this.setExpectedMusicians(this.getAct.expectedMusicians);
    this.notExpectedMusicians = this.getNotExpectedMusicians;
  },
  methods: {
    ...mapActions('acts', ['fetchActDetail']),
    ...mapActions('musicians', ['parseMusician']),
    ...mapMutations('musicians', ['setExpectedMusicians']),
    expectedMusiciansHandler(expectedMusicians) {
      this.musiciansWithMultipleInstruments = expectedMusicians.filter(musician => musician.instruments.length > 1);
    },
    selectedInstrumentPerMusician(foo, bar) {
      console.log(foo)
    }
  },
};
</script>

