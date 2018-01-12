import formItem from './form-item.vue'

formItem.install = function (Vue) {
  Vue.component(formItem.name, formItem)
}

if (typeof window !== 'undefined' && window.Vue) {
  formItem.install(window.Vue)
}

export default formItem
