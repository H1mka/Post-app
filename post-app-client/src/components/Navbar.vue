<template>
  <nav id="nav-bar">
    <ul class="nav-list left-nav-list">
      <li class="nav-item">
        <router-link to="/" class="nav-btn">Posts</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/users-posts" class="nav-btn">My posts</router-link>
      </li>
    </ul>

    <ul class="nav-list" v-if="!isAuth">
      <li class="nav-item">
        <router-link to="/login" class="nav-btn">Log in</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/registration" class="nav-btn">Sign in</router-link>
      </li>
    </ul>

    <ul class="nav-list" v-else>
      <li class="nav-item">
        <button class="nav-btn" @click="logOut">Log out</button>
      </li>
      <li class="nav-item author-info">
        {{ authorName }}
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '../store/store';

export default defineComponent({
  name: 'Navbar',
  methods: {
    logOut() {
      store.commit('setAuth', false);
    },
  },
  computed: {
    isAuth() {
      return store.state.isAuth;
    },
    authorName() {
      return store.getters.getAuthorName;
    },
  },
});
</script>

<style lang="scss" scoped>
.left-nav-list {
  flex: 1 0 auto;
}

#nav-bar {
  display: flex;
}

.nav-list {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: end;
  gap: 10px;

  .author-info {
    // font-size: 18px;
    color: white;
    background-color: linear;
    padding: 10px 20px;
    border: 2px solid var(--dark-purple);
    border-radius: 24px;
  }

  .nav-item {
    text-decoration: none;
    list-style: none;
    padding: auto auto;

    .nav-btn {
      display: inline-block;
      color: white;
      text-decoration: none;
      background-color: var(--dark-purple);
      padding: 10px 16px;
      border: none;
      border-radius: 8px;
      cursor: pointer;

      &:hover {
        background-color: rgba($color: #481499, $alpha: 0.4);
        text-decoration: underline;
        color: white;
      }
    }
  }
}
</style>
