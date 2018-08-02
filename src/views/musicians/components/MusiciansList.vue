<template>
  <div class="musicians-list">
    <ListCard v-for="(musician, key) in musiciansList" :key="key" :info="musician"/>
  </div>
</template>

<script>
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
  created() {
    this.musicians = this.musiciansList;
  },
  data: () => ({
    musicians: [],
  }),
};
</script>
