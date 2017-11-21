<template>
  <h1>Hello World! {{ msg }}</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Yue UI'
    }
  }
}
</script>

<style scoped>
h1 {
  color: #2c3e50;
}
</style>
