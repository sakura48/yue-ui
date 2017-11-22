import HelloWorld from './components/helloworld/index.js'
import carrousel3d from  './components/carrousel3d/index.js'
import todo from './components/todo/index.js'

const components = [
  HelloWorld,
  carrousel3d,
  todo
]

const install = function (Vue) {
  if (install.installed) return

  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
