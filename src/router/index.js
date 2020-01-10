import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})
// 增加路由守卫
router.beforeEach((to, from, next) => {
  // 如果用户访问的是登录界面，就放行
  if (to.path === '/login') return next()
  // 如果不是，则需要先拿到token值
  const tokenStr = window.sessionStorage.getItem('token')
  // 如果没有token值，则强制跳转到登录页面
  if (!tokenStr) return next('/login')
  next()
})

export default router
