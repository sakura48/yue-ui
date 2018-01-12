import Vue from 'vue'
import App from './App'
import yue from '../src/main.js'

Vue.use(yue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
