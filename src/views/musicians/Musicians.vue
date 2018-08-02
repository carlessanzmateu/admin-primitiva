<template>
  <div class="musicians">
    <MusiciansList v-if="assembledMusicians" :musicians-list="assembledMusicians"/>
  </div>
</template>

<script>
import MusiciansList from '@/views/musicians/components/MusiciansList.vue';
import MusiciansService from '@/services/musicians.service';

import MusiciansAssembler from '@/assemblers/musicians.assembler';

export default {
  name: 'Musicians',
  components: {
    MusiciansList,
  },
  data: () => ({
    musiciansService: undefined,
    musiciansFromService: undefined,
    assembledMusicians: undefined,
  }),
  created() {
    this.musiciansService = new MusiciansService();
  },
  mounted() {
    this.getMusicians();
  },
  methods: {
    async getMusicians() {
      this.musiciansFromService = await this.musiciansService.getMusicians();
      this.assembledMusicians = MusiciansAssembler.assembler(this.musiciansFromService);
    },
  },
};
</script>
