<template>
  <div id="app">
    <Header />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';

export default defineComponent({
  components: {
    Header,
  },
});
</script>

<style></style>
