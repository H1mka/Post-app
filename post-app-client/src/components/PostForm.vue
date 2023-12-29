<template>
  <form class="form" action="" @submit.prevent="">
    <div class="form__header">
      <h3>Add a New Post</h3>
    </div>

    <div class="form__content">
      <div class="form__block">
        <p>Post title:</p>
        <CustomInput v-model="post.title" />
      </div>

      <div class="form__block">
        <p>Author:</p>
        <CustomInput v-model="post.author" />
      </div>

      <div class="form__block">
        <p>Content:</p>
        <CustomInput v-model="post.content" />
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CustomInput } from './UI';
import { IPost } from '@/types/postInterface';

export default defineComponent({
  data() {
    return {
      post: {
        title: '',
        content: '',
        author: '',
      } as IPost,
    };
  },
  components: {
    CustomInput,
  },
});
</script>

<style lang="scss" scoped>
.form {
  margin-top: 50px;
  display: flex;

  &.form__content {
  }
}
</style>
