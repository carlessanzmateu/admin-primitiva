<template>
  <div class="musician" v-if="musicianDetail">
    <h1 v-if="musicianDetail">{{ createMusicianName }}</h1>
    <MusicianAvatar
      :urlToImage="musicianDetail.image"/>
    <h3>Nombre</h3>
    <p>{{ musicianDetail.name }}</p>
    <h3>Primer apellido</h3>
    <p>{{ musicianDetail.firstSurname }}</p>
    <h3>Segundo apellido</h3>
    <p>{{ musicianDetail.secondSurname }}</p>
    <h3>Instrumentos</h3>
    <p v-for="(instrument, key) in musicianDetail.instruments" :key="key">
      {{ instrument.id }}
    </p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import MusicianAvatar from '@/views/musician/components/MusicianAvatar.vue';

export default {
  name: 'Musician',
  components: {
    MusicianAvatar,
  },
  data: () => ({
    musician: undefined,
    routeInfo: undefined,
  }),
  computed: {
    ...mapState('musicians', ['musicianDetail']),
    createMusicianName() {
      if (!this.musicianDetail) {
        return '';
      }
      return `${this.musicianDetail.name} ${this.musicianDetail.firstSurname} ${this.musicianDetail.secondSurname}`;
    },
  },
  created() {
    this.routeInfo = this.$route.params.alias;
    this.fetchMusicianDetail(this.routeInfo);
  },
  methods: {
    ...mapActions('musicians', ['fetchMusicianDetail']),
  },
};
</script>
