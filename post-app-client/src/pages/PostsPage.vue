<template>
  <div>
    <!-- eslint-disable vue/no-v-model-argument -->
    <CustomDialog v-model:show="showModal">
      <PostForm :close-modal="closeModal" />
    </CustomDialog>

    <div class="add-post-btn">
      <CustomButton text="Create Post" @click="showModal = true" />
    </div>

    <PostList :posts="posts" v-if="!isLoading" />
    <h3 v-else>loading...</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostForm from '../components/PostForm.vue';
import PostList from '../components/PostList.vue';
import usePosts from '../hooks/usePosts';

export default defineComponent({
  name: 'PostsPage',
  components: {
    PostForm,
    PostList,
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

<style lang="scss">
.add-post-btn {
  margin-top: 20px;
  text-align: right;
}
</style>
