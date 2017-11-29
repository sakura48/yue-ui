import btn from './btn.vue'

btn.install = function (Vue) {
  Vue.component(btn.name, btn)
}

if (typeof window !== 'undefined' && window.Vue) {
  btn.install(window.Vue)
}

export default btn
