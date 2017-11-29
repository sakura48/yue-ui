import Col from './col.vue'

Col.install = function (Vue) {
  Vue.component(Col.name, Col)
}

if (typeof window !== 'undefined' && window.Vue) {
  Col.install(window.Vue)
}

export default Col
