import Input from './input.vue'

Input.install = function (Vue) {
  Vue.component(Input.name, Input)
}

if (typeof window !== 'undefined' && window.Vue) {
  Input.install(window.Vue)
}

export default Input
