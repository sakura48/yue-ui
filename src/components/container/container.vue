<template>
  <div :class="fluid ? 'container-fluid' : 'container'">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'YContainer',
    props: {
      fluid: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
