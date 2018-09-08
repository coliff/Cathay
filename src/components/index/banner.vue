<template>
	<b-container fluid id="banner">
		<b-row align-h="center" align-v="center" class="h-100">
			<b-col cols="6" id="title">
				<img src="@/assets/img/ITs-Time.png" class="w-100 d-block" alt="IT's Time">
				<h4 class="py-4 slogan">
					國泰資訊人才招募計畫
				</h4>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import mojs from 'mo-js';

export default {
	name: 'Banner',
	data: function() {
		return {
			colors: {
				black: '#383635',
				white: '#f2f2f2',
				darkGreen: '#2fae4d',
				lightGreen: '#85c044',
				orange: '#f0aa3a',
				yellow: '#f2da30',
			},
			circle: {
			    shape: 'circle',
			    className: 'circle',
			    duration: 1200,
			},
			timeline: {
				onComplete() {
					this.replay();
				}
			}
		};
	},
	mounted: function() {
		const banner = document.querySelector('#banner');

		const circle1 = new mojs.Shape({
			...this.circle,
			parent: banner,
			top: '15%',
			left: '75%',
			radius: { 0 : 10 },
			fill: this.colors.lightGreen,
		});

		const circle2 = new mojs.Shape({
			...this.circle,
			parent: banner,
			top: '31%',
			left: '94%',
			radius: { 0 : 15 },
			fill: this.colors.darkGreen,
			delay: 200
		});

		const circle3 = new mojs.Shape({
			...this.circle,
			parent: banner,
			top: '30%',
			left: '77%',
			radius: { 0 : 10 },
			fill: this.colors.yellow,
			delay: 400
		});

		const triangleTopRight = new mojs.Timeline({
			...this.timeline
		});

		triangleTopRight.add([
			circle1,
			circle2,
			circle3,
			// line1,
			// line2,
			// line3
		]).play();
	}
}
</script>

<style lang="sass" scoped>
	#banner
		position: relative
		width: 86%
		height: 100vh
		background-color: $black
		overflow: hidden

		#title
			z-index: 1

		.slogan
			color: $white
			font-weight: 300
			letter-spacing: 0.5em
</style>
