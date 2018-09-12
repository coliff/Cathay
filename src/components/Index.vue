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
		<Footer></Footer>
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
import Footer from '@/components/index/Footer';

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
		Interview,
		Footer
	}
};
</script>

<style lang="sass" scoped>
	#index
		background-color: $black
</style>
