<template>
	<b-container fluid id="schedule" class="py-5">
		<b-row>
			<b-col>
				<h1 class="title py-3">
					履歷投遞截止日期
				</h1>
				<h2 class="updated subtitle py-2">
					考量臺中場報名截止後，仍有不少轉職者來信詢問，故將臺北場截止時間延後至 11/4（23:59）；
				</h2>
				<h2 class="subtitle py-2">
					歡迎有志到金融產業發展、加入國泰戰隊的您，把握今年最後一波集團面試機會！
				</h2>
				<h1 class="title py-5">
					招聘流程
				</h1>
				<picture>
					<source type="image/webp" srcset="@/assets/img/timeline_3.webp">
					<img src="@/assets/img/timeline_3.png" id="schedule_img" alt="招募流程">
				</picture>
				<br><br><br>
				活動當天發放錄取通知書
				<br><br><br>
				<picture>
					<source type="image/webp" srcset="@/assets/img/schedule_design.webp">
					<img src="@/assets/img/schedule_design.png" id="schedule_design" alt="邊邊工作室設計">
				</picture>
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
			color: #33ff33
			font-size: 20px
			&.updated
				color: $yellow

		#schedule_img
			width: 400px
			margin-left: 130px

		#schedule_design
			position: absolute
			width: 90%
			left: 5%
			bottom: 0

</style>
