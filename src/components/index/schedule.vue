<template>
	<b-container fluid id="schedule" class="py-5">
		<b-row>
			<b-col>
				<h1 class="title py-3">
					履歷投遞截止日期
				</h1>
				<h2 class="subtitle py-3">
					臺中場（人壽職缺）最後投遞日為 10/14；<br>
					臺北場最後投遞日為 10/28。
				</h2>
				<h1 class="title py-5">
					招聘流程
				</h1>
				<img src="@/assets/img/timeline_3.png" id="schedule_img" alt="招募流程"><br>
				<br><br>
				活動當天發放錄取通知書<br>
				<br><br>
				<img src="@/assets/img/schedule_design.png" id="schedule_design" alt="招募流程">
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: 'Schedule'
}
</script>

<style lang="sass" scoped>
	#schedule
		background-color: $black
		text-align: center
		color: $white
		font-size: 20px
		letter-spacing: 1px

		.title,
		.subtitle,
		.content
			font-family: PingFangTC-Regular, Heiti TC, Meiryo, "微軟正黑體", Microsoft JhengHei, "標楷體", DFKai-sb
			letter-spacing: 0.15em

		.title
			color: $white

		.subtitle
			color: $dark-green
			font-size: 20px

		#schedule_img
			width: 400px
			margin-left: 130px

		#schedule_design
			position: absolute
			width: 90%
			left: 5%
			bottom: 0

		/* 確認時間後再顯示 */
		.title:first-child,
		.subtitle
			/*display: none*/
</style>
