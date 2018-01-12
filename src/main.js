import './css/main.css'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import HelloWorld from './components/helloworld/index.js'
import Carrousel3d from './components/carrousel3d/index.js'
// import Todo from './components/todo/index.js'
import Btn from './components/btn/index.js'
import Container from './components/container/index.js'
import Row from './components/row/index.js'
import Col from './components/col/index.js'
import Menu from './components/menu/index.js'
import Scrolldiv from './components/scrolldiv/index.js'
import Canvasbg from './components/canvasbg/index.js'
import Input from './components/input/index.js'
import Radio from './components/radio/index.js'
import Checkbox from './components/checkbox/index.js'
import Select from './components/select/index.js'
import Form from './components/form/index.js'
import FormItem from './components/form-item/index.js'
import Button from './components/button/index.js'

const components = [
  HelloWorld,
  Carrousel3d,
  // Todo,
  Btn,
  Container,
  Row,
  Col,
  Menu,
  Scrolldiv,
  Canvasbg,
  Col,
  Input,
  Radio,
  Checkbox,
  Select,
  Form,
  FormItem,
  Button
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
