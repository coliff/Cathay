<template>
	<b-container fluid id="to-jobs">
		<b-row>
			<b-col class="py-5">
				<b-link to="/jobs">
					<img src="@/assets/img/topic.png" class="d-block mx-auto py-5" alt="職缺一覽">
				</b-link>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>


export default {
	name: 'ToJobs'
}

</script>

<style lang="sass" scoped>
	#to-jobs
		background-color: $black

		img
			width: 20%
			min-width: 200px
</style>
