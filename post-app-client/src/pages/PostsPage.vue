<template>
  <PostForm />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import PostListVue from '@/components/PostList.vue';
import { IPost } from '../types/postInterface';
import { postMocks } from '../mocks/postMocks';
import PostForm from '../components/PostForm.vue';

export default defineComponent({
  name: 'PostsPage',
  components: {
    PostForm,
  },
  data() {
    return {
      posts: [1, 2, 3],
    };
  },
  mounted() {
    console.log(postMocks);
  },
});
</script>

<style></style>
