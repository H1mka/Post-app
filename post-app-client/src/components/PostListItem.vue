<template>
  <section class="post-item">
    <div class="post-item__header">
      <h4 class="title">{{ post.title }}</h4>
      <p class="date">{{ prepareDateInSetup() }}</p>
    </div>
    <p class="author">{{ post.author }}</p>
    <p class="content">{{ post.content }}</p>

    <div class="post-item__btns">
      <CustomButton text="Edit" @click="$router.push(`post/${post.id}`)" />
      <CustomButton text="Delete" @click="deletePost(post.id)" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IPost } from '../types/postInterface';
import usePosts from '../hooks/usePosts';
import prepareDate from '../utils/prepareDate';

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<IPost>,
      required: true,
    },
  },
  methods: {
    prepareDateInSetup() {
      return prepareDate(this.post.date);
    },
  },
  setup(props) {
    const { deletePost } = usePosts();

    // const removePost = () => {
    //   store.commit('removePost', props.post.id);
    //   deletePost(props.post.id);
    // };

    return { deletePost };
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
