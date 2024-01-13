import { IPost, IUser } from '../types';
import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      isAuth: false as Boolean,
      user: {} as IUser,
      posts: [] as IPost[],
    };
  },
  mutations: {
    setAuth(state, payload: Boolean) {
      state.isAuth = payload;
    },

    setUser(state, payload: IUser) {
      state.user = payload;
    },

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
      return state.posts.find((post) => post.id === postId);
    },
    getAuthorName: (state) => {
      if (!state.user) return 'unknown user';

      return state.user.first_name + ' ' + state.user.last_name;
    },
  },
  strict: true,
});
