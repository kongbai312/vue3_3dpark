export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView/index.vue')
  },
  {
    path: '/big-screen',
    name: 'big-screen',
    component: () => import('@/views/BigScreenView/index.vue')
  }
]