<template>
  <div>
    <PostForm />
    <PostList :posts="posts" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ComputedRef } from 'vue';
import { IPost } from '../types/postInterface';
import { postMocks } from '../mocks/postMocks';
import PostForm from '../components/PostForm.vue';
import PostList from '../components/PostList.vue';
import store from '../store/store';

export default defineComponent({
  name: 'PostsPage',
  components: {
    PostForm,
    PostList,
  },
  mounted() {
    store.commit('setPosts', postMocks);
    console.log('mounted');
  },
  setup() {
    const posts: ComputedRef<IPost[]> = computed(() => store.state.posts);

    return {
      posts,
    };
  },
  // computed: {
  //   posts
  // }
});
</script>

<style></style>
