<template>
	<div id="index">
		<Nav></Nav>
		<Banner></Banner>
	</div>
</template>

<script>
import Nav from '@/components/nav';
import Banner from '@/components/banner';

export default {
	name: 'Index',
	components: {
		Nav,
		Banner
	}
};
</script>

<style lang="sass" scoped>
	@import '@/assets/css/global.scss'

	#index
		background-color: $black
</style>
