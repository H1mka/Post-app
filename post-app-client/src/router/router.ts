import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import PostsPage from '../pages/PostsPage.vue';
import PostEditPage from '../pages/PostEditPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import RegistrationPage from '../pages/RegistrationPage.vue';
import UserPostsPage from '../pages/UserPostsPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: PostsPage,
  },
  {
    path: '/post/:id',
    component: PostEditPage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/registration',
    component: RegistrationPage,
  },
  {
    path: '/usersPosts',
    component: UserPostsPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
