<template>
  <canvas :width="r*2" :height="r*2" ref="progress" :style="{'border-color': bordercolor}"></canvas>
</template>

<script>
  import ProgressBall from './ProgressBall'

  export default {
    name: 'YProgress',
    props: {
      r: {
        type: Number
      },
      percent: {
        type: Number,
        default: 0
      },
      status: {
        type: String,
        default: 'normal'
      }
    },
    data () {
      return {
        ctx: null,
        progressobj: null,
        bordercolor: '#1e90ff'
      }
    },
    methods: {
      setcolor (color1, color2, bordercolor) {
        this.progressobj.color1 = color1
        this.progressobj.color2 = color2
        this.bordercolor = bordercolor
      },
      changestatus (status) {
        switch (status) {
          case 'normal':
            this.setcolor('rgba(45,188,241,0.8)', 'rgba(45,188,241,0.5)', '#1e90ff')
            clearInterval(this.progressobj.timer)
            break
          case 'active':
            this.setcolor('rgba(45,188,241,0.8)', 'rgba(45,188,241,0.5)', '#1e90ff')
            clearInterval(this.progressobj.timer)
            this.progressobj.run(this.ctx)
            break
          case 'wrong':
            this.setcolor('rgba(241,45,45,0.8)', 'rgba(241,45,45,0.5)', '#f12d2d')
            clearInterval(this.progressobj.timer)
            this.progressobj.run(this.ctx)
            break
          case 'success':
            this.setcolor('rgba(0,204,102,0.8)', 'rgba(0,204,102,0.5)', '#0c6')
            break
          default: break
        }
      }
    },
    watch: {
      percent () {
        this.progressobj.percent = Math.floor((1 - this.percent / 100) * this.r * 2)
        if (this.percent === 100) {
          this.changestatus('success')
        }
      },
      status () {
        this.changestatus(this.status)
      }
    },
    mounted () {
      this.ctx = this.$refs.progress.getContext('2d')
      this.progressobj = new ProgressBall(this.r)
      this.progressobj.percent = Math.floor((1 - this.percent / 100) * this.r * 2)
      this.changestatus(this.status)
    }
  }
</script>

<style scoped>
  canvas {
    border: 1px solid;
    border-radius: 50%;
  }
</style>
