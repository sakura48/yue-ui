class ProgressBall {
  constructor (r) {
    this.r = parseInt(r)
    this.y = 40
    this.percent = 0
    this.start = 0
    this.timer = null
    this.color1 = 'rgba(45,188,241,0.8)'
    this.color2 = 'rgba(45,188,241,0.5)'
  }

  resetcanvas (ctx) {
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, this.r * 2, this.r * 2)
  }

  draw (start, ctx, color) {
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.moveTo(start, this.percent)
    ctx.quadraticCurveTo(this.r / 2 + start, this.percent - this.r / 5, this.r + start, this.percent)
    ctx.quadraticCurveTo(this.r / 2 + this.r + start, this.percent + this.r / 5, this.r * 2 + start, this.percent)
    ctx.quadraticCurveTo(this.r * 2 + this.r / 2 + start, this.percent - this.r / 5, this.r * 3 + start, this.percent)
    ctx.quadraticCurveTo(this.r * 3 + this.r / 2 + start, this.percent + this.r / 5, this.r * 4 + start, this.percent)
    ctx.lineTo(this.r * 4 + start, this.r * 2)
    ctx.lineTo(start, this.r * 2)
    ctx.closePath()
    ctx.fill()
  }

  run (ctx) {
    this.timer = setInterval(() => {
      this.resetcanvas(ctx)
      if (this.percent === 0) {
        ctx.fillStyle = '#0c6'
        ctx.fillRect(0, 0, this.r * 2, this.r * 2)
        clearInterval(this.timer)
      } else {
        this.draw(this.start, ctx, this.color1)
        this.draw(-this.start - this.r * 2, ctx, this.color2)
        this.start = this.start < -this.r * 2 ? 0 : this.start - 1
      }
    }, 1000 / 60)
  }
}

export default ProgressBall
