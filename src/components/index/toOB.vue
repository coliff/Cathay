<template>
	<b-container fluid id="to-ob">
		<b-row>
			<b-col>
				<h1 class="title mt-2 py-5">
					OB 分享
				</h1>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: 'ToOB'
}
</script>

<style lang="sass" scoped>
	@import '@/assets/css/global.scss'

	#to-ob
		background-color: $white

		.title
			color: $dark-green
			text-align: center
</style>
