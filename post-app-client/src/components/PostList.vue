<template>
  <div class="post-list" v-if="posts.length > 0">
    <h2>Posts:</h2>

    <PostListItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
  <div v-else class="post-empty">
    <h2>Posts list are empty</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import PostListItem from './PostListItem.vue';
import { IPost } from '../types/postInterface';

export default defineComponent({
  components: {
    PostListItem,
  },
  props: {
    posts: {
      type: Array as PropType<IPost[]>,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.post-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
