<template>
  <div class="movemenu" :style="init1">
    <div :style="init2" @click="toggle">
      <slot></slot>
    </div>
    <ul>
      <li class="item" :style="s" v-for="(s,i) in styleObj"><a href="#">{{mydata[i]}}</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'toolmenu',
    props: ['r', 'p'],
    data () {
      return {
        mydata: ['あ', 'い', 'う', 'え', 'お'],
        isshow: false,
        init1: {
          'width': this.r * 2 + 'px',
          'height': this.r * 2 + 'px',
          'bottom': '2%'
        },
        init2: {
          'line-height': this.r * 2 + 'px',
          'cursor': 'pointer',
          'user-select': 'none'
        },
        styleObj: []
      }
    },
    methods: {
      show () {
        this.isshow = true
        let item = this.mydata.length - 1
        for (let i = 0; i < this.mydata.length; i++) {
          let left = Math.floor(Math.sin((90 / item * i + 90) * Math.PI / 180) * this.r * 4)
          let top = Math.floor(Math.cos((90 / item * i + 90) * Math.PI / 180) * this.r * 4) + 'px'
          left = this.init1.left ? left + 'px' : -left + 'px'
          this.styleObj[i]['transform'] = 'translate(' + left + ',' + top + ')'
          this.styleObj[i]['opacity'] = 1
        }
      },
      hidden () {
        this.isshow = false
        for (let i = 0; i < this.mydata.length; i++) {
          this.styleObj[i]['transform'] = 'translate(0px,0px)'
          this.styleObj[i]['opacity'] = 0
        }
      },
      toggle () {
        if (!this.isshow) {
          this.show()
        } else {
          this.hidden()
        }
      }
    },
    computed: {},
    mounted () {
      for (let i = 0; i < this.mydata.length; i++) {
        switch (this.p) {
          case 'left':
            Object.assign(this.init1, {left: '2%'})
            break
          case 'right':
            Object.assign(this.init1, {right: '2%'})
            break
          default:
            break
        }
        this.styleObj.push({
          'width': this.r * 1.2 + 'px',
          'height': this.r * 1.2 + 'px',
          'line-height': this.r * 1.2 + 'px',
          'top': this.r * 0.4 + 'px',
          'left': this.r * 0.4 + 'px',
          'trsnsform': 'translate(0px,0px)',
          'transition-delay': 0.1 * i + 's',
          'opacity': 0
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  $r: 85;
  $g: 141;
  $b: 188;

  ul {
    padding: 0px;
    margin: 0px;
  }

  ul li {
    list-style: none;
  }

  .movemenu {
    position: fixed;
    border-radius: 50%;
    z-index: 1000;
  }

  .movemenu div {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    color: #fff;
    box-shadow: 0px 3px 5px rgb($r - 10, $g - 30, $b - 40);
    background-color: rgb($r, $g, $b);
    text-align: center;
    transition: opacity .2s;
    z-index: 100;
  }

  .movemenu div:hover {
    background-color: rgb($r+30, $g+10, $b);
    cursor: pointer;
  }

  .movemenu div:active {
    background-color: rgb($r - 10, $g - 30, $b - 40);
    box-shadow: none;
    //box-shadow: 0px 5px 5px rgb($r - 10, $g - 30, $b - 40);
    //box-shadow: inset 0 3px 5px rgba(0, 0, 0, .2);
  }

  .movemenu ul li {
    position: absolute;
    border-radius: 50%;
    color: #fff;
    transition: all .2s;
  }

  .movemenu ul li a {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    text-align: center;
    color: #fff;
    display: block;
    background-color: rgb($r, $g, $b);
    box-shadow: 0px 3px 5px rgb($r - 10, $g - 30, $b - 40);
    text-decoration: none;
  }
  .movemenu ul li a:hover{
    background-color: rgb($r+30, $g+10, $b);
  }
  .movemenu ul li a:active{
    background-color: rgb($r - 10, $g - 30, $b - 40);
    box-shadow: none;
  }
</style>
