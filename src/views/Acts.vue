<template>
  <div class="home">
    <router-link :to="routerDestination(act.id)" v-for="(act, key, index) in foo" :key="key">
      <ListCard :info="act"/>
    </router-link>
    <Button buttonText="Añadir Acto"></Button>
  </div>
</template>

<script>
import ListCard from '@/common/ListCard.vue';
import Button from '@/common/Button.vue';

export default {
  name: 'acts',
  components: {
    ListCard,
    Button,
  },
  data: () => ({
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
  methods: {
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

