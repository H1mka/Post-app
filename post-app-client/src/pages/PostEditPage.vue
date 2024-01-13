<template>
  <div id="post-edit">
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
      <CustomButton text="Save" @click="savePost" />
      <CustomButton text="Cancel" @click="cancelChanges" />
      <CustomButton text="Delete" class="last-btn" @click="removePost" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useGetPostById from '../hooks/useGetPostById';
import usePosts from '../hooks/usePosts';

export default defineComponent({
  mounted() {},
  methods: {
    cancelChanges() {
      this.$router.go(-1);
    },
  },
  setup(props, context) {
    const route = useRoute();
    const router = useRouter();
    const postId: number = Number(route.params.id);

    const { post, isLoading } = useGetPostById(postId);
    const { deletePost, updatePost } = usePosts();

    const removePost = () => {
      deletePost(post.value.id);
      router.go(-1);
    };

    const savePost = () => {
      updatePost(post.value);
      router.go(-1);
    };

    return {
      post,
      isLoading,
      savePost,
      removePost,
    };
  },
});
</script>

<style lang="scss" scoped>
#post-edit {
  margin-top: 50px;
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
