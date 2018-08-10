<template>
<section class="create-act-form">
  <form novalidate class="md-layout" @submit="e => e.preventDefault()">
    <div class="md-layout-item md-small-size-100">
      <md-field>
        <label for="actName">Nombre del acto</label>
        <md-input v-validate="'required'"
                  :required="true"
                  name="actName"
                  v-model="actName"/>
      </md-field>
      <md-field>
        <label>Descripción</label>
        <md-textarea v-model="actDescription"></md-textarea>
      </md-field>
      <md-field>
        <label for="actLocation">Lugar</label>
        <md-input v-validate="'required'"
                  :required="true"
                  name="actLocation"
                  v-model="actLocation"/>
      </md-field>
      <md-field>
        <label for="actIncome">Beneficio</label>
        <md-input v-validate="'required'"
                  :required="true"
                  name="actIncome"
                  v-model="actIncome"
                  type="number"/>
      </md-field>
      <md-field>
        <label for="actExpenses">Gastos</label>
        <md-input v-validate="'required'"
                  :required="true"
                  name="actExpenses"
                  v-model="actExpenses"
                  type="number"/>
      </md-field>
      <md-field>
        <label for="actTypeName">Tipo de acto</label>
        <md-select v-model="actTypeId" name="actTypeName" id="actTypeName">
          <md-option
          v-for="(actType, key) in actTypes"
          :key="key"
          :value="actType.id">{{ actType.name }}</md-option>
        </md-select>
      </md-field>
      <md-field>
        <label for="actTypeName">Ropa</label>
        <md-select v-model="clothesElementId" name="clothes" id="clothesName">
          <md-option
          v-for="(clothesElement, key) in clothes"
          :key="key"
          :value="clothesElement.id">{{ clothesElement.alias }}</md-option>
        </md-select>
      </md-field>
      <md-datepicker v-model="actDayDate" md-immediately />
      <div class="expected-musicians">
        <List
          :list-options="musicians"
          :can-duplicate="false"
          title="Músicos esperados"
          property-with-info="name"
          @selection="expectedMusiciansHandler"/>
      </div>
      <div class="musician-instrument-confirmation"
        v-if="expectedMusiciansWithMultipleInstruments"
        v-for="(expectedMusician, key) in expectedMusicians"
        :key="key">
        <h3 class="multiple-instruments-advise">Ups! Parece que {{ expectedMusician.name }} es capaz de tocar más de un instrumento</h3>
        <h4 class="multiple-instruments-advise">*Por favor, confirma con que instrumento se espera que venga a tocar</h4>
        <md-field>
          <label for="expectedMusicianInstrument">Instrumentos</label>
          <md-select v-model="foo" name="expectedMusicianInstrument" id="expectedMusicianInstrument">
            <md-option
            v-for="(instrument, key) in expectedMusician.instruments"
            :key="key"
            :value="instrument.id">{{ instrument.id }}</md-option>
          </md-select>
        </md-field>
      </div>

      <!-- Esto solo debería verse en la vista de editar -->
      <!-- No puedes confirmar la asistencia de algo que aún no está siendo -->
      <!-- <div class="assistant-musicians" v-if="expectedMusicians">
        <List
          :list-options="expectedMusicians"
          title="Músicos asistentes confirmados"
          property-with-info="name"
          @selection="assistantMusiciansHandler"/>
      </div> -->
      <div class="reinforcements">
        <List
          :list-options="reinforcements"
          title="Refuerzos"
          property-with-info="name"
          @selection="reinforcementsHandler"/>
      </div>
    </div>
  </form>
  <Button buttonText="Crear acto" @button-clicked="createActSubmit" :disabled="isDisabled"></Button>
</section>
</template>

<script>
import Button from '@/common/Button.vue';
import List from '@/common/List.vue';

export default {
  name: 'CreateActForm',
  components: {
    Button,
    List,
  },
  props: {
    actTypes: {
      type: Array,
      required: true,
    },
    clothes: {
      type: Array,
      required: true,
    },
    musicians: {
      type: Array,
      required: true,
    },
    reinforcements: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    actName: undefined,
    actDescription: undefined,
    actLocation: undefined,
    actIncome: undefined,
    actExpenses: undefined,
    actTypeId: undefined,
    clothesElementId: undefined,
    actDayDate: undefined,
    expectedMusicians: undefined,
    // assistantMusicians: undefined,
    confirmedReinforcements: undefined,
    foo: undefined,
  }),
  computed: {
    isDisabled() {
      return !(this.actName 
        && this.actDescription 
        && this.actLocation 
        && this.actTypeId
        && this.clothesElementId
        && this.actDayDate);
    },
    expectedMusiciansWithMultipleInstruments() {
      console.log(this.expectedMusicians);
      return this.expectedMusicians.find((expectedMusician) => {
        return expectedMusician.instruments.length > 1;
      });
    }
  },
  methods: {
    async createActSubmit() {
      const isValid = await this.$validator.validate();
      if (isValid) {
        const actInfo = {
          name: this.actName,
          description: this.actDescription,
          location: this.actLocation,
          income: this.actIncome,
          expenses: this.actExpenses,
          actType: this.actTypes.find((actType) => actType.id === this.actTypeId),
          clothes: this.clothes.find((clothesElement) => clothesElement.id === this.clothesElementId),
          date: this.actDayDate,
          expectedMusicians: this.expectedMusicians,
          reinforcements: this.confirmedReinforcements,
        };
        this.$emit('create-act-submit', actInfo);
      } else {
        console.log('not valid act');
      }
    },
    expectedMusiciansHandler(expectedMusicians) {
      this.expectedMusicians = expectedMusicians;
    },
    assistantMusiciansHandler(assistantMusicians) {
      this.assistantMusicians = assistantMusicians;
    },
    reinforcementsHandler(reinforcements) {
      this.confirmedReinforcements = reinforcements;
    },
  },
};

</script>

<style scoped lang="scss">
.button-custom-styles {
  width: 100%;
}

.multiple-instruments-advise {
  color: red;
}
</style>
