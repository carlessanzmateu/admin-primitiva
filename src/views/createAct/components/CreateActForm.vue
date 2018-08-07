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
        <md-select v-model="actType" name="actTypeName" id="actTypeName">
          <md-option
          v-for="(actType, key) in actTypes"
          :key="key"
          :value="actType.id">{{ actType.name }}</md-option>
        </md-select>
      </md-field>
      <md-field>
        <label for="actTypeName">Ropa</label>
        <md-select v-model="clothesElement" name="clothes" id="clothesName">
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
          title="Músicos esperados"
          property-with-info="name"
          @selection="expectedMusiciansHandler"/>
      </div>
      <div class="assistant-musicians" v-if="expectedMusicians">
        <List
          :list-options="expectedMusicians"
          title="Músicos asistentes confirmados"
          property-with-info="name"
          @selection="assistantMusiciansHandler"/>
      </div>
      <div class="reinforcements">
        <List
          :list-options="reinforcements"
          title="Refuerzos"
          property-with-info="name"
          @selection="assistantMusiciansHandler"/>
      </div>
    </div>
  </form>
  <Button buttonText="Crear acto" @button-clicked="signIn" :disabled="isDisabled"></Button>
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
    }
  },
  data: () => ({
    actName: undefined,
    actDescription: undefined,
    actLocation: undefined,
    actIncome: undefined,
    actExpenses: undefined,
    actType: undefined,
    clothesElement: undefined,
    actDayDate: undefined,
    expectedMusicians: undefined,
    assistantMusicians: undefined,
    confirmedReinforcements: undefined,
  }),
  computed: {
    isDisabled() {
      return !(this.userValue && this.passwordValue);
    },
  },
  methods: {
    async signIn() {
      const isValid = await this.$validator.validate();
      if (isValid) {
        this.$emit('sign-in', {
          user: this.userValue,
          password: this.passwordValue,
        });
      } else {
        console.log('not valid sign in');
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
</style>
