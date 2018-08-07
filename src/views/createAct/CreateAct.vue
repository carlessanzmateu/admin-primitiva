<template>
  <div class="create-act">
    <h1>Crear nuevo acto</h1>
    <CreateActForm
      v-if="hasNecessaryInfo"
      :act-types="actTypes"
      :clothes="clothes"
      :musicians="musicians"
      :reinforcements="instruments"/>
  </div>
</template>

<script>
import ActTypeService from '@/services/actType.service';
import ClothesService from '@/services/clothes.service';
import MusiciansService from '@/services/musicians.service';
import InstrumentsService from '@/services/instruments.service'

import ActTypeAssembler from '@/assemblers/actTypes.assembler';
import ClothesAssembler from '@/assemblers/clothes.assembler';
import MusiciansAssembler from '@/assemblers/musicians.assembler';
import InstrumentsAssembler from '@/assemblers/instruments.assembler';

import CreateActForm from '@/views/createAct/components/CreateActForm.vue';

export default {
  name: 'CreateAct',
  components: {
    CreateActForm,
  },
  data: () => ({
    actTypesService: undefined,
    actTypesFromService: undefined,
    actTypes: undefined,
    clothesService: undefined,
    clothesFromService: undefined,
    clothes: undefined,
    musiciansService: undefined,
    musiciansFromService: undefined,
    musicians: undefined,
    instrumentsService: undefined,
    instrumentsFromService: undefined,
    instruments: undefined,
  }),
  computed: {
    hasNecessaryInfo() {
      return !!this.actTypes && !!this.clothes && !!this.musicians && !!this.instruments;
    },
  },
  created() {
    this.actTypesService = new ActTypeService();
    this.clothesService = new ClothesService();
    this.musiciansService = new MusiciansService();
    this.instrumentsService = new InstrumentsService();
  },
  mounted() {
    this.getActTypes();
    this.getAllClothes();
    this.getAllMusicians();
    this.getAllInstruments();
  },
  methods: {
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
    },
    async getAllInstruments() {
      this.instrumentsFromService = await this.instrumentsService.getAllInstruments();
      this.instruments = InstrumentsAssembler.assemblerList(this.instrumentsFromService );
    }
  },
};
</script>
