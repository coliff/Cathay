import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Jobs from '@/components/Jobs';
import Thank from '@/components/Thank';
import Resume from '@/components/Resume';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			component: Index
		},
		{
			path: '/jobs',
			component: Jobs
		},
		{
			path: '/resume',
			component: Resume
		},
		{
			path: '/thanks',
			component: Thank
		}
	],
	scrollBehavior (to, from, savedPosition) {
		if (to.hash) {
			return {
				selector: to.hash
			}
		} else if (savedPosition) {
			return savedPosition
		} else {
			return { x: 0, y: 0 }
		}
	}
});
