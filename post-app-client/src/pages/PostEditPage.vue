<template>
  <div id="post-edit">
    <h2>{{ $route.params }}</h2>

    <div class="post-edit__block">
      <p>Title:</p>
      <CustomInput v-model="post.title" />
    </div>

    <div class="post-edit__block">
      <p>Author:</p>
      <CustomInput v-model="post.author" />
    </div>

    <div class="post-edit__block">
      <p>Content:</p>
      <CustomInput v-model="post.content" />
    </div>

    <div class="post-edit__btns">
      <CustomButton text="Save" />
      <CustomButton text="Cancel" />
      <CustomButton text="Delete" class="last-btn" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IPost } from '../types/postInterface';
import { postMocks } from '../mocks/postMocks';

export default defineComponent({
  data() {
    return {
      post: {} as IPost, // переедет в setup, будет возвращаться из хука
    };
  },
  mounted() {
    const postId: number = Number(this.$route.params.id);
    const postCheck = postMocks.find((post) => post.id === postId);
    if (!postCheck) return;

    this.post = postCheck;
  },
});
</script>

<style lang="scss" scoped>
#post-edit {
  display: flex;
  flex-direction: column;
  gap: 15px;

  .post-edit__btns {
    display: flex;
    gap: 20px;
    width: 100%;

    .last-btn {
      margin-left: auto;
    }
  }
}
</style>
