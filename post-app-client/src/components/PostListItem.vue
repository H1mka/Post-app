<template>
  <section class="post-item">
    <div class="post-item__header">
      <h4 class="title">{{ post.title }}</h4>
      <p class="date">{{ prepareDate(post.date) }}</p>
    </div>
    <p class="author">{{ post.author }}</p>
    <p class="content">{{ post.content }}</p>

    <div class="post-item__btns" v-if="isCanEditPost">
      <CustomButton text="Edit" @click="$router.push(`post/${post.id}`)" />
      <CustomButton text="Delete" @click="deletePost(post.id)" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import store from '../store/store';
import { IPost } from '../types/postInterface';
import { usePosts } from '../hooks';
import prepareDate from '../utils/prepareDate';

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<IPost>,
      required: true,
    },
  },

  computed: {
    isAuth() {
      return store.state.isAuth;
    },
    isCanEditPost() {
      if (this.isAuth && this.post.user_id === store.state.user.id) return true;
      else return false;
    },
  },

  setup(props) {
    const { deletePost } = usePosts();

    return { deletePost, prepareDate };
  },
});
</script>

<style lang="scss">
.post-item {
  border: 2px solid var(--dark-purple);
  border-radius: 6px;
  padding: 10px;

  .post-item__header {
    display: flex;
    justify-content: space-between;

    .title {
      font-size: 24px;
      margin-bottom: 5px;
    }

    .date {
      color: var(--dark-grey);
      font-size: 18px;
    }
  }

  .author {
    color: var(--dark-grey);
    font-size: 18px;
    margin-bottom: 20px;
  }

  .content {
    margin-bottom: 20px;
  }

  .post-item__btns {
    display: flex;
    justify-content: space-between;
  }
}
</style>
