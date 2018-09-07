<template>
  <section>
    <div class="edit-wrapper">
      <router-link :to="navigateToEdit" v-if="getAct">
        <Fab icon-name="create"/>
      </router-link>
    </div>
    <div class="act" v-if="getAct">
      <h1>{{ getAct.name }}</h1>
      <h3>Descripción</h3>
      <p>{{ getAct.description }}</p>
      <h3>Fecha</h3>
      <p>{{ new Date(getAct.date) }}</p>
      <h3>Lugar</h3>
      <p>{{ getAct.location }}</p>
      <h3>Ropa</h3>
      <p v-if="getAct.clothes">{{ getAct.clothes.id }}</p>
      <h3>Beneficios</h3>
      <p>{{ getAct.income }}</p>
      <h3>Gastos</h3>
      <p>{{ getAct.expenses }}</p>
      <h3>Beneficio Neto</h3>
      <p>{{ netProfit }}</p>
      <h3>Tipo de acto</h3>
      <p v-if="getAct.actType">{{ getAct.actType.id }}</p>
      <h3>Músicos inscritos</h3>
      <p
        v-for="(musician, key) in getAct.expectedMusicians"
        :key="`${key}-expected-musicians`">
          {{ musician.id }}
      </p>
      <h3>Músicos asistentes</h3>
      <p
        v-for="(musician, key) in getAct.assistantMusicians"
        :key="`${key}-assistant-musicians`">
          {{ musician.id }}
      </p>
      <h3>Refuerzos</h3>
      <p
        v-for="(reinforcement, key) in getAct.reinforcements"
        :key="`${key}-reinforcement`">
          {{ reinforcement.id }}
      </p>
    </div>
  </section>
</template>

<script>
import Fab from '@/common/Fab.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'act',
  components: {
    Fab,
  },
  computed: {
    ...mapGetters('acts', ['getAct']),
    netProfit() {
      return this.getAct.income - this.getAct.expenses;
    },
    navigateToEdit() {
      return `/edit/act/${this.getAct.docId}`;
    },
  },
  mounted() {
    this.fetchActDetail(this.$route.params.id);
  },
  methods: {
    ...mapActions('acts', ['fetchActDetail']),
  },
};
</script>

<style lang="scss" scoped>
.edit-wrapper {
  position: fixed;
  top: 13vh;
  right: 5vw;
}
</style>

