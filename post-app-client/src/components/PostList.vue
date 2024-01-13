<template>
  <div class="post-list" v-if="posts.length > 0">
    <transition-group name="post-list">
      <PostListItem v-for="post in posts" :key="post.id" :post="post" />
    </transition-group>
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

<style lang="scss" scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(150px);
}
.post-list-move {
  transition: transform 0.4s ease;
}
</style>
