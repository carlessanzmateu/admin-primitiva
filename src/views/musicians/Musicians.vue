<template>
  <div class="musicians">
    <MusiciansList v-if="musicians" :musicians-list="musicians"/>
  </div>
</template>

<script>
import MusiciansList from '@/views/musicians/components/MusiciansList.vue';
import MusiciansService from '@/services/musicians.service';

export default {
  name: 'Musicians',
  components: {
    MusiciansList,
  },
  data: () => ({
    musiciansService: undefined,
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
      this.musicians = await this.musiciansService.getMusicians();
    },
  },
};
</script>
