<template>
  <div class="scrolldiv" :style="styleobj" ref="scrolldiv">
    <div class="context" :style="contextstyle" ref="context">
      <slot></slot>
    </div>
    <div class="vscroll" :style="vscrollstyle" v-show="h < scrollheight" @mousedown="vmove"
         @mouseenter="vscrollstyle.opacity = 1" @mouseout="vscrollstyle.opacity = 0.6"></div>
    <div class="hscroll" :style="hscrollstyle" v-show="w < scrollwidth" @mousedown="hmove"
         @mouseenter="hscrollstyle.opacity = 1" @mouseout="hscrollstyle.opacity = 0.6"></div>
  </div>
</template>
<script>
  export default {
    name: 'scrolldiv',
    props: ['styleobj'],
    data () {
      return {
        w: 0,
        h: 0,
        scrollheight: 0,
        scrollwidth: 0,
        vscrollstyle: {
          top: '0px',
          height: '0px',
          opacity: 0.6
        },
        hscrollstyle: {
          left: '0px',
          width: '0px',
          opacity: 0.6
        }
      }
    },
    methods: {
      checkscroll () {
        this.scrollheight = this.$refs.context.scrollHeight
        this.scrollwidth = this.$refs.context.scrollWidth
        if (this.$refs.context.scrollHeight > parseInt(this.h)) {
          this.vscrollstyle.height = Math.floor(parseInt(this.h) / this.scrollheight * parseInt(this.h)) + 'px'
          if (parseInt(this.vscrollstyle.height) < 100) {
            this.vscrollstyle.height = '100px'
          }
        }
        if (this.$refs.context.scrollWidth > parseInt(this.w)) {
          this.hscrollstyle.width = Math.floor(parseInt(this.w) / this.scrollwidth * parseInt(this.w)) + 'px'
          if (parseInt(this.hscrollstyle.width) < 100) {
            this.hscrollstyle.width = '100px'
          }
        }
      },
      vmove (ev) {
        if (!(ev.button === 0)) {
          return false
        }
        let y = ev.pageY
        let top = parseInt(this.vscrollstyle.top)
        document.onmousemove = (event) => {
          if (event.pageY - y > 0) {
            if (top + parseInt(this.vscrollstyle.height) < this.h) {
              this.vscrollstyle.top = top + event.pageY - y + 'px'
              top = parseInt(this.vscrollstyle.top)
              y = event.pageY
            } else {
              this.vscrollstyle.top = this.h - parseInt(this.vscrollstyle.height) + 'px'
            }
          } else {
            if (top > 0) {
              this.vscrollstyle.top = top + event.pageY - y + 'px'
              top = parseInt(this.vscrollstyle.top)
              y = event.pageY
            } else {
              this.vscrollstyle.top = '0px'
            }
          }
        }
        document.onmouseup = () => {
          if (top < 0) {
            this.vscrollstyle.top = '0px'
          }
          if (parseInt(this.vscrollstyle.height) + top > this.h) {
            this.vscrollstyle.top = this.h - parseInt(this.vscrollstyle.height) + 'px'
          }
          document.onmousemove = null
        }
      },
      hmove (ev) {
        if (!(ev.button === 0)) {
          return false
        }
        let x = ev.pageX
        let left = parseInt(this.hscrollstyle.left)
        document.onmousemove = (event) => {
          if (event.pageX - x > 0) {
            if (left + parseInt(this.hscrollstyle.width) < this.w) {
              this.hscrollstyle.left = left + event.pageX - x + 'px'
              left = parseInt(this.hscrollstyle.left)
              x = event.pageX
            } else {
              this.hscrollstyle.left = this.w - parseInt(this.hscrollstyle.width) + 'px'
            }
          } else {
            if (left > 0) {
              this.hscrollstyle.left = left + event.pageX - x + 'px'
              left = parseInt(this.hscrollstyle.left)
              x = event.pageX
            } else {
              this.hscrollstyle.left = '0px'
            }
          }
        }
        document.onmouseup = () => {
          if (left < 0) {
            this.hscrollstyle.left = '0px'
          }
          if (parseInt(this.hscrollstyle.width) + left > this.w) {
            this.hscrollstyle.left = this.w - parseInt(this.hscrollstyle.width) + 'px'
          }
          document.onmousemove = null
        }
      }
    },
    computed: {
      contextstyle () {
        return {
          top: -(this.scrollheight - this.h) * parseInt(this.vscrollstyle.top) / (this.h - parseInt(this.vscrollstyle.height)) + 'px',
          left: -(this.scrollwidth - this.w) * parseInt(this.hscrollstyle.left) / (this.w - parseInt(this.hscrollstyle.width)) + 'px'
        }
      }
    },
    mounted () {
      this.w = this.$refs.scrolldiv.offsetWidth
      this.h = this.$refs.scrolldiv.offsetHeight
      this.checkscroll()
      this.$refs.context.addEventListener('DOMSubtreeModified', () => {
        this.checkscroll()
      })
      this.$refs.scrolldiv.addEventListener('mousewheel', (ev) => {
        event.preventDefault()
        if (this.h >= this.scrollheight) {
          return false
        }
        if (ev.wheelDelta === 120) {
          if (parseInt(this.vscrollstyle.top) > 5) {
            this.vscrollstyle.top = parseInt(this.vscrollstyle.top) - 5 + 'px'
          } else {
            this.vscrollstyle.top = '0px'
          }
        } else {
          if (parseInt(this.vscrollstyle.top) + parseInt(this.vscrollstyle.height) < this.h) {
            this.vscrollstyle.top = parseInt(this.vscrollstyle.top) + 5 + 'px'
          } else {
            this.vscrollstyle.top = this.h - parseInt(this.vscrollstyle.height) + 'px'
          }
        }
      })
    }
  }
</script>
<style scoped>
  .scrolldiv {
    position: relative;
    border: 1px solid black;
    user-select: none;
    overflow: hidden;
  }

  .scrolldiv .context {
    position: absolute;
    top: 0px;
    left: 0px;
  }

  .scrolldiv .context:after {
    content: " ";
    display: block;
    clear: both;
    height: 0;
  }

  .vscroll {
    position: absolute;
    width: 15px;
    right: 0px;
    background-color: gray;
    position: absolute;
    border-radius: 1000px;
    transition: opacity .2s;
  }

  .hscroll {
    position: absolute;
    height: 15px;
    bottom: 0px;
    background-color: gray;
    position: absolute;
    border-radius: 1000px;
    transition: opacity .2s;
  }
</style>
