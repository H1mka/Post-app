import { ref, Ref, onMounted } from 'vue';
import { IPost } from '../types/postInterface';
import axios from 'axios';
import store from '../store/store';

const useGetUserPosts = (id: number) => {
  const posts: Ref<IPost[]> = ref([]);
  const isLoading: Ref<boolean> = ref(false);

  const getPosts = async (user_id: number) => {
    try {
      isLoading.value = true;

      const response = await axios.get(`http://localhost:8080/api/post/userPosts/${user_id}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });

      posts.value = response.data;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(() => {
    if (store.state.isAuth) getPosts(id);
  });

  return {
    posts,
    isLoading,
  };
};

export default useGetUserPosts;
