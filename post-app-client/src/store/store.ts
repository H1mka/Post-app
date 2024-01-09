import { IPost } from '../types/postInterface';
import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      posts: [] as IPost[],
    };
  },
  mutations: {
    setPosts(state, payload: IPost[]) {
      state.posts = payload;
    },

    addPost(state, payload: IPost) {
      state.posts.push(payload);
      state.posts.sort((a, b) => b.date.localeCompare(a.date));
    },

    removePost(state, postId: number) {
      state.posts = state.posts.filter((post) => post.id !== postId);
    },

    updatePost(state, payload: IPost) {
      let index = state.posts.findIndex((post) => post.id === payload.id);
      state.posts[index] = payload;
    },
  },
  getters: {
    getPostById: (state) => (postId: number) => {
      console.log('hi');
      return state.posts.find((post) => post.id === postId);
    },
  },
  strict: true,
});
