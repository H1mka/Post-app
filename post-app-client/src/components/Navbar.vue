<template>
  <b-navbar>
    <b-navbar-nav>
      <b-nav-item>
        <router-link to="/">Posts</router-link>
      </b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav class="ml-auto left-navbar">
      <b-nav-item>
        <router-link to="/tesdsaast">Log in</router-link>
      </b-nav-item>

      <b-nav-item>
        <router-link to="/test">Sign in</router-link>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar',
});
</script>

<style lang="scss" scoped>
.left-navbar {
  display: flex;
  gap: 10px;
}

.nav-item {
  padding: 0px 16px;
  border-radius: 8px;
  background-color: var(--dark-purple);
  cursor: pointer;

  &:hover {
    background-color: rgba($color: #481499, $alpha: 0.4);
    text-decoration: underline;
    color: white;
  }

  .nav-link a {
    color: white;
    text-decoration: none;
  }
}
</style>
