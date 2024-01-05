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
import { postMocks } from './mocks/postMocks';
import store from './store/store';

export default defineComponent({
  components: {
    Header,
  },
  mounted() {
    store.commit('setPosts', postMocks);
  },
});
</script>

<style></style>
