<template>
  <div class="musicians">
    <MusiciansList/>
  </div>
</template>

<script>
import MusiciansList from '@/views/musicians/components/MusiciansList.vue';

export default {
  name: 'Musicians',
  components: {
    MusiciansList
  },
};
</script>
