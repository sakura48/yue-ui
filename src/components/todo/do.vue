<template>
  <div class="do">
    <h1>
      未完成（{{ dolength }}）
    </h1>
    <transition-group tag="ul" class="todo-wrapper" name="list">
      <li class="todo" v-for="(item, index) in doing" ref="tt" v-bind:key="item">
        <input type="checkbox" name="do" id="" class="checkbox" @click='check(index)'>
        <span class="text">{{item}}</span>
      </li>
    </transition-group>
  </div>
</template>

<script>
  import event from './event'

  export default {
    name: 'doing',
    data () {
      return {
        length: '',
        done: [],
        value: '',
        cancelList: ''
      }
    },
    props: ['doing', 'dolength'],
    mounted () {
      let vm = this
      event.$on('cancelList', function (res) {
        console.log(res)
        vm.cancelList = res
        vm.doing.push(vm.cancelList.pop())
      })
    },
    methods: {
      check: function (idx) {
        let done = this.doing.splice(idx, 1)
        this.done.push(done[0])
        event.$emit('donelist', this.done)
      }
    }
  }
</script>

<style lang="scss">
  .do {
    width: 70%;
    margin: 30px auto;
    height: auto;
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
