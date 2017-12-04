import Container from './container.vue'

Container.install = function (Vue) {
  Vue.component(Container.name, Container)
}

if (typeof window !== 'undefined' && window.Vue) {
  Container.install(window.Vue)
}

export default Container
