<template>
  <div class="musicians">
    <MusiciansList v-if="getAllMusicians" :musicians-list="getAllMusicians"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MusiciansList from '@/views/musicians/components/MusiciansList.vue';

export default {
  name: 'Musicians',
  components: {
    MusiciansList,
  },
  data: () => ({
    musicians: undefined,
  }),
  computed: {
    ...mapGetters('musicians', ['getAllMusicians']),
  }
};
</script>
