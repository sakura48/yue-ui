<template>
  <div class="y-select-group">
    <select
      class="y-select"
      :class="[
        {
          'y-select-disabled': disabled
        }
      ]"
      :disabled="disabled"
      :name="name"
      :optLabel="optLabel"
      :optValue="optValue"
      v-model="model"
      @change="handleChange"
    >
      <option value="">请选择</option>
      <option
        v-for="item in options"
        :value="item[optValue]"
        :disabled="item.disabled"
      >
        {{ item[optLabel] }}
      </option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'YSelect',
    props: {
      name: String,
      disabled: {
        type: Boolean,
        default: false
      },
      options: {
        type: Array
      },
      optLabel: [String, Number],
      optValue: {
        required: true
      },
      value: {

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
      handleChange (e) {
        this.$emit('change', this.value)
      }
    }
  }
</script>

<style scoped>
  .y-select {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 1;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
  }
  .y-select-disabled {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
  }
</style>
