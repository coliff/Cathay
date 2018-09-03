<template>
	<div id="index">
		<Nav></Nav>
		<Banner></Banner>
		<ToJobs></ToJobs>
		<Intro></Intro>
		<Welfare></Welfare>
		<ToOB></ToOB>
		<Schedule></Schedule>
		<Interview></Interview>
	</div>
</template>

<script>
import Nav from '@/components/nav';
import Banner from '@/components/index/banner';
import ToJobs from '@/components/index/toJobs';
import Intro from '@/components/index/intro';
import Welfare from '@/components/index/welfare';
import ToOB from '@/components/index/toOB';
import Schedule from '@/components/index/schedule';
import Interview from '@/components/index/interview';

export default {
	name: 'Index',
	components: {
		Nav,
		Banner,
		ToJobs,
		Intro,
		Welfare,
		ToOB,
		Schedule,
		Interview
	}
};
</script>

<style lang="sass" scoped>
	@import '@/assets/css/global.scss'

	#index
		background-color: $black
</style>
