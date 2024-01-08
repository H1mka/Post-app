import { ref, Ref, onMounted } from 'vue';
import { IPost } from '../types/postInterface';
import axios from 'axios';

export default function (id: number) {
  const post: Ref<IPost> = ref({} as IPost);
  const isLoading: Ref<boolean> = ref(false);

  const getPost = async (postId: number) => {
    try {
      isLoading.value = true;

      const response = await axios.get(`http://localhost:8080/api/post/${postId}`);

      post.value = response.data;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(() => {
    getPost(id);
  });

  return {
    post,
    isLoading,
  };
}
