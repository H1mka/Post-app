<template>
  <div v-if="store.state.isAuth">
    <!-- eslint-disable vue/no-v-model-argument -->
    <CustomDialog v-model:show="showModal">
      <PostForm :close-modal="closeModal" v-if="store.state.isAuth" />
      <NotAuthorizedError v-else />
    </CustomDialog>

    <div class="add-post-btn">
      <CustomButton text="Create Post" @click="showModal = true" />
    </div>

    <PostList :posts="posts" v-if="!isLoading" />
    <h3 v-else>loading...</h3>
  </div>
  <div v-else style="margin-top: 50px">
    <NotAuthorizedError />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '../store/store';

import PostForm from '../components/PostForm.vue';
import PostList from '../components/PostList.vue';
import NotAuthorizedError from '../components/NotAuthorizedError.vue';
import useGetUserPosts from '../hooks/useGetUserPosts';

export default defineComponent({
  name: 'PostsPage',
  components: {
    PostForm,
    PostList,
    NotAuthorizedError,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
  },
  setup(props, context) {
    const user_id = store.state.user.id;

    const { isLoading, posts } = useGetUserPosts(user_id);

    return {
      isLoading,
      posts,
      store,
    };
  },
});
</script>

<style lang="scss"></style>
