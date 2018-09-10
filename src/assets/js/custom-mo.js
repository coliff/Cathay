export default {
	name: 'custom',
	ratio: 720 / 1280,
	colors: {
		black: '#383635',
		white: '#f2f2f2',
		darkGreen: '#2fae4d',
		lightGreen: '#85c044',
		orange: '#f0aa3a',
		yellow: '#f2da30',
	},
	shapes: {
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
	},
	setTimeline: {
		onComplete() {
			this.replay();
		}
	},
	then: {
		setAloneCircles: {
			delay: 'rand(2000, 4000)',
			duration: 'rand(1500, 2000)'
		},
		setSticks: {
			delay: 2200,
			duration: 1000
		},
	},
	getPixel: function(delX, delY) {
		let hypot = Math.sqrt(Math.pow(delX, 2) + Math.pow(delY * this.ratio, 2));
		return window.innerWidth * 0.86 * hypot / 100;
	},
	getAngle: function(x, y) {
		return Math.atan(y * this.ratio / x) * 180 / Math.PI;
	},
	createLines: function(start, end, startColorRatio, delay) {
		if (!start.tween || !end.tween) return;

		const
			start_top = parseFloat(start.tween._o.top),
			start_left = parseFloat(start.tween._o.left),
			end_top = parseFloat(end.tween._o.top),
			end_left = parseFloat(end.tween._o.left),
			mid_top = start_top * (1 - startColorRatio) + end_top * startColorRatio,
			mid_left = start_left * (1 - startColorRatio) + end_left * startColorRatio,

			isToRight = (end_left - start_left >= 0),
			startDashOffset = isToRight ? { '100%' : '0' } : { '100%' : '200%' },
			endDashOffset = isToRight ? { '200%' : '100%' } : { '0' : '100%' },

			l_start = new mojs.Shape({
				...this.shapes.setLine,
				top: ( start_top + mid_top ) / 2 + '%',
				left: ( start_left + mid_left ) / 2 + '%',
				radiusX: this.getPixel( mid_left - start_left, mid_top - start_top ) / 2,
				angle: this.getAngle( mid_left - start_left, mid_top - start_top ),
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
				...this.shapes.setLine,
				top: ( mid_top + end_top ) / 2 + '%',
				left: ( mid_left + end_left ) / 2 + '%',
				radiusX: this.getPixel( end_left - mid_left, end_top - mid_top ) / 2,
				angle: this.getAngle( end_left - mid_left, end_top - mid_top ),
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
	}
};
