<template>
  <div class="create-act">
    <h1>Crear nuevo acto</h1>
    <CreateActForm
      v-if="hasNecessaryInfo"
      :act-types="getAllActTypes"
      :clothes="getAllClothes"
      :musicians="getAllMusicians"
      :reinforcements="instruments"
      @create-act-submit="createActHandler"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ActService from '@/services/acts.service';
import InstrumentsService from '@/services/instruments.service';

import ActAssembler from '@/assemblers/acts.assembler';
import InstrumentsAssembler from '@/assemblers/instruments.assembler';

import CreateActForm from '@/views/createAct/components/CreateActForm.vue';

export default {
  name: 'CreateAct',
  components: {
    CreateActForm,
  },
  data: () => ({
    instrumentsService: undefined,
    instrumentsFromService: undefined,
    instruments: undefined,
    actsService: undefined,
  }),
  computed: {
    ...mapGetters('musicians', ['getAllMusicians']),
    ...mapGetters('actTypes', ['getAllActTypes']),
    ...mapGetters('clothes', ['getAllClothes']),
    hasNecessaryInfo() {
      return !!this.getAllActTypes
        && !!this.getAllClothes
        && !!this.getAllMusicians
        && !!this.instruments;
    },
  },
  created() {
    this.instrumentsService = new InstrumentsService();
    this.actsService = new ActService();
  },
  mounted() {
    this.getAllInstruments();
  },
  methods: {
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
