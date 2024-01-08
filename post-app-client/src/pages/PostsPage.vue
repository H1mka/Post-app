<template>
  <div>
    <PostForm />
    <PostList :posts="posts" v-if="!isLoading" />
    <h3 v-else>loading...</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IPost } from '../types/postInterface';
import PostForm from '../components/PostForm.vue';
import PostList from '../components/PostList.vue';
import usePosts from '../hooks/usePosts';

export default defineComponent({
  name: 'PostsPage',
  components: {
    PostForm,
    PostList,
  },
  mounted() {
    this.getPosts();
  },
  setup() {
    const { posts, isLoading, getPosts } = usePosts();

    return {
      posts,
      isLoading,
      getPosts,
    };
  },
});
</script>

<style></style>
