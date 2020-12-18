import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Main = () => import("@/components/home/Main")
const Login = () => import("@/components/login/Login")

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/index',
    name: 'Index',
    component: Main
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router