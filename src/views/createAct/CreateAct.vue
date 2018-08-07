<template>
  <div class="create-act">
    <h1>Crear nuevo acto</h1>
    <CreateActForm
      v-if="hasNecessaryInfo"
      :act-types="actTypes"
      :clothes="clothes"/>
  </div>
</template>

<script>
import ActTypeService from '@/services/actType.service';
import ClothesService from '@/services/clothes.service';

import ActTypeAssembler from '@/assemblers/actTypes.assembler';
import ClothesAssembler from '@/assemblers/clothes.assembler';

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
  }),
  computed: {
    hasNecessaryInfo() {
      return !!this.actTypes && !!this.clothes;
    },
  },
  created() {
    this.actTypesService = new ActTypeService();
    this.clothesService = new ClothesService();
  },
  mounted() {
    this.getActTypes();
    this.getAllClothes();
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
  },
};
</script>
