<template>
  <div>
    <form class="y-form">
      <slot></slot>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'YForm',
    componentName: 'YForm',
    props: {
      model: {
        type: Object
      },
      rules: {
        type: Object
      }
    },
    data () {
      return {
        fields: []
      }
    },
    created () {
      this.$on('formAddField', (field) => {
        if (field) {
          this.fields.push(field)
        }
      })
      this.defaultData = JSON.parse(JSON.stringify(this.model))
    },
    methods: {
      resetForm () {
        if (!this.model) {
          return
        }
        this.model = Object.assign(this.model, this.defaultData)
      },
      validate (callback) {
        if (!this.model) {
          return
        }
        let valid = true
        let count = 0
        if (this.fields.length === 0 && callback) {
          /* eslint-disable */
          callback(true)
        }
        this.fields.forEach((field, index) => {
          field.validate('', errors => {
            if (errors) {
              valid = false
            }
            if (typeof callback === 'function' && ++count === this.fields.length) {
              callback(valid)
            }
          })
        })
      }
    }
  }
</script>

<style>

</style>
