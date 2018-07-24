<template>
  <div class="musicians">
    <MusiciansList/>
  </div>
</template>

<script>
import firebase from 'firebase/firebase';
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
    console.log(firebase);
    this.musiciansService = new MusiciansService(firebase);
  },
  mounted() {
    this.getMusicians();
  },
  methods: {
    async getMusicians() {
      this.musicians = await this.musiciansService.getMusicians();
      console.log(this.musicians);
    },
  },
};
</script>
