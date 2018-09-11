const
	ratio = 720 / 1280,
	colors = {
		black: '#383635',
		white: '#f2f2f2',
		darkGreen: '#2fae4d',
		lightGreen: '#85c044',
		orange: '#f0aa3a',
		yellow: '#f2da30',
	},
	shapes = {
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
		setArc: {
			className: 'mo-custom-arc',
			fill: 'none',
			strokeDashoffset: { '100%' : 0 },
			opacity: { 0 : 1 },
			easing: 'linear.none',
			duration: 2000
		}
	},
	setTimeline = {
		onComplete() {
			this.replay();
		}
	},
	then = {
		setAloneCircles: {
			delay: 'rand(2000, 4000)',
			duration: 'rand(1500, 2000)'
		},
		setSticks: {
			delay: 2200,
			duration: 1000
		},
		setArc: {
			strokeDashoffset: { '200%' : '100%' },
			opacity: { 1 : 0 },
			easing: 'linear.none',
			duration: 2000
		}
	},
	getPixel = function(delX, delY) {
		let hypot = Math.sqrt(Math.pow(delX, 2) + Math.pow(delY * ratio, 2));
		return window.innerWidth * 0.86 * hypot / 100;
	},
	getAngle = function(x, y) {
		return Math.atan(y * ratio / x) * 180 / Math.PI;
	},
	createLines = function(start, end, startColorRatio, delay) {
		if (!start.tween || !end.tween) return;

		const
			start_top = parseFloat(start.tween._o.top),
			start_left = parseFloat(start.tween._o.left),
			end_top = parseFloat(end.tween._o.top),
			end_left = parseFloat(end.tween._o.left),
			mid_top = start_top * (1 - startColorRatio) + end_top * startColorRatio,
			mid_left = start_left * (1 - startColorRatio) + end_left * startColorRatio,

			isToRight = (end_left - start_left >= 0),
			startDashoffset = isToRight ? { '100%' : '0' } : { '100%' : '200%' },
			endDashoffset = isToRight ? { '200%' : '100%' } : { '0' : '100%' },

			l_start = new mojs.Shape({
				...shapes.setLine,
				top: ( start_top + mid_top ) / 2 + '%',
				left: ( start_left + mid_left ) / 2 + '%',
				radiusX: getPixel( mid_left - start_left, mid_top - start_top ) / 2,
				angle: getAngle( mid_left - start_left, mid_top - start_top ),
				stroke: start.tween._o.fill,
				strokeDashoffset: startDashoffset,
				delay: delay
			}).then({
				delay: 500, // line grow duration in setLine
				strokeDashoffset: endDashoffset,
				duration: 500,
				easing: 'linear.none'
			}),

			l_end = new mojs.Shape({
				...shapes.setLine,
				top: ( mid_top + end_top ) / 2 + '%',
				left: ( mid_left + end_left ) / 2 + '%',
				radiusX: getPixel( end_left - mid_left, end_top - mid_top ) / 2,
				angle: getAngle( end_left - mid_left, end_top - mid_top ),
				stroke: end.tween._o.fill,
				strokeDashoffset: startDashoffset,
				delay: delay + 500 // start line grow duration in setLine
			}).then({
				delay: 500, // end line grow duration in setLine
				strokeDashoffset: endDashoffset,
				duration: 500,
				easing: 'linear.none'
			});

		return [ l_start, l_end ];
	},
	polarToCartesian = function(centerX, centerY, radius, angle) {
		const a = (angle - 90) * Math.PI / 180.0;
		return {
			x: centerX + radius * Math.cos(a),
			y: centerY + radius * Math.sin(a),
		};
	},
	depictArc = function(x, y, radius, startAngle, endAngle) {
		const
			start = polarToCartesian(x, y, radius, endAngle - 0.01),
			end = polarToCartesian(x, y, radius, startAngle),
			arcSweep = (endAngle - startAngle) <= 180 ? '0' : '1',

			d = [
				'M', start.x, start.y,
				'A', radius, radius, 0, arcSweep, 0, end.x, end.y,
			],
			fullCircle = endAngle - startAngle === 360;

		if(fullCircle) d.push('z');
		return d.join(' ');
	};

class Arc extends mojs.CustomShape {
	getShape() {
		return `<path d="${depictArc(50, 50, 50, 0, 40)}"></path>`;
	}
}

class ArcDotted extends mojs.CustomShape {
	getShape() {
		return `<path stroke-dasharray="5,5" d="${depictArc(50, 50, 50, 0, 60)}"></path>`;
	}
}

class ArcHalf extends mojs.CustomShape {
	getShape() {
		return `<path stroke-dasharray="5,5" d="${depictArc(50, 50, 50, 0, 180)}"></path>`;
	}
}

export default {
	name: 'custom',
	colors,
	shapes,
	setTimeline,
	then,
	createLines,
	Arc,
	ArcDotted,
	ArcHalf
};
