import './css/main.css'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'

import HelloWorld from './components/helloworld/index.js'
import Carrousel3d from './components/carrousel3d/index.js'
import Todo from './components/todo/index.js'
import Btn from './components/btn/index.js'
import Container from './components/container/index.js'
import Row from './components/row/index.js'
import Col from './components/col/index.js'
import Menu from './components/menu/index.js'
const components = [
  HelloWorld,
  Carrousel3d,
  Todo,
  Btn,
  Container,
  Row,
  Col,
  Menu
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
