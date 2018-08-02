<template>
  <div class="musician">
    <h1>Musician view</h1>
  </div>
</template>

<script>
import MusiciansService from '@/services/musicians.service';

export default {
  name: 'Musician',
  data: () => ({
    musiciansService: undefined,
    musicianFromService: undefined,
    assembledMusicians: undefined,
    musicianInfo: {
      name: undefined,
      firstSurname: undefined,
      secondSurname: undefined,
    },
  }),
  created() {
    this.musicianInfoFromRoute();
    this.musiciansService = new MusiciansService();
  },
  mounted() {
    this.getMusician();
  },
  methods: {
    async getMusician() {
      this.musicianFromService = await this.musiciansService.getMusician(this.musicianInfo);
    },
    musicianInfoFromRoute() {
      this.musicianInfo.name = this.$route.params.name;
      this.musicianInfo.firstSurname = this.$route.params.firstSurname;
      this.musicianInfo.secondSurname = this.$route.params.secondSurname;
    },
  },
};
</script>
