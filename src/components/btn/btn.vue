<template>
  <button class="btn-default" :class="classobj" @click="handleclick">
    <slot></slot>
  </button>
</template>
<script>
  export default {
    name: 'btn',
    props: ['btnstyle', 'state'],
    data () {
      return {}
    },
    methods: {
      handleclick (ev) {
        this.$emit('click', ev)
      }
    },
    computed: {
      classobj () {
        return this.btnstyle + (this.state ? ' ' + this.state : '')
      }
    }
  }
</script>
<style lang="scss">
  $r: 138;
  $g: 8;
  $b: 48;

  @import "sass/btn-default";
  @import "sass/Micro-texture";
  @import "sass/Ghost";
  @import "sass/Radius";
</style>
