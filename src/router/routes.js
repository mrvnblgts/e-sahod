const routes = [
  {
    path: '/',
    component: () => import('@/pages/LandingPage.vue')
  },
  {
    path: '/login',
    redirect: { path: '/', query: { auth: 'login' } }
  },
  {
    path: '/register',
    redirect: { path: '/', query: { auth: 'register' } }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue'),
  }
]

export default routes