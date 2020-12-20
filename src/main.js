import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as ajax from '@/request'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.use(Antd)
Vue.config.productionTip = false
Vue.prototype.$http = ajax
Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
