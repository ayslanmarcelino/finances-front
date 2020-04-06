import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './backend/vue-axios'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  axios,
  template: '<App/>',
  components: { App }
})
