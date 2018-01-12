<template>
  <div
    class="y-form-item"
    :class="[
      {
        'is-error': validateState === 'error',
      }
    ]"
  >
    <label :style="labelStyle" class="y-form-item_label" v-if="label">{{ label }}</label>
    <div class="y-form-item_content" :style="contentStyle">
      <slot></slot>
      <transition>
        <div class="y-form-item_error" v-if="validateState === 'error' && showMessage">{{ validateMessage }}</div>
      </transition>
    </div>
  </div>
</template>

<script>
  import AsyncValidator from 'async-validator'
  import emitter from '../../mixins/emitter'

  export default {
    name: 'YFormItem',
    componentName: 'YFormItem',
    mixins: [emitter],
    props: {
      label: {
        type: String
      },
      labelWidth: {
        type: String
      },
      prop: {
        type: String
      },
      showMessage: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        validateState: '',
        validateMessage: ''
      }
    },
    created () {
      this.dispatch('YForm', 'formAddField', [this])
    },
    watch: {

    },
    computed: {
      labelStyle () {
        let ret = {}
        if (this.labelWidth) {
          ret.width = this.labelWidth
        }
        return ret
      },
      contentStyle () {
        let ret = {}
        if (this.labelWidth) {
          ret.marginLeft = this.labelWidth
        }
        return ret
      },
      form () {
        return this.$parent
      },
      fieldValue: {
        cache: false,
        get () {
          let model = this.form.model
          if (!model || !this.prop) return
          return model[this.prop]
        }
      }
    },
    methods: {
      validate (trigger, callback) {
        let rules = this.getFilteredRule(trigger)
        if (!rules || rules.length === 0) {
          callback()
          return true
        }
        this.validateState = 'validating'
        let descriptor = {}
        descriptor[this.prop] = rules
        let validator = new AsyncValidator(descriptor)
        let model = {}
        model[this.prop] = this.fieldValue
        validator.validate(model, { firstFields: true }, (errors, fields) => {
          this.validateState = !errors ? 'success' : 'error'
          this.validateMessage = errors ? errors[0].message : ''
          callback(this.validateMessage)
        })
      },
      getRules () {
        let formRules = this.form.rules
        formRules = formRules ? formRules[this.prop] : []
        return [].concat(formRules || [])
      },
      getFilteredRule (trigger) {
        let rules = this.getRules()
        return rules.filter(rule => {
          return !rule.trigger || rule.trigger.indexOf(trigger) !== -1
        })
      }
    }
  }
</script>

<style>
  .y-form-item {
    margin-bottom: 22px;
  }
  .y-form-item_label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .y-form-item_content {
    position: relative;
    line-height: 40px;
  }
  .y-form-item.is-error input,
  .y-form-item.is-error select {
    border-color: #f56c6c;
  }
  .y-form-item_error {
    color: #f56c6c;
    font-size: 12px;
    line-height: 1;
    padding-top: 4px;
    position: absolute;
    top: 100%;
    left: 0;
  }
</style>
