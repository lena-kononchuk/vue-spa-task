import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ReviewShow from '../components/ReviewShow.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage, 
  },
  {
    path: '/reviews',
    name: 'ReviewShow',
    component: ReviewShow,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
