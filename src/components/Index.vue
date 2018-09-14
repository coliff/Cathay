<template>
	<b-container fluid id="index" class="no-padding">
		<Nav></Nav>
		<Banner></Banner>
		<ToJobs></ToJobs>
		<Intro></Intro>
		<Welfare></Welfare>
		<ToOB></ToOB>
		<Schedule></Schedule>
		<Interview></Interview>
		<Resume></Resume>
		<Footer></Footer>
	</b-container>
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
import Resume from '@/components/index/resume';
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
		Resume,
		Footer
	}
};
</script>

<style lang="sass" scoped>
	#index
		background-color: $black
</style>
