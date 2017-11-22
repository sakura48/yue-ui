<template>
	<div class="container">
		<ul class="carrousel3D" :style="{margin: y+'px auto',width:w+'px',height:h+'px','-webkit-transform':'rotateY(' + deg + 'deg)'}" @mousedown="down">
			<li class="item" :style="s" v-for="(s,i) in styleObj">{{"ドラッグ"+mydata[i]}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'carrousel3d',
		props: ['x', 'y', 'r', 'w', 'h'],
		data() {
			return {
				mydata: [1, 2, 3, 4, 5, 6],
				obj: null,
				deg: 0,
				styleObj: []
			}
		},
		methods: {
			down(event) {
				console.log(event.target.parentNode)
				let ul = event.target.parentNode
				let o_x = parseInt(event.pageX)
				document.onmousemove = (ev) => {
					let x = parseInt(ev.pageX)
					this.deg += (x - o_x) / 4
					o_x = x
					ul.style.transform = "rotateY(" + this.deg + "deg)"
				}
				document.onmouseup = function() {
					this.onmousemove = null
				}
			},
		},
		mounted() {
			let item = this.mydata.length;
			for(let i = 0; i < this.mydata.length; i++) {
				this.styleObj.push({
					'width': this.w + 'px',
					'height': this.h + 'px',
					'line-height': this.h + 'px',
					'-webkit-transform': 'rotateY(' + (360 / item) * i + 'deg) translateZ(' + this.r + 'px)'
				})
			}
		}
	}
</script>

<style scoped>
	.container{

	}
	.carrousel3D {
		position: relative;
		transform-style: preserve-3d;
	}

	.item {
		list-style: none;
		position: absolute;
		-webkit-user-select: none;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		border-radius: 10px;
		background: green;
		-webkit-box-reflect: below 0 -webkit-linear-gradient(transparent, transparent 50%, rgba(255, 255, 255, .3));
	}
</style>
