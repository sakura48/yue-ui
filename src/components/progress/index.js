import progress from './progress.vue'

progress.install = function (Vue) {
  Vue.component(progress.name, progress)
}

if (typeof window !== 'undefined' && window.Vue) {
  progress.install(window.Vue)
}

export default progress
