<template>
	<b-container fluid id="banner">
		<b-row v-if="supportSVG && (!isMobile)" align-h="center" align-v="center" class="h-100">
			<b-col cols="6" id="title">
				<picture>
					<source type="image/webp" srcset="@/assets/img/ITs-Time.webp">
					<img src="@/assets/img/ITs-Time.png" class="w-100 d-block" alt="IT's Time">
				</picture>
				<h4 class="py-4 slogan">
					國泰資訊人才招募計畫
				</h4>
			</b-col>
		</b-row>
		<picture v-else>
			<source type="image/webp" srcset="@/assets/img/banner-mobile.webp">
			<img src="@/assets/img/banner-mobile.png" class="w-100 d-block" alt="IT's Time 國泰資訊人才招募計畫">
		</picture>
	</b-container>
</template>

<script>
import SVG from 'svg.js';
import mojs from 'mo-js';
import custom from '@/assets/js/custom-shapes.config';

export default {
	name: 'Banner',
	data() {
		return {
			isMobile: window.innerWidth < 800,
			supportSVG: SVG.supported
		};
	},
	mounted() {
		if (this.supportSVG && !this.isMobile) {
			// Register mojs shape
			mojs.addShape('arc', custom.Arc);
			mojs.addShape('arc-dotted', custom.ArcDotted);
			mojs.addShape('arc-half', custom.ArcHalf);

			const
				banner = document.querySelector('#banner'),
				shared = {
					parent: banner
				};

			for (let shape in custom.shapes) {
				Object.assign(custom.shapes[shape], shared);
			}

			/* Define shapes, mostly in clockwise order */
			const
				/* Define trinagles */

				// Top-right triangle
				c1 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '11%',
					left: '70%',
					radius: { 0 : 10 },
					fill: custom.colors.lightGreen,
					delay: 2500
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
					...custom.shapes.setCircle,
					top: '31%',
					left: '90%',
					radius: { 0 : 15 },
					fill: custom.colors.darkGreen,
					delay: 2700
				}).then({
					delay: 3200,
					radius: { 15 : 0 },
					duration: 1000
				}),

				c3 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '30%',
					left: '73%',
					radius: { 0 : 10 },
					fill: custom.colors.yellow,
					delay: 2900
				}).then({
					delay: 3200,
					radius: { 10 : 0 },
					duration: 1000
				}),

				triangleTopRight = [
					c1, c2, c3,
					...custom.createLines(c1, c2, 0.65, 4000), // 2.5s delay, 1.4s for all circles to grow, 0.1s delay
					...custom.createLines(c2, c3, 0.15, 4300), // 0.3s delay
					...custom.createLines(c3, c1, 0.4, 4600), // 0.3s delay
				],

				// Bottom-right triangle
				c4 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '81%',
					left: '72%',
					radius: { 0 : 10 },
					fill: custom.colors.darkGreen,
					delay: 1200
				}).then({
					delay: 3200,
					radius: { 10 : 0 },
					duration: 1000
				}),

				c5 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '98%',
					left: '69%',
					radius: { 0 : 8 },
					fill: custom.colors.orange,
					delay: 1400
				}).then({
					delay: 3200,
					radius: { 8 : 0 },
					duration: 1000
				}),

				c6 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '89%',
					left: '55%',
					radius: { 0 : 8 },
					fill: custom.colors.yellow,
					delay: 1600
				}).then({
					delay: 3200,
					radius: { 8 : 0 },
					duration: 1000
				}),

				triangleBottomRight = [
					c4, c5, c6,
					...custom.createLines(c4, c6, 0.68, 2700),
					...custom.createLines(c6, c5, 0.72, 3000),
					...custom.createLines(c5, c4, 0.55, 3300),
				],

				// Top-left triangle
				c7 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '11%',
					left: '25%',
					radius: { 0 : 7 },
					fill: custom.colors.darkGreen,
				}).then({
					delay: 3200,
					radius: { 7 : 0 },
					duration: 1000
				}),

				c8 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '28%',
					left: '14%',
					radius: { 0 : 8 },
					fill: custom.colors.yellow,
					delay: 200
				}).then({
					delay: 3200,
					radius: { 8 : 0 },
					duration: 1000
				}),

				c9 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '16%',
					left: '8%',
					radius: { 0 : 12 },
					fill: custom.colors.lightGreen,
					delay: 400
				}).then({
					delay: 3200,
					radius: { 12 : 0 },
					duration: 1000
				}),

				triangleTopLeft = [
					c7, c8, c9,
					...custom.createLines(c7, c8, 0.76, 1500),
					...custom.createLines(c8, c9, 0.85, 1800),
					...custom.createLines(c9, c7, 0.66, 2100),
				],

				/* Define alone circles */

				c10 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '9%',
					left: '83%',
					radius: { 0 : 7 },
					fill: custom.colors.lightGreen,
					delay: 'rand(0, 2000)'
				}).then({
					...custom.then.setAloneCircles,
					radius: { 7 : 0 }
				}),

				c11 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '29%',
					left: '96%',
					radius: { 0 : 7 },
					fill: custom.colors.lightGreen,
					delay: 'rand(0, 2000)'
				}).then({
					...custom.then.setAloneCircles,
					radius: { 7 : 0 }
				}),

				c12 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '21%',
					left: '62%',
					radius: { 0 : 5 },
					fill: custom.colors.yellow,
					delay: 'rand(0, 2000)'
				}).then({
					...custom.then.setAloneCircles,
					radius: { 5 : 0 }
				}),

				c13 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '79%',
					left: '92%',
					radius: { 0 : 6 },
					fill: custom.colors.lightGreen,
					delay: 'rand(0, 2000)'
				}).then({
					...custom.then.setAloneCircles,
					radius: { 6 : 0 }
				}),

				c14 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '85%',
					left: '78%',
					radius: { 0 : 5 },
					fill: custom.colors.yellow,
					delay: 'rand(0, 2000)'
				}).then({
					...custom.then.setAloneCircles,
					radius: { 5 : 0 }
				}),

				c15 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '84%',
					left: '41%',
					radius: { 0 : 7 },
					fill: custom.colors.lightGreen,
					delay: 'rand(0, 2000)'
				}).then({
					...custom.then.setAloneCircles,
					radius: { 7 : 0 }
				}),

				c16 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '81%',
					left: '13%',
					radius: { 0 : 5 },
					fill: custom.colors.orange,
					delay: 'rand(0, 2000)'
				}).then({
					...custom.then.setAloneCircles,
					radius: { 5 : 0 }
				}),

				c17 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '12%',
					left: '14%',
					radius: { 0 : 4 },
					fill: custom.colors.lightGreen,
					delay: 'rand(0, 2000)'
				}).then({
					...custom.then.setAloneCircles,
					radius: { 4 : 0 }
				}),

				c18 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '22%',
					left: '20%',
					radius: { 0 : 3 },
					fill: custom.colors.orange,
					delay: 'rand(0, 2000)'
				}).then({
					...custom.then.setAloneCircles,
					radius: { 3 : 0 }
				}),

				c19 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '12%',
					left: '37%',
					radius: { 0 : 7 },
					fill: custom.colors.orange,
					delay: 'rand(0, 2000)'
				}).then({
					...custom.then.setAloneCircles,
					radius: { 7 : 0 }
				}),

				aloneCircles = [
					c10, c11, c12, c13, c14,
					c15, c16, c17, c18, c19
				],

				/* Define sticks */

				c20 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '66%',
					left: '99%',
					radius: { 0 : 5 },
					fill: custom.colors.orange,
					delay: 1500
				}).then({
					...custom.then.setSticks,
					radius: { 5 : 0 }
				}),

				c21 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '65%',
					left: '95%',
					radius: { 0 : 8 },
					fill: custom.colors.darkGreen,
					delay: 1700
				}).then({
					...custom.then.setSticks,
					radius: { 8 : 0 }
				}),

				c22 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '67%',
					left: '84%',
					radius: { 0 : 4 },
					fill: custom.colors.orange
				}).then({
					...custom.then.setSticks,
					radius: { 4 : 0 }
				}),

				c23 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '63%',
					left: '80%',
					radius: { 0 : 3 },
					fill: custom.colors.darkGreen,
					delay: 200
				}).then({
					...custom.then.setSticks,
					radius: { 3 : 0 }
				}),

				c24 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '64%',
					left: '60%',
					radius: { 0 : 5 },
					fill: custom.colors.yellow,
					delay: 700
				}).then({
					...custom.then.setSticks,
					radius: { 5 : 0 }
				}),

				c25 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '72%',
					left: '54%',
					radius: { 0 : 5 },
					fill: custom.colors.orange,
					delay: 900
				}).then({
					...custom.then.setSticks,
					radius: { 5 : 0 }
				}),

				c26 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '98%',
					left: '30%',
					radius: { 0 : 5 },
					fill: custom.colors.orange,
					delay: 1600
				}).then({
					...custom.then.setSticks,
					radius: { 5 : 0 }
				}),

				c27 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '88%',
					left: '30%',
					radius: { 0 : 5 },
					fill: custom.colors.yellow,
					delay: 1800
				}).then({
					...custom.then.setSticks,
					radius: { 5 : 0 }
				}),

				c28 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '85%',
					left: '20%',
					radius: { 0 : 4 },
					fill: custom.colors.orange,
					delay: 400
				}).then({
					...custom.then.setSticks,
					radius: { 4 : 0 }
				}),

				c29 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '77%',
					left: '30%',
					radius: { 0 : 8 },
					fill: custom.colors.darkGreen,
					delay: 600
				}).then({
					...custom.then.setSticks,
					radius: { 8 : 0 }
				}),

				c30 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '97%',
					left: '8%',
					radius: { 0 : 5 },
					fill: custom.colors.orange,
					delay: 700
				}).then({
					...custom.then.setSticks,
					radius: { 5 : 0 }
				}),

				c31 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '95%',
					left: '11%',
					radius: { 0 : 10 },
					fill: custom.colors.darkGreen,
					delay: 900
				}).then({
					...custom.then.setSticks,
					radius: { 10 : 0 }
				}),

				c32 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '87%',
					left: '7%',
					radius: { 0 : 4 },
					fill: custom.colors.darkGreen,
					delay: 2400
				}).then({
					...custom.then.setSticks,
					radius: { 4 : 0 }
				}),

				c33 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '82%',
					left: '1%',
					radius: { 0 : 6 },
					fill: custom.colors.lightGreen,
					delay: 2200
				}).then({
					...custom.then.setSticks,
					radius: { 6 : 0 }
				}),

				c34 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '89%',
					left: '2%',
					radius: { 0 : 1 },
					fill: custom.colors.lightGreen,
					delay: 2000
				}).then({
					...custom.then.setSticks,
					radius: { 1 : 0 }
				}),

				c35 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '76%',
					left: '6%',
					radius: { 0 : 12 },
					fill: custom.colors.darkGreen,
				}).then({
					...custom.then.setSticks,
					radius: { 12 : 0 }
				}),

				c36 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '59%',
					left: '9%',
					radius: { 0 : 4 },
					fill: custom.colors.orange,
					delay: 200
				}).then({
					...custom.then.setSticks,
					radius: { 4 : 0 }
				}),

				c37 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '24%',
					left: '1%',
					radius: { 0 : 5 },
					fill: custom.colors.darkGreen,
					delay: 700
				}).then({
					...custom.then.setSticks,
					radius: { 5 : 0 }
				}),

				c38 = new mojs.Shape({
					...custom.shapes.setCircle,
					top: '35%',
					left: '5%',
					radius: { 0 : 7 },
					fill: custom.colors.yellow,
					delay: 900
				}).then({
					...custom.then.setSticks,
					radius: { 7 : 0 }
				}),

				sticks = [
					c20, c21,
					...custom.createLines(c20, c21, 0.8, 2300),
					c22, c23,
					...custom.createLines(c22, c23, 0.2, 1300),
					c24, c25,
					...custom.createLines(c24, c25, 0.8, 1600),
					c26, c27,
					...custom.createLines(c26, c27, 0.15, 1900),
					c28, c29,
					...custom.createLines(c28, c29, 0.15, 1700),
					c30, c31,
					...custom.createLines(c30, c31, 0.8, 1800),
					c32, c33, c34,
					...custom.createLines(c34, c33, 0.15, 3700),
					...custom.createLines(c33, c32, 0.4, 4000),
					c35, c36,
					...custom.createLines(c35, c36, 0.15, 1300),
					c37, c38,
					...custom.createLines(c37, c38, 0.5, 2000)
				],

				/* Define arcs */

				a1 = new mojs.Shape({
					shape: 'arc-dotted',
					...custom.shapes.setArc,
					left: '89%',
					top: '48%',
					stroke: custom.colors.lightGreen,
					angle: 120,
					delay: 1200
				}).then({
					...custom.then.setArc
				}),

				a2 = new mojs.Shape({
					shape: 'arc-dotted',
					...custom.shapes.setArc,
					left: '89%',
					top: '92%',
					stroke: custom.colors.lightGreen,
					angle: 130,
					scale: 1.2,
					delay: 2300
				}).then({
					...custom.then.setArc
				}),

				a3 = new mojs.Shape({
					shape: 'arc-dotted',
					...custom.shapes.setArc,
					left: '52%',
					top: '8%',
					stroke: custom.colors.lightGreen,
					angle: 130,
					scale: 1.4,
					delay: 900,
					duration: 1700
				}).then({
					...custom.then.setArc,
					duration: 2500
				}),

				a4 = new mojs.Shape({
					shape: 'arc-half',
					...custom.shapes.setArc,
					left: '38%',
					top: '98%',
					stroke: custom.colors.yellow,
					angle: 250,
					scale: 0.8,
					delay: 4000
				}).then({
					...custom.then.setArc
				}),

				a5 = new mojs.Shape({
					shape: 'arc',
					...custom.shapes.setArc,
					left: '22%',
					top: '62%',
					stroke: custom.colors.lightGreen,
					strokeWidth: 4,
					strokeDasharray: '100%',
					angle: 200,
					scale: 0.6,
					delay: 2800
				}).then({
					...custom.then.setArc
				}),

				arcs = [
					a1, a2, a3, a4, a5
				],

				/* Timelines for each kind of shapes */

				tlTriangles = new mojs.Timeline({
					...custom.setTimeline,
					delay: 2000
				}),

				tlAloneCircles = new mojs.Timeline({
					...custom.setTimeline
				}),

				tlSticks = new mojs.Timeline({
					...custom.setTimeline,
					delay: 600
				}),

				tlArcs = new mojs.Timeline({
					...custom.setTimeline
				});

				/* Mojs player */

				tlTriangles.add(
					...triangleTopRight,
					...triangleBottomRight,
					...triangleTopLeft
				).play();

				tlAloneCircles.add(...aloneCircles).play();

				tlSticks.add(...sticks).play();

				tlArcs.add(...arcs).play();
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
