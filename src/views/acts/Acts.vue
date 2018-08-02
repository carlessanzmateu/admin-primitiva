<template>
  <div class="home">
    <router-link :to="routerDestination(act.id)" v-for="(act, key) in foo" :key="key">
      <ListCard :info="act"/>
    </router-link>
    <Button buttonText="Añadir Acto"></Button>
  </div>
</template>

<script>
import ActsService from '@/services/acts.service';

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
    actsFromService: undefined,
    foo: [
      {
        id: 1,
        title: 'fallas 2018',
        subtitle: new Date(),
        description: 'Recogida de falleras',
      },
      {
        id: 2,
        title: 'semana santa 2018',
        subtitle: new Date(),
        description: 'Recogida de clavariesas',
      },
      {
        id: 3,
        title: 'fiestas 2018',
        subtitle: new Date(),
        description: 'Recogida de festeras',
      },
    ],
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
      this.actsFromService = await this.actsService.getAllActs();
      console.log(this.actsFromService);
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

