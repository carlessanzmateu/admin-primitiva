<template>
  <div class="musicians-list">
    <ListCard v-for="(musician, key, index) in musicians" :key="key" :info="musician"/>
  </div>
</template>

<script>
import ListCard from '@/common/ListCard.vue';

export default {
  name: 'Musicians',
  components: {
    ListCard,
  },
  data: () => ({
    musicians: [
      {
        id: 1,
        title: 'Carles Sanz Mateu',
        subtitle: 'Trombón',
        description: '',
      },
      {
        id: 2,
        title: 'Victor López Tato',
        subtitle: 'Tuba',
        description: '',
      },
      {
        id: 3,
        title: 'Álex Sanz Mateu',
        subtitle: 'Saxofón',
        description: 'Alto y Tenor',
      },
    ],
  })
};
</script>
