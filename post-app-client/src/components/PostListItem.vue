<template>
  <section class="post-item">
    <h4 class="title">{{ post.title }}</h4>
    <p class="author">{{ post.author }}</p>
    <p class="content">{{ post.content }}</p>

    <div class="post-item__btns">
      <CustomButton text="Edit" @click="$router.push(`post/${post.id}`)" />
      <CustomButton text="Delete" @click="deletePost" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import store from '../store/store';
import { IPost } from '../types/postInterface';

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<IPost>,
      required: true,
    },
  },
  methods: {
    deletePost() {
      store.commit('removePost', this.post.id);
    },
  },
});
</script>

<style lang="scss">
.post-item {
  border: 2px solid var(--dark-purple);
  border-radius: 6px;
  padding: 10px;

  .title {
    font-size: 24px;
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
