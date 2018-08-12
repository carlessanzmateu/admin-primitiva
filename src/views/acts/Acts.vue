<template>
  <div class="acts">
    <router-link :to="routerDestination(act.docId)" v-for="(act, key) in acts" :key="key">
      <ListCard
        :title="act.name"
        :subtitle="new Date(act.date).toString()"
        :description="act.description"/>
    </router-link>
    <router-link to="/create/act">
      <Button buttonText="Añadir Acto"></Button>
    </router-link>
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

