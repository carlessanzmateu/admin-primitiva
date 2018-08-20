<template>
  <section>
    <div class="edit-wrapper">
      <router-link :to="navigateToEdit" v-if="act">
        <Fab icon-name="create"/>
      </router-link>
    </div>
    <div class="act" v-if="act">
      <h1>{{ act.name }}</h1>
      <h3>Descripción</h3>
      <p>{{ act.description }}</p>
      <h3>Fecha</h3>
      <p>{{ new Date(act.date) }}</p>
      <h3>Lugar</h3>
      <p>{{ act.location }}</p>
      <h3>Ropa</h3>
      <p>{{ act.clothes.id }}</p>
      <h3>Beneficios</h3>
      <p>{{ act.income }}</p>
      <h3>Gastos</h3>
      <p>{{ act.expenses }}</p>
      <h3>Beneficio Neto</h3>
      <p>{{ netProfit }}</p>
      <h3>Tipo de acto</h3>
      <p>{{ act.actType.id }}</p>
      <h3>Músicos inscritos</h3>
      <p
        v-for="(musician, key) in act.expectedMusicians"
        :key="`${key}-expected-musicians`">
          {{ musician.id }}
      </p>
      <h3>Músicos asistentes</h3>
      <p
        v-for="(musician, key) in act.assistantMusicians"
        :key="`${key}-assistant-musicians`">
          {{ musician.id }}
      </p>
      <h3>Refuerzos</h3>
      <p
        v-for="(reinforcement, key) in act.reinforcements"
        :key="`${key}-reinforcement`">
          {{ reinforcement.id }}
      </p>
    </div>
  </section>
</template>

<script>
import Fab from '@/common/Fab.vue';

import ActsService from '@/services/acts.service';

import ActsAssembler from '@/assemblers/acts.assembler';

export default {
  name: 'act',
  components: {
    Fab,
  },
  data: () => ({
    actsService: undefined,
    act: undefined,
  }),
  computed: {
    netProfit() {
      return this.act.income - this.act.expenses;
    },
    navigateToEdit() {
      return `/edit/act/${ this.act.docId }`;
    },
  },
  created() {
    this.actsService = new ActsService();
  },
  mounted() {
    this.getAct();
  },
  methods: {
    async getAct() {
      const actFromService = await this.actsService.getAct(this.$route.params.id);
      this.act = ActsAssembler.assembler(actFromService);
    },
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

