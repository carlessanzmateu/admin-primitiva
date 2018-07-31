<template>
  <div class="musicians-list">
    <ListCard v-for="(musician, key, index) in musicians" :key="key" :info="musicianListAssembler(musician)"/>
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
    }
  },
  components: {
    ListCard,
  },
  created() {
    this.musicians = this.musiciansList;
    console.log(this.musicians);
  },
  data: () => ({
    musicians: [],
  }),
  methods: {
    musicianListAssembler(musician) {
    return {
      title: `${musician.name} ${musician['first-surname']} ${musician['second-surname']}`,
      subtitle: '',
      description: this.instrumentsToString(musician.instrument),
    }
    },
    instrumentsToString(instruments) {
      let instrumentsAsString = '';

      instruments.forEach((instrument, index) => {
        if (index === 0) {
          instrumentsAsString += `${instrument.id}`;
          } else {
            instrumentsAsString += ` ${instrument.id}`;
        }
      });

      return instrumentsAsString;
    }
  }
};
</script>
