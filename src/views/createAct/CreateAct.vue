<template>
  <div class="create-act">
    <h1>Crear nuevo acto</h1>
    <CreateActForm
      v-if="hasNecessaryInfo"
      :act-types="actTypes"
      :clothes="clothes"
      :musicians="getAllMusicians"
      :reinforcements="instruments"
      @create-act-submit="createActHandler"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ActService from '@/services/acts.service';
import ActTypeService from '@/services/actType.service';
import ClothesService from '@/services/clothes.service';
import InstrumentsService from '@/services/instruments.service';

import ActAssembler from '@/assemblers/acts.assembler';
import ActTypeAssembler from '@/assemblers/actTypes.assembler';
import ClothesAssembler from '@/assemblers/clothes.assembler';
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
    instrumentsService: undefined,
    instrumentsFromService: undefined,
    instruments: undefined,
    actsService: undefined,
  }),
  computed: {
    ...mapGetters('musicians', ['getAllMusicians']),
    hasNecessaryInfo() {
      console.log(this.getAllMusicians);
      return !!this.actTypes && !!this.clothes && !!this.getAllMusicians && !!this.instruments;
    },
  },
  created() {
    this.actTypesService = new ActTypeService();
    this.clothesService = new ClothesService();
    this.instrumentsService = new InstrumentsService();
    this.actsService = new ActService();
  },
  mounted() {
    this.getActTypes();
    this.getAllClothes();
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
    async getAllInstruments() {
      this.instrumentsFromService = await this.instrumentsService.getAllInstruments();
      this.instruments = InstrumentsAssembler.assemblerList(this.instrumentsFromService);
    },
    async createActHandler(actInfo) {
      const actRequest = ActAssembler.actRequestAssember(actInfo);
      const actCreationConfirmation = await this.actsService.createAct(actRequest);
      if (actCreationConfirmation) {
        this.$router.push('/acts');
      }
    },
  },
};
</script>
