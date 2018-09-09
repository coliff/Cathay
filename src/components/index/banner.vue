<template>
	<b-container fluid id="banner">
		<b-row v-if="!isMobile" align-h="center" align-v="center" class="h-100">
			<b-col cols="6" id="title">
				<img src="@/assets/img/ITs-Time.png" class="w-100 d-block" alt="IT's Time">
				<h4 class="py-4 slogan">
					國泰資訊人才招募計畫
				</h4>
			</b-col>
		</b-row>
		<img v-else src="@/assets/img/banner-mobile.png" class="w-100 d-block" alt="IT's Time 國泰資訊人才招募計畫">
	</b-container>
</template>

<script>
import mojs from 'mo-js';

export default {
	name: 'Banner',
	data() {
		return {
			isMobile: window.innerWidth < 800,
			colors: {
				black: '#383635',
				white: '#f2f2f2',
				darkGreen: '#2fae4d',
				lightGreen: '#85c044',
				orange: '#f0aa3a',
				yellow: '#f2da30',
			},
			setCircle: {
			    shape: 'circle',
			    className: 'mo-circle',
			    duration: 1000,
			},
			setLine: {
				shape: 'line',
				className: 'mo-line',
				strokeWidth: '2',
				strokeDasharray: '100%',
				duration: 500,
				easing: 'linear.none'
			},
			setTimeline: {
				delay: 2000,
				onComplete() {
					this.replay();
				}
			}
		};
	},
	mounted() {
		if (!this.isMobile) {
			const
				banner = document.querySelector('#banner'),
				shared = {
					parent: banner
				},
				mo = [
					this.setCircle,
					this.setLine
				],
				ratio = 720 / 1280;

			for (let set of mo) {
				Object.assign(set, shared);
			}

			let
				getPixel = (/** percentage */ delX, delY) => {
					let hypot = Math.sqrt(Math.pow(delX, 2) + Math.pow(delY * ratio, 2));

					return window.innerWidth * 0.86 * hypot / 100;
				},

				getAngle = (x, y) => {
					return Math.atan(y * ratio / x) * 180 / Math.PI;
				},

				createLines = (start, end, isToRight, startColorRatio, delay) => {
					if (!start.tween || !end.tween) return;

					const
						start_top = parseFloat(start.tween._o.top),
						start_left = parseFloat(start.tween._o.left),
						end_top = parseFloat(end.tween._o.top),
						end_left = parseFloat(end.tween._o.left),
						mid_top = start_top * (1 - startColorRatio) + end_top * startColorRatio,
						mid_left = start_left * (1 - startColorRatio) + end_left * startColorRatio;

					let
						startDashOffset = isToRight ? { '100%' : '0' } : { '-100%' : '0' },
						endDashOffset = isToRight ? { '0' : '-100%' } : { '0' : '100%' },
						l_start = new mojs.Shape({
							...this.setLine,
							top: ( start_top + mid_top ) / 2 + '%',
							left: ( start_left + mid_left ) / 2 + '%',
							radiusX: getPixel( mid_left - start_left, mid_top - start_top ) / 2,
							angle: getAngle( mid_left - start_left, mid_top - start_top ),
							stroke: start.tween._o.fill,
							strokeDashoffset: startDashOffset,
							delay: delay
						}).then({
							delay: 500, // line grow duration in setLine
							strokeDashoffset: endDashOffset,
							duration: 500,
							easing: 'linear.none'
						}),

						l_end = new mojs.Shape({
							...this.setLine,
							top: ( mid_top + end_top ) / 2 + '%',
							left: ( mid_left + end_left ) / 2 + '%',
							radiusX: getPixel( end_left - mid_left, end_top - mid_top ) / 2,
							angle: getAngle( end_left - mid_left, end_top - mid_top ),
							stroke: end.tween._o.fill,
							strokeDashoffset: startDashOffset,
							delay: delay + 500 // start line grow duration in setLine
						}).then({
							delay: 500, // end line grow duration in setLine
							strokeDashoffset: endDashOffset,
							duration: 500,
							easing: 'linear.none'
						});

					return [ l_start, l_end ];
				};

			const
				/* Define trinagles */

				// Top-right triangle
				c1 = new mojs.Shape({
					...this.setCircle,
					top: '11%',
					left: '70%',
					radius: { 0 : 10 },
					fill: this.colors.lightGreen,
				}).then({
					// 0.4s for other circles to grow
					// 0.1s delay
					// 2s for line from self to disappear
					// 0.6s for line to self to disappear
					// 0.1s delay
					delay: 3200,
					radius: { 10 : 0 },
					duration: 1000
				}),

				c2 = new mojs.Shape({
					...this.setCircle,
					top: '31%',
					left: '90%',
					radius: { 0 : 15 },
					fill: this.colors.darkGreen,
					delay: 200
				}).then({
					delay: 3200,
					radius: { 15 : 0 },
					duration: 1000
				}),

				c3 = new mojs.Shape({
					...this.setCircle,
					top: '30%',
					left: '73%',
					radius: { 0 : 10 },
					fill: this.colors.yellow,
					delay: 400
				}).then({
					delay: 3200,
					radius: { 10 : 0 },
					duration: 1000
				}),

				triangleTopRight = [
					c1, c2, c3,
					...createLines(c1, c2, true, 0.65, 1500), // 1.4s for all circles to grow, 0.1s delay
					...createLines(c2, c3, false, 0.15, 1800), // 0.3s delay
					...createLines(c3, c1, false, 0.4, 2100), // 0.3s delay
				],

				// Bottom-right triangle
				c4 = new mojs.Shape({
					...this.setCircle,
					top: '81%',
					left: '72%',
					radius: { 0 : 10 },
					fill: this.colors.darkGreen,
				}).then({
					delay: 3200,
					radius: { 10 : 0 },
					duration: 1000
				}),

				c5 = new mojs.Shape({
					...this.setCircle,
					top: '98%',
					left: '69%',
					radius: { 0 : 8 },
					fill: this.colors.orange,
					delay: 200
				}).then({
					delay: 3200,
					radius: { 8 : 0 },
					duration: 1000
				}),

				c6 = new mojs.Shape({
					...this.setCircle,
					top: '89%',
					left: '55%',
					radius: { 0 : 8 },
					fill: this.colors.yellow,
					delay: 400
				}).then({
					delay: 3200,
					radius: { 8 : 0 },
					duration: 1000
				}),

				triangleBottomRight = [
					c4, c5, c6,
					...createLines(c4, c6, false, 0.65, 1500),
					...createLines(c6, c5, true, 0.15, 1800),
					...createLines(c5, c4, true, 0.4, 2100),
				],

				// Top-left triangle
				c7 = new mojs.Shape({
					...this.setCircle,
					top: '11%',
					left: '25%',
					radius: { 0 : 7 },
					fill: this.colors.darkGreen,
				}).then({
					delay: 3200,
					radius: { 7 : 0 },
					duration: 1000
				}),

				c8 = new mojs.Shape({
					...this.setCircle,
					top: '28%',
					left: '14%',
					radius: { 0 : 8 },
					fill: this.colors.yellow,
					delay: 200
				}).then({
					delay: 3200,
					radius: { 8 : 0 },
					duration: 1000
				}),

				c9 = new mojs.Shape({
					...this.setCircle,
					top: '16%',
					left: '8%',
					radius: { 0 : 12 },
					fill: this.colors.lightGreen,
					delay: 400
				}).then({
					delay: 3200,
					radius: { 12 : 0 },
					duration: 1000
				}),

				triangleTopLeft = [
					c7, c8, c9,
					...createLines(c7, c8, false, 0.65, 1500),
					...createLines(c8, c9, false, 0.15, 1800),
					...createLines(c9, c7, true, 0.4, 2100),
				],

				/* Define alone dots */

				c10 = new mojs.Shape({
					...this.setCircle,
					top: '9%',
					left: '83%',
					radius: { 0 : 7 },
					fill: this.colors.lightGreen,
					delay: 'rand(0, 2000)'
				}).then({
					delay: 'rand(1000, 2000)',
					radius: { 7 : 0 },
					duration: 1000
				}),

				c11 = new mojs.Shape({
					...this.setCircle,
					top: '29%',
					left: '96%',
					radius: { 0 : 7 },
					fill: this.colors.lightGreen,
					delay: 'rand(0, 2000)'
				}).then({
					delay: 'rand(1000, 2000)',
					radius: { 7 : 0 },
					duration: 1000
				}),

				c12 = new mojs.Shape({
					...this.setCircle,
					top: '21%',
					left: '62%',
					radius: { 0 : 5 },
					fill: this.colors.yellow,
					delay: 'rand(0, 2000)'
				}).then({
					delay: 'rand(1000, 2000)',
					radius: { 5 : 0 },
					duration: 1000
				}),

				c13 = new mojs.Shape({
					...this.setCircle,
					top: '79%',
					left: '92%',
					radius: { 0 : 6 },
					fill: this.colors.lightGreen,
					delay: 'rand(0, 2000)'
				}).then({
					delay: 'rand(1000, 2000)',
					radius: { 6 : 0 },
					duration: 1000
				}),

				c14 = new mojs.Shape({
					...this.setCircle,
					top: '85%',
					left: '78%',
					radius: { 0 : 5 },
					fill: this.colors.yellow,
					delay: 'rand(0, 2000)'
				}).then({
					delay: 'rand(1000, 2000)',
					radius: { 5 : 0 },
					duration: 1000
				}),

				c15 = new mojs.Shape({
					...this.setCircle,
					top: '84%',
					left: '41%',
					radius: { 0 : 7 },
					fill: this.colors.lightGreen,
					delay: 'rand(0, 2000)'
				}).then({
					delay: 'rand(1000, 2000)',
					radius: { 7 : 0 },
					duration: 1000
				}),

				c16 = new mojs.Shape({
					...this.setCircle,
					top: '81%',
					left: '13%',
					radius: { 0 : 5 },
					fill: this.colors.orange,
					delay: 'rand(0, 2000)'
				}).then({
					delay: 'rand(1000, 2000)',
					radius: { 5 : 0 },
					duration: 1000
				}),

				c17 = new mojs.Shape({
					...this.setCircle,
					top: '12%',
					left: '14%',
					radius: { 0 : 4 },
					fill: this.colors.lightGreen,
					delay: 'rand(0, 2000)'
				}).then({
					delay: 'rand(1000, 2000)',
					radius: { 4 : 0 },
					duration: 1000
				}),

				c18 = new mojs.Shape({
					...this.setCircle,
					top: '22%',
					left: '20%',
					radius: { 0 : 3 },
					fill: this.colors.orange,
					delay: 'rand(0, 2000)'
				}).then({
					delay: 'rand(1000, 2000)',
					radius: { 3 : 0 },
					duration: 1000
				}),

				c19 = new mojs.Shape({
					...this.setCircle,
					top: '12%',
					left: '37%',
					radius: { 0 : 7 },
					fill: this.colors.orange,
					delay: 'rand(0, 2000)'
				}).then({
					delay: 'rand(1000, 2000)',
					radius: { 7 : 0 },
					duration: 1000
				}),

				dots = [
					c10, c11, c12, c13, c14,
					c15, c16, c17, c18, c19
				],

				timeline = new mojs.Timeline({
					...this.setTimeline
				});

				timeline.add(
					...triangleTopRight,
					...triangleBottomRight,
					...triangleTopLeft,
					...dots
				).play();
		}
	}
}
</script>

<style lang="sass" scoped>
	#banner
		position: relative
		width: 86%
		height: 48.375vw // 720 / 1280 * 100 * 0.86
		padding: 0
		background-color: $black
		overflow: hidden

		#title
			z-index: 1

		.slogan
			color: $white
			font-weight: 300
			letter-spacing: 0.5em
			white-space: nowrap
</style>
