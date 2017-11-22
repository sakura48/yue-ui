import carrousel3d from './carrousel3d.vue'

carrousel3d.install = function (Vue) {
  Vue.component(carrousel3d.name, carrousel3d)
}

if (typeof window !== 'undefined' && window.Vue) {
  carrousel3d.install(window.Vue)
}

export default carrousel3d
