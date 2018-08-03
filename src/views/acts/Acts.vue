<template>
  <div class="home">
    <router-link :to="routerDestination(act.id)" v-for="(act, key) in acts" :key="key">
      <ListCard 
        :title="act.name"
        :subtitle="new Date(act.date.seconds).toString()"
        :description="act.description"/>
    </router-link>
    <Button buttonText="Añadir Acto"></Button>
  </div>
</template>

<script>
import ActsService from '@/services/acts.service';

import ActsAssembler from '@/assemblers/acts.assembler';

import ListCard from '@/common/ListCard.vue';
import Button from '@/common/Button.vue';

export default {
  name: 'acts',
  components: {
    ListCard,
    Button,
  },
  data: () => ({
    actsService: undefined,
    acts: undefined,
  }),
  created() {
    this.actsService = new ActsService();
  },
  mounted() {
    this.getActs();
  },
  methods: {
    routerDestination(actId) {
      return `/act/${actId}`;
    },
    async getActs() {
      const actsFromService = await this.actsService.getAllActs();
      this.acts = ActsAssembler.assemblerList(actsFromService);
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

