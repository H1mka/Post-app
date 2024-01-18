import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import PostsPage from '../pages/PostsPage.vue';
import PostEditPage from '../pages/PostEditPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import RegistrationPage from '../pages/RegistrationPage.vue';
import UserPostsPage from '../pages/UserPostsPage.vue';
import NotAuthorizedPage from '../pages/NotAuthorizedPage.vue';

import store from '../store/store';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: PostsPage,
  },
  {
    path: '/post/:id',
    component: PostEditPage,
    meta: { requiresAuth: true },
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
    path: '/not-auth',
    component: NotAuthorizedPage,
  },
  {
    path: '/users-posts',
    component: UserPostsPage,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.isAuth) {
    next('/not-auth');
  } else {
    next();
  }
});

export default router;
