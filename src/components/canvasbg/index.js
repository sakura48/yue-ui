import canvasbg from './canvasbg.vue'

canvasbg.install = function (Vue) {
  Vue.component(canvasbg.name, canvasbg)
}

if (typeof window !== 'undefined' && window.Vue) {
  canvasbg.install(window.Vue)
}

export default canvasbg
