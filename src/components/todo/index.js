import doing from './do.vue'
import done from './done.vue'

doing.install = function (Vue) {
  Vue.component(doing.name, doing)
}

done.install = function (Vue) {
  Vue.component(done.name, done)
}

if (typeof window !== 'undefined' && window.Vue) {
  doing.install(window.Vue)
  done.install(window.Vue)
}

export default [ doing, done ]
