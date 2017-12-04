<template>
  <div :class="['col-' + col, md ? 'col-md-' + md : '', sm ? 'col-sm-' + sm : '']">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'YCol',
    data () {

    },
    props: {
      col: {
        type: Number,
        default: 1
      },
      md: {
        type: Number
      },
      sm: {
        type: Number
      }
    }
  }
</script>
