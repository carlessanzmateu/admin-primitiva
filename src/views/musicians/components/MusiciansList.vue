<template>
  <div class="musicians-list">
    <router-link 
      v-if="musiciansList"
      v-for="(musician, key) in musiciansList" 
      :key="key"
      :to="getURl(musician.raw)">
      <ListCard :info="musician.assembled"/>
    </router-link>
  </div>
</template>

<script>
import MusiciansAssembler from '@/assemblers/musicians.assembler';
import ListCard from '@/common/ListCard.vue';

export default {
  name: 'Musicians',
  props: {
    musiciansList: {
      type: Array,
      required: true,
    },
  },
  components: {
    ListCard,
  },
  data: () => ({
    musicians: [],
  }),
  methods: {
    getURl(musician) {
      return `/musician/${MusiciansAssembler.musicianAliasBuilder(musician)}`;
    }
  }
};
</script>
