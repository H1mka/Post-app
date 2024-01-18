<template>
  <div>
    <!-- eslint-disable vue/no-v-model-argument -->
    <CustomDialog v-model:show="showModal">
      <PostForm :close-modal="closeModal" />
    </CustomDialog>

    <div class="add-post-btn">
      <CustomButton text="Create Post" @click="createPostDialogOpen" />
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
import { PostForm, PostList, NotAuthorizedError } from '../components';
import { usePosts, useSortedPosts } from '../hooks';
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
    createPostDialogOpen() {
      if (!store.state.isAuth) this.$router.push('not-auth');

      this.showModal = true;
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
  }
}
</style>
