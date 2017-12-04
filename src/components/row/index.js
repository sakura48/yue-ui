import Row from './row.vue'

Row.install = function (Vue) {
  Vue.component(Row.name, Row)
}

if (typeof window !== 'undefined' && window.Vue) {
  Row.install(window.Vue)
}

export default Row
