<template>
	<b-container fluid id="to-jobs">
		<b-row>
			<b-col>
				<br><br>
					<img src="@/assets/img/topic.png" class="d-block mx-auto py-5" alt="職缺一覽">
				<br><br>
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

		.title
			color: $white
			text-align: center

		img
			width: 20%;
</style>
