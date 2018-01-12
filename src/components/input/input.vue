<template>
  <div class="y-input-group" :class="[
    {
      'y-input-group-append': $slots.append,
      'y-input-group-prepend': $slots.prepend
    }
  ]">
    <div class="y-input-prepend" v-if="$slots.prepend" @click="_handlePrependClick">
      <slot name="prepend"></slot>
    </div>
    <slot name="suffix">
      <i v-if="suffixIcon" class="fa y-input-suf" :class="'fa-' + suffixIcon" @click="handleSufIconClick"></i>
    </slot>
    <input
      ref="input"
      :id="elementId"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      class="y-input"
      :class="[{
        'y-input-disabled': disabled
      }]"
      :disabled="disabled"
      :max="max"
      :maxlength="maxLength"
      :min="min"
      :name="name"
      :placeholder="placeholder"
      :readonly="readonly"
      :required="required"
      :suffixIcon="suffixIcon"
      :type="type"
      :value="currentValue"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <slot name="prefix">
      <i v-if="prefixIcon" class="fa y-input-pre" :class="'fa-' + prefixIcon" @click="handlePreIconClick"></i>
      <i v-else-if="clearable" class="fa fa-times y-input-pre" @click="_handleClearClick"></i>
    </slot>
    <div class="y-input-append" v-if="$slots.append" @click="_handleAppendClick">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
  import emitter from '../../mixins/emitter'

  export default {
    name: 'YInput',
    mixins: [emitter],
    props: {
      elementId: {
        type: String
      },
      autocomplete: {
        type: String,
        default: 'off'
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      clearable: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      max: {
        type: Number
      },
      maxLength: {
        type: Number
      },
      min: {
        type: Number
      },
      name: {
        type: String
      },
      placeholder: {
        type: String,
        default: ''
      },
      prefixIcon: {
        type: String
      },
      readonly: {
        type: Boolean,
        default: false
      },
      required: {
        type: Boolean,
        default: false
      },
      suffixIcon: {
        type: String
      },
      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: [String, Number],
        default: ''
      }
    },
    data () {
      return {
        currentValue: this.value
      }
    },
    created () {
    },
    methods: {
      _setCurrentValue (value) {
        if (value === this.currentValue) return
        this.currentValue = value
      },
      handleInput (e) {
        let value = e.target.value
        this.$emit('input', value)
        this._setCurrentValue(value)
        this.$emit('change', value)
      },
      handleFocus (e) {
        this.$emit('focus', e)
      },
      handleBlur (e) {
        this.$emit('blur', e)
      },
      handleSufIconClick (e) {
        this.$emit('suf-icon-click', this.currentValue)
      },
      handlePreIconClick (e) {
        this.$emit('pre-icon-click', this.currentValue)
      },
      _handleClearClick (e) {
        this.$emit('input', '')
        this._setCurrentValue('')
        this.$emit('change', '')
        this.$refs.input.focus()
      },
      _handlePrependClick () {
        this.$emit('prepend-click', this.currentValue)
      },
      _handleAppendClick () {
        this.$emit('append-click', this.currentValue)
      }
    },
    watch: {
      value (val) {
        this._setCurrentValue(val)
      }
    }
  }
</script>

<style>
  .y-input-group {
    position: relative;
    line-height: normal;
    display: inline-table;
    width: 100%;
    border-collapse: separate;
  }
  .y-input {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #d8dce5;
    box-sizing: border-box;
    color: #5a5e66;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 1;
    outline: none;
    padding: 0 20px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
  }
  .y-input-disabled {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
  }
  .y-input-suf {
    position: absolute;
    left: 5px;
    top: 50%;
    margin-top: -8px;
  }
  .y-input-pre {
    position: absolute;
    right: 5px;
    top: 50%;
    margin-top: -8px;
  }
  .y-input-prepend {
    background-color: #f5f7fa;
    color: #909399;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 4px 0 0 4px;
    padding: 0 10px;
    width: 1px;
    white-space: nowrap;
    border-right: 0;
  }
  .y-input-append {
    background-color: #f5f7fa;
    color: #909399;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 0 4px 4px 0;
    padding: 0 10px;
    width: 1px;
    white-space: nowrap;
    border-left: 0;
  }
  .y-input-group-append input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .y-input-group-prepend input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
</style>
