import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Checkout from '../views/Checkout.vue'
import KundKorg from '../views/KundKorg.vue'
import LoggIn from '../views/LoggIn.vue'
import MyAccount from '../views/MyAccount.vue'
import ProduktInfo from '../views/ProduktInfo.vue'
import ProduktLista from '../views/ProduktLista.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/kundkorg',
    name: 'KundKorg',
    component: KundKorg
  },
  {
    path: '/loggin',
    name: 'LoggIn',
    component: LoggIn
  },
  {
    path: '/myaccount',
    name: 'MyAccount',
    component: MyAccount
  },
  {
    path: '/products/:id',
    name: 'ProduktInfo',
    component: ProduktInfo
  },
  {
    path: '/produktlista',
    name: 'ProduktLista',
    component: ProduktLista
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
