<template>
  <form class="form" action="" @submit.prevent="submitForm()">
    <div class="form__header">
      <h3>Add a New Post</h3>
    </div>

    <div class="form__content">
      <div class="form__block">
        <p class="input-label">Post title:</p>
        <p class="error-msg" v-if="v$.post.title.$error">Length must be greater than 4</p>
        <CustomInput
          type="text"
          v-model.trim="post.title"
          @blur="v$.post.title.$touch"
          :class="v$.post.title.$error ? 'input-error' : ''"
        />
      </div>

      <div class="form__block">
        <p class="input-label">Author:</p>
        <p class="error-msg" v-if="v$.post.author.$error">Length must be greater than 4</p>
        <!-- <CustomInput
          type="text"
          v-model.trim="post.author"
          @blur="v$.post.author.$touch"
          :class="v$.post.author.$error ? 'input-error' : ''"
        /> -->
        <CustomInput
          type="text"
          v-model.trim="post.author"
          @blur="v$.post.author.$touch"
          :class="v$.post.author.$error ? 'input-error' : ''"
        />
      </div>

      <div class="form__block">
        <p class="input-label">Content:</p>
        <p class="error-msg" v-if="v$.post.content.$error">Length must be greater than 10</p>
        <CustomInput
          type="text"
          v-model.trim="post.content"
          @blur="v$.post.content.$touch"
          :class="v$.post.content.$error ? 'input-error' : ''"
        />
      </div>
    </div>

    <div class="form__btns">
      <CustomButton text="Add Post" style="width: 100%" />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import usePosts from '../hooks/usePosts';
import store from '../store/store';
import { IPost } from '../types/postInterface';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';

export default defineComponent({
  data() {
    return {
      post: {
        title: '',
        author: store.getters.getAuthorName,
        content: '',
        user_id: store.state.isAuth ? store.state.user.id : null,
      } as IPost,
    };
  },
  props: {
    closeModal: {
      type: Function,
      required: false,
    },
  },
  setup() {
    const { createPost } = usePosts();

    return { createPost, v$: useVuelidate() };
  },
  validations() {
    return {
      post: {
        title: { required, minLength: minLength(4), $lazy: true },
        author: { required, minLength: minLength(4) },
        content: { required, minLength: minLength(10) },
      },
    };
  },
  methods: {
    async submitForm() {
      const result = await this.v$.$validate();
      if (!result) return;

      this.createPost(this.post);
      this.post.title = '';
      this.post.author = '';
      this.post.content = '';

      this.closeModal && this.closeModal();
    },
  },
});
</script>

<style lang="scss" scoped>
.form {
  .form__content {
    .form__block {
      margin-bottom: 20px;

      .input-label {
        font-size: 20px;
      }

      .error-msg {
        color: var(--red);
      }
    }
  }
}
</style>
