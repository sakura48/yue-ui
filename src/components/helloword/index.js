import HelloWorld from './HelloWorld.vue'

HelloWorld.install = function (Vue) {
  Vue.component(HelloWorld.name, HelloWorld)
}

if (typeof window !== 'undefined' && window.Vue) {
  HelloWorld.install(window.Vue)
}

export default HelloWorld
