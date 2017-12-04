import scrolldiv from './scrolldiv.vue'

scrolldiv.install = function (Vue) {
  Vue.component(scrolldiv.name, scrolldiv)
}

if (typeof window !== 'undefined' && window.Vue) {
  scrolldiv.install(window.Vue)
}

export default scrolldiv
