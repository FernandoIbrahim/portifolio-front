import { createRouter, createWebHistory } from 'vue-router';
import { useIsVisibleStore } from '@/stores/isModalVisible';

import Home from "@/components/HomePage.vue";
import Project from "@/components/ProjectPage.vue";
import Education from "@/components/EducationPage.vue";
import Recommendation from "@/components/RecommendationPage.vue";


//Os componentes das rotas são renderizados dentro do layout principal definido no App.vue e DefaultLayout.vue
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project',
    name: 'ProjectPage',
    component: Project
  },
  {
    path: '/education',
    name: 'EducationPage',
    component: Education
  },
  {
    path: '/recommendation',
    name: 'Recommendation',
    component: Recommendation
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});


router.beforeEach((to, from, next) => {
  const isVisibleStore = useIsVisibleStore(); // Obtendo a instância da store
  isVisibleStore.setVisibility(false); // Alterando a visibilidade ou realizando outra ação
  next(); // Continuar a navegação
});

export default router;