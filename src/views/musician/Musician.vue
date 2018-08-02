<template>
  <div class="musician" v-if="musicianFromService">
    <h1 v-if="musicianFromService">{{ createMusicianName }}</h1>
    <MusicianAvatar
      :urlToImage="musicianFromService.image"/>
    <h3>Nombre</h3>
    <p>{{ musicianFromService.name }}</p>
    <h3>Primer apellido</h3>
    <p>{{ musicianFromService.firstSurname }}</p>
    <h3>Segundo apellido</h3>
    <p>{{ musicianFromService.secondSurname }}</p>
    <h3>Instrumentos</h3>
    <p v-for="(instrument, key) in musicianFromService.instruments" :key="key">
      {{ instrument.id }}
    </p>
  </div>
</template>

<script>
import MusiciansService from '@/services/musicians.service';
import MusicianAvatar from '@/views/musician/components/MusicianAvatar.vue';

export default {
  name: 'Musician',
  components: {
    MusicianAvatar,
  },
  data: () => ({
    musiciansService: undefined,
    musicianFromService: undefined,
    routeInfo: {
      name: undefined,
      firstSurname: undefined,
      secondSurname: undefined,
    },
  }),
  computed: {
    createMusicianName() {
      if (!this.musicianFromService) {
        return '';
      }
      return `${this.musicianFromService.name} ${this.musicianFromService.firstSurname} ${this.musicianFromService.secondSurname}`;
    },
  },
  created() {
    this.musicianInfoFromRoute();
    this.musiciansService = new MusiciansService();
    this.getMusician();
  },
  methods: {
    musicianInfoFromRoute() {
      this.routeInfo.name = this.$route.params.name;
      this.routeInfo.firstSurname = this.$route.params.firstSurname;
      this.routeInfo.secondSurname = this.$route.params.secondSurname;
    },
    async getMusician() {
      this.musicianFromService = await this.musiciansService.getMusician(this.routeInfo);
    },
  },
};
</script>
