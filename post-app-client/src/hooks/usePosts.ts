import { ref, Ref, onMounted, computed, ComputedRef } from 'vue';
import { IPost } from '../types/postInterface';
import store from '../store/store';
import axios, { AxiosResponse } from 'axios';

export default function () {
  const posts: ComputedRef<IPost[]> = computed(() => store.state.posts);
  const isLoading: Ref<boolean> = ref(false);

  const getPosts = async () => {
    try {
      isLoading.value = true;

      const response: AxiosResponse = await axios.get('http://localhost:8080/api/post');

      store.commit('setPosts', response.data); // set posts to store
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  const deletePost = async (postId: number) => {
    try {
      const response: AxiosResponse = await axios.delete(
        `http://localhost:8080/api/post/${postId}`
      );

      store.commit('removePost', postId); // update store
    } catch (error) {
      console.log(error);
    }
  };

  const updatePost = async (post: IPost) => {
    try {
      const response: AxiosResponse = await axios.patch(`http://localhost:8080/api/post`, post);

      store.commit('updatePost', post);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    posts,
    isLoading,
    getPosts,
    deletePost,
    updatePost,
  };
}
