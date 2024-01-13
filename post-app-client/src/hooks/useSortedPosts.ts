import { ref, Ref, computed } from 'vue';
import { IPost } from '../types';

const useSortedPosts = (posts: Ref<IPost[]>) => {
  const sortParam: Ref<keyof Omit<IPost, 'id' | 'user_id'>> = ref('date');

  const sortedPosts = computed(() => {
    if (sortParam.value === 'date')
      return [...posts.value].sort((a, b) => b[sortParam.value].localeCompare(a[sortParam.value]));

    return [...posts.value].sort((a, b) => a[sortParam.value].localeCompare(b[sortParam.value]));
  });

  return {
    sortParam,
    sortedPosts,
  };
};

export default useSortedPosts;
