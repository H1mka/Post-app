import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import PostsPage from '../pages/PostsPage.vue';
import PostEditPage from '../pages/PostEditPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: PostsPage,
  },
  {
    path: '/post/:id',
    component: PostEditPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
