<template>
	<b-container fluid id="resume">
		<b-row>
			<b-col>
				<b-link to="/resume">
					<img src="@/assets/img/resume.png" class="d-block mx-auto" alt="履歷投遞">
				</b-link>
				<br><br><br>
				<div id="contact">
					優秀的您還在等什麼？<br>
					國泰提供一個能讓您大顯身手的舞台<br>
					誠摯邀請懷抱熱情的 IT 人與我們一同大放異彩<br>
					加入國泰，就是現在！<br>
				</div>
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
	#resume
		background-color: $black
		padding: 100px 0px

		#contact
			text-align: center
			color: $white
			line-height: 28px

		img
			width: 40%

</style>
