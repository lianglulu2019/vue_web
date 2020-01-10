import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
// 导入字体图标库
import './assets/fonts/iconfont.css'

// 引入axios
import axios from 'axios'
// 设置根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 把axios挂载的vue的原型对象上，这样的话每一个Vue组件都可以通过this直接访问到$http,从而发起请求
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
