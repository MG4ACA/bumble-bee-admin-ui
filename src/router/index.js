import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import AdminPanel from '../views/AdminPanel.vue'
import Category from '../views/Category.vue'
import Products from '../views/Products.vue'
import Brands from '../views/Brands.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }, 
    {
      path: '/admin-panel',
      name: 'admin-panel',
      component: AdminPanel
    }, 
    {
      path: '/products',
      name: 'products',
      component: Products
    }, 
    {
      path: '/category',
      name: 'category',
      component: Category
    }, 
    {
      path: '/brand',
      name: 'brand',
      component: Brands
    }
  ]
})

export default router
