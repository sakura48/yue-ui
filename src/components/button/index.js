import button from './button.vue'

button.install = function (Vue) {
  Vue.component(button.name, button)
}

if (typeof window !== 'undefined' && window.Vue) {
  button.install(window.Vue)
}

export default button
