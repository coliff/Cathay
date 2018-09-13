import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Jobs from '@/components/Jobs';
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
		}
	]
});
