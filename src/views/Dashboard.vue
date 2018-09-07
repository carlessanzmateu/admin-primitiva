<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'dashboard',
  components: {
    HelloWorld,
  },
  mounted() {
    this.fetchMusicians();
  },
  methods: {
    ...mapActions('musicians', ['fetchMusicians']),
  },
};
</script>
