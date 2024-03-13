import { createRouter, createWebHistory } from 'vue-router';
import ListView from '@/views/ListView.vue';
import DetailView from '@/views/DetailView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListView
    },
    {
      path: '/:id',
      name: 'detail',
      component: DetailView
    }
  ]
})

export default router
