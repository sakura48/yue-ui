<template>
  <lable class="y-checkbox" :class="[
    {
      'y-checkbox-disabled': disabled
    }
  ]">
    <input
      class=""
      :disabled="disabled"
      :name="name"
      type="checkbox"
      v-model="model"
      @change="handleChange">
    <span class="y-checkbox-label">
      <slot></slot>
    </span>
  </lable>
</template>

<script>
  import emitter from '../../mixins/emitter'

  export default {
    name: 'YCheckbox',
    mixins: [emitter],
    props: {
      checked: Boolean,
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String
      },
      value: {

      }
    },
    data () {
      return {
        selfModel: false
      }
    },
    computed: {
      model: {
        get () {
          return this.value !== undefined ? this.value : this.selfModel
        },
        set (val) {
          this.$emit('input', val)
          this.selfModel = val
        }
      }
    },
    methods: {
      addToStore () {

      },
      handleChange (e) {
        this.$emit('change', e)
      }
    },
    created () {

    }
  }
</script>

<style scoped>
  .y-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
  }
  .y-checkbox+ .y-checkbox {
    margin-left: 30px;
  }
  .y-checkbox-label {
    font-size: 14px;
    padding-left: 10px;
    color: #409eff;
  }
  .y-checkbox-disabled {
    cursor: not-allowed;
  }
  .y-checkbox-disabled .y-checkbox-label {
    color: #c0c4cc;
  }
</style>
