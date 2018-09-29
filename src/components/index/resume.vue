<template>
	<b-container fluid id="resume">
		<b-row>
			<b-col>
				<b-link to="/resume">
					<img src="@/assets/img/resume.png" class="d-block mx-auto" alt="履歷投遞">
				</b-link>
				<br>
				<div id="remark">
					【註一】建議可事先備妥客製化自傳 / 履歷 / 作品集，以及個人近照，以節省您履歷填寫的時間<br>
					【註二】請勿重覆投遞履歷
				</div>
				<br><br><br>
				<div id="now">
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
	name: 'IndexResume'
}
</script>

<style lang="sass" scoped>
	#resume
		background-color: $black
		padding: 100px 0px

		#remark
			text-align: center
			color: $white
			font-size: 14px
			font-weight: bold
			opacity: 0.5

		#now
			text-align: center
			color: $white
			line-height: 28px

		img
			width: 40%

</style>
