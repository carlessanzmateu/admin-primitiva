<template>
  <div class="musicians-list">
    <router-link
      :to="routerDestination(musician.docId)"
      v-for="(musician, key) in musiciansList"
      :key="key">
      <ListCard
        :title="musician.name"/>
    </router-link>
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
  data: () => ({
    musicians: [],
  }),
  methods: {
    routerDestination(musicianId) {
      return `/musician/${musicianId}`;
    },
  },
};
</script>
