import { createRouter, createWebHistory } from 'vue-router'
import Category from '../components/Category.vue'
import Product from '../components/Product.vue'

const routes = [
  {
    path: '/',
    name: 'Category',
    component: Category
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
