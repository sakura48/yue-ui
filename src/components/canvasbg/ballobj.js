class Ball {
  constructor (maxr, w, h) {
    this.maxr = Math.floor(maxr - 30 + Math.random() * 30)
    this.x = Math.ceil(Math.random() * w)
    this.y = Math.ceil(Math.random() * h)
    this.r = 0
    this.v = 2
    this.color = (function () {
      let hue = Math.ceil(Math.random() * 360)
      return 'hsla(' + hue + ',25%,70%,0.5)'
    })()
  }

  draw (cxt) {
    cxt.fillStyle = this.color
    cxt.beginPath()
    cxt.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
    cxt.fill()
    cxt.closePath()
  }
}

export default Ball
