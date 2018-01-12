import form from './form.vue'

form.install = function (Vue) {
  Vue.component(form.name, form)
}

if (typeof window !== 'undefined' && window.Vue) {
  form.install(window.Vue)
}

export default form
