<template>
  <header>
    <div class="header-wrapper">
      <div class="title">
        <h2>Post app</h2>
      </div>
      <Navbar />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './Navbar.vue';

export default defineComponent({
  components: {
    Navbar,
  },
});
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  min-height: 150px;
  background-color: var(--light-purple);

  .header-wrapper {
    max-width: 1040px;
    width: 100%;
    min-height: 150px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  nav {
    flex: 0 0 auto;
    padding: 0;
  }

  .title {
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    flex: 1 0 auto;
  }
}
</style>
