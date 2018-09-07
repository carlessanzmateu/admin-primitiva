<template>
  <div class="create-act">
    <h1>Crear nuevo acto</h1>
    <CreateActForm
      v-if="hasNecessaryInfo"
      :act-types="getAllActTypes"
      :clothes="getAllClothes"
      :musicians="getAllMusicians"
      :reinforcements="getAllInstruments"
      @create-act-submit="createActHandler"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ActService from '@/services/acts.service';

import ActAssembler from '@/assemblers/acts.assembler';

import CreateActForm from '@/views/createAct/components/CreateActForm.vue';

export default {
  name: 'CreateAct',
  components: {
    CreateActForm,
  },
  data: () => ({
    actsService: undefined,
  }),
  computed: {
    ...mapGetters('musicians', ['getAllMusicians']),
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
  created() {
    this.actsService = new ActService();
  },
  methods: {
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
