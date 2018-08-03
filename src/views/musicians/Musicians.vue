<template>
  <div class="musicians">
    <MusiciansList v-if="musicians" :musicians-list="musicians"/>
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
    musicians: undefined,
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
      this.musicians = MusiciansAssembler.assemblerList(this.musiciansFromService);
    },
  },
};
</script>
