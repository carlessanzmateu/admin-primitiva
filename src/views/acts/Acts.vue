<template>
  <div class="acts">
    <router-link to="/create/act">
      <Button buttonText="Añadir Acto"></Button>
    </router-link>
    <router-link :to="routerDestination(act.docId)" v-for="(act, key) in getAllActs" :key="key">
      <ListCard
        :title="act.name"
        :subtitle="new Date(act.date).toString()"
        :description="act.description"/>
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import ListCard from '@/common/ListCard.vue';
import Button from '@/common/Button.vue';

export default {
  name: 'acts',
  components: {
    ListCard,
    Button,
  },
  computed: {
    ...mapGetters('acts', ['getAllActs']),
  },
  mounted() {
    this.fetchAllActs();
  },
  methods: {
    ...mapActions('acts', ['fetchAllActs']),
    routerDestination(actId) {
      return `/act/${actId}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.button-custom-styles {
  width: 50%;
  margin-top: 15px;
}
</style>

