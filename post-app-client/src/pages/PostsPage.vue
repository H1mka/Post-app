<template>
  <div>
    <!-- eslint-disable vue/no-v-model-argument -->
    <CustomDialog v-model:show="showModal">
      <PostForm :close-modal="closeModal" v-if="store.state.isAuth" />
      <NotAuthorizedError v-else />
    </CustomDialog>

    <div class="add-post-btn">
      <CustomButton text="Create Post" @click="showModal = true" />
    </div>

    <div class="post-list-wrapper" v-if="!isLoading">
      <div class="post-list-header">
        <h2>Posts:</h2>
        <CustomSelect :options="sortOptions" v-model="sortParam" />
      </div>
      <PostList :posts="sortedPosts" />
    </div>
    <h3 v-else>loading...</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostForm from '../components/PostForm.vue';
import PostList from '../components/PostList.vue';
import NotAuthorizedError from '../components/NotAuthorizedError.vue';
import usePosts from '../hooks/usePosts';
import useSortedPosts from '../hooks/useSortedPosts';
import store from '../store/store';

import { ISortOptions } from '../types';

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
      sortOptions: [
        { text: 'By date', value: 'date' },
        { text: 'By authors', value: 'author' },
        { text: 'By title', value: 'title' },
      ] as ISortOptions[],
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
  },
  mounted() {
    this.getPosts();
  },
  setup() {
    const { posts, isLoading, getPosts } = usePosts();
    const { sortParam, sortedPosts } = useSortedPosts(posts);

    return {
      sortedPosts,
      sortParam,
      isLoading,
      getPosts,
      store,
    };
  },
});
</script>

<style lang="scss">
.add-post-btn {
  margin-top: 20px;
  text-align: right;
}

.post-list-wrapper {
  margin-top: 20px;

  .post-list-header {
    display: flex;
    justify-content: space-between;

    select {
      max-width: 250px;
      width: 100%;
    }
  }
}
</style>
