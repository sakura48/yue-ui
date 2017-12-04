<template>
  <canvas class="bg" :width="canvaswidth" :height="canvasheight" ref="canvasbg"></canvas>
</template>

<script>
  import Ball from './ballobj'

  export default {
    name: 'canvasbg',
    props: ['w', 'h', 'ballnum', 'r'],
    data () {
      return {
        ctx: null,
        ball_arr: []
      }
    },
    methods: {
      resetcanvas () {
        this.ctx.fillStyle = '#ffffff'
        this.ctx.fillRect(0, 0, this.canvaswidth, this.canvasheight)
      },
      run () {
        this.resetcanvas()
        for (let i = 0; i < this.ball_arr.length; i++) {
          if (this.ball_arr[i].r >= this.ball_arr[i].maxr) {
            this.ball_arr.splice(i, 1, new Ball(this.r, this.canvaswidth, this.canvasheight))
          } else {
            this.ball_arr[i].r += this.ball_arr[i].v
            this.ball_arr[i].draw(this.ctx)
          }
        }
        setTimeout(this.run, 1000 / 30)
      }
    },
    computed: {
      canvaswidth () {
        return (this.w || document.documentElement.clientWidth)
      },
      canvasheight () {
        return (this.h || document.documentElement.clientHeight)
      }
    },
    mounted () {
      this.ctx = this.$refs.canvasbg.getContext('2d')
      for (let i = 0; i < this.ballnum; i++) {
        this.ball_arr.push(new Ball(this.r, this.canvaswidth, this.canvasheight))
      }
      this.run()
    }
  }
</script>

<style scoped>
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    z-index: -100;
  }
</style>
