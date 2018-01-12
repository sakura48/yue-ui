import checkbox from './checkbox.vue'

checkbox.install = function (Vue) {
  Vue.component(checkbox.name, checkbox)
}

if (typeof window !== 'undefined' && window.Vue) {
  checkbox.install(window.Vue)
}

export default checkbox
