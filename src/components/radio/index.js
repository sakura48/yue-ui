import radio from './radio.vue'

radio.install = function (Vue) {
  Vue.component(radio.name, radio)
}

if (typeof window !== 'undefined' && window.Vue) {
  radio.install(window.Vue)
}

export default radio
