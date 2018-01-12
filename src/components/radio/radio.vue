<template>
  <label class="y-radio" :class="[
    {
      'y-radio-disabled': disabled
    }
  ]">
    <input
      class=""
      :disabled="disabled"
      :name="name"
      type="radio"
      :value="label"
      v-model="model"
      @click="handleClick">
    <span class="y-radio-label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
  import emitter from '../../mixins/emitter'

  export default {
    name: 'YRadio',
    mixins: [emitter],
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      label: {},
      name: {
        type: String
      },
      value: {}
    },
    data () {
      return {

      }
    },
    computed: {
      model: {
        get () {
          return this.value
        },
        set (val) {
          this.$emit('input', val)
        }
      }
    },
    methods: {
      handleClick (e) {
        this.$emit('click', e)
      }
    }
  }
</script>

<style scoped>
  .y-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  .y-radio+ .y-radio {
    margin-left: 30px;
  }
  .y-radio-label {
    font-size: 14px;
    padding-left: 10px;
    color: #409eff;
  }
  .y-radio-disabled {
    cursor: not-allowed;
  }
  .y-radio-disabled .y-radio-label {
    color: #c0c4cc;
  }
</style>
