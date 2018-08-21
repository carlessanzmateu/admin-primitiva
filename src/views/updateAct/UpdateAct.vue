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
          v-model="act.name"/>
      </md-field>
      <h3>Descripción:</h3>
      <md-field>
        <label>Descripción</label>
        <md-textarea v-model="act.description"></md-textarea>
      </md-field>
      <h3>Lugar:</h3>
      <md-field>
        <label for="actLocation">Lugar</label>
        <md-input
          v-validate="'required'"
          :required="true"
          name="actLocation"
          v-model="act.location"/>
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
          v-model="act.income"
          type="number"/>
      </md-field>
      <h3>Gastos:</h3>
      <md-field>
        <label for="actExpenses">Gastos</label>
        <md-input
          v-validate="'required'"
          :required="true"
          name="actExpenses"
          v-model="act.expenses"
          type="number"/>
      </md-field>
      <h3>Tipo de acto:</h3>
      <md-field>
        <label for="actTypeName">Tipo de acto</label>
        <md-select v-model="act.actType" name="actTypeName" id="actTypeName">
          <md-option
          v-for="(actType, key) in actTypes"
          :key="key"
          :value="actType.docId">{{ actType.name }}</md-option>
        </md-select>
      </md-field>
      <h3>Ropa</h3>
      <md-field>
        <label for="actTypeName">Ropa</label>
        <md-select v-model="act.clothes" name="clothes" id="clothesName">
          <md-option
          v-for="(clothesElement, key) in clothes"
          :key="key"
          :value="clothesElement.docId">{{ clothesElement.alias }}</md-option>
        </md-select>
      </md-field>
      <h3>Músicos inscritos</h3>
      <List
        :list-options="musicians"
        :pre-selected-items="act.expectedMusicians"
        :can-duplicate="false"
        title="Músicos esperados"
        property-with-info="name"
        @selection="true"/>
    </div>
  </section>
</template>

<script>
import ActsService from '@/services/acts.service';
import ActTypeService from '@/services/actType.service';
import ClothesService from '@/services/clothes.service';
import MusiciansService from '@/services/musicians.service';

import ActsAssembler from '@/assemblers/acts.assembler';
import ActTypeAssembler from '@/assemblers/actTypes.assembler';
import ClothesAssembler from '@/assemblers/clothes.assembler';
import MusiciansAssembler from '@/assemblers/musicians.assembler';

import List from '@/common/List.vue';

export default {
  name: 'updateAct',
  components: {
    List,
  },
  data: () => ({
    actsService: undefined,
    act: undefined,
    actTypesService: undefined,
    actTypesFromService: undefined,
    actTypes: undefined,
    clothesService: undefined,
    clothesFromService: undefined,
    clothes: undefined,
    musiciansService: undefined,
    musiciansFromService: undefined,
    musicians: undefined,
    preselectedMusicians: undefined,
  }),
  computed: {
    hasNecessaryInfo() {
      return !!this.act && !!this.actTypes && !!this.clothes && !!this.musicians;
    },
  },
  created() {
    this.actsService = new ActsService();
    this.actTypesService = new ActTypeService();
    this.clothesService = new ClothesService();
    this.musiciansService = new MusiciansService();
  },
  mounted() {
    this.getAct();
    this.getActTypes();
    this.getAllClothes();
    this.getAllMusicians();
  },
  methods: {
    async getAct() {
      const actFromService = await this.actsService.getAct(this.$route.params.id);
      this.act = ActsAssembler.assembler(actFromService);
    },
    async getActTypes() {
      this.actTypesFromService = await this.actTypesService.getAllActTypes();
      this.actTypes = ActTypeAssembler.assemblerList(this.actTypesFromService);
    },
    async getAllClothes() {
      this.clothesFromService = await this.clothesService.getAllClothes();
      this.clothes = ClothesAssembler.assemblerList(this.clothesFromService);
    },
    async getAllMusicians() {
      this.musiciansFromService = await this.musiciansService.getMusicians();
      this.musicians = MusiciansAssembler.assemblerList(this.musiciansFromService);
      this.expectedMusiciansRecoverFromService();
    },
    async expectedMusiciansRecoverFromService() {
      const cacheArrayOfMusicians = [];
      const resolvedExpectedMusicians = [];

      this.act.expectedMusicians.forEach((musician) => {
        cacheArrayOfMusicians.push(musician);
      });

      cacheArrayOfMusicians.forEach(async (musician) => {
        const resolvedMusician = await this.musiciansService.getMusician(musician.id)
        resolvedExpectedMusicians.push(resolvedMusician);
      });

      // console.log(MusiciansAssembler.assemblerList(resolvedExpectedMusicians));
    }
  },
};
</script>

