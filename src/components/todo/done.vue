<template>
  <div class="done" v-show="isshow">
    <h1>
      已完成({{number}})
    </h1>
    <transition-group tag="ul" class="todo-wrapper" name="list">
      <li class="todo" v-for="(item, index) in done" ref="tt" v-bind:key="item">
        <input type="checkbox" name="" id="" class="checkbox" checked @click="cancel(index)">
        <span class="text">{{item}}</span>
      </li>
    </transition-group>
  </div>
</template>

<script>
  import event from './event'

  export default {
    name: 'done',
    data () {
      return {
        done: '',
        cancelList: [],
        number: 0
      }
    },
    mounted () {
      let vm = this
      event.$on('donelist', function (res) {
        vm.done = res
        vm.number = vm.done.length
      })
    },
    methods: {
      cancel: function (idx) {
        let cancelList = this.done.splice(idx, 1)
        this.cancelList.push(cancelList[0])
        this.number--
        event.$emit('cancelList', this.cancelList)
      }
    },
    computed: {
      isshow: function () {
        if (this.number === 0) {
          return false
        } else {
          return true
        }
      }
    }
  }
</script>

<style lang="scss">
  .done {
    width: 70%;
    margin: 30px auto;
    .todo-wrapper {
      min-height: 16px;
      width: 88%;
      margin: 14px auto 10px;
      transition: height 1s;
      .todo {
        display: flex; // flex-flow: column;
        transition: all 1s;
        margin-bottom: 8px;
        &.list-enter-active,
        &.list-leave-active {
          transition: all 1s;
          position: absolute;
        }

        &.list-enter,
        &.list-leave-to {
          opacity: 0;
          transform: translateY(30px);
        }
        &.list-move {
          transition: transform 1s;
        }
      }
      .checkbox {
      }
      .text {
        margin-left: 5px;
      }
    }
  }
</style>
