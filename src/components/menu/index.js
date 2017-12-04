import menu from './menu.vue'

menu.install = function (Vue) {
  Vue.component(menu.name, menu)
}

if (typeof window !== 'undefined' && window.Vue) {
  menu.install(window.Vue)
}

export default menu
