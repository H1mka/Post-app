import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import PostsPage from '../pages/PostsPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: PostsPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
