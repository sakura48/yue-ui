import select from './select.vue'

select.install = function (Vue) {
  Vue.component(select.name, select)
}

if (typeof window !== 'undefined' && window.Vue) {
  select.install(window.Vue)
}

export default select
