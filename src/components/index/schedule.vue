<template>
	<b-container fluid id="schedule" class="py-5">
		<b-row>
			<b-col>
				<h1 class="title py-3">
					申請時間
				</h1>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<h2 class="subtitle py-3">
					即日起至 7 月 25 號
				</h2>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<h1 class="title py-5">
					招聘流程
				</h1>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<img src="https://via.placeholder.com/500x700" alt="招募流程">
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
	@import '@/assets/css/global.scss'

	#schedule
		background-color: $black
		text-align: center

		.title,
		.subtitle,
		.content
			font-family: PingFangTC-Regular, Heiti TC, Meiryo, "微軟正黑體", Microsoft JhengHei, "標楷體", DFKai-sb
			letter-spacing: 0.15em

		.title
			color: $white

		.subtitle
			color: $dark-green
</style>
