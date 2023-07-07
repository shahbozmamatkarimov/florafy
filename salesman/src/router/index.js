import { createRouter, createWebHistory } from 'vue-router'
import { ProfileView, DashboardView, UploadView, UserProfileView, UserProductsView, InboxView } from "../views"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'profile',
      component: ProfileView,
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: DashboardView,
        },
        {
          path: '/upload',
          name: 'upload',
          component: UploadView,
        },
        {
          path: '/userprofile',
          name: 'userprofile',
          component: UserProfileView,
        },
        {
          path: '/userproducts',
          name: 'userproducts',
          component: UserProductsView,
        },
        {
          path: '/inbox',
          name: 'inbox',
          component: InboxView,
        },
      ]
    },
  ]
})

export default router
