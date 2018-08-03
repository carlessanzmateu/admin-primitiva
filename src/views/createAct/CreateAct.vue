<template>
  <div class="create-act">
    <h1>Crear nuevo acto</h1>
    <CreateActForm
      v-if="hasNecessaryInfo"
      :act-types="actTypes"/>
  </div>
</template>

<script>
import ActTypeService from '@/services/actType.service';

import ActTypeAssembler from '@/assemblers/actTypes.assembler';

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
  }),
  computed: {
    hasNecessaryInfo() {
      return !!this.actTypes;
    },
  },
  created() {
    this.actTypesService = new ActTypeService();
  },
  mounted() {
    this.getActTypes();
  },
  methods: {
    async getActTypes() {
      this.actTypesFromService = await this.actTypesService.getAllActTypes();
      this.actTypes = ActTypeAssembler.assemblerList(this.actTypesFromService);
    },
  },
};
</script>
