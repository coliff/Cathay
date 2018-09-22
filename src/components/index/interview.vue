<template>
	<b-container fluid id="interview" class="py-5">
		<b-row>
			<b-col>
				<h1 class="title mt-2 mb-0 py-5">
					關於面試會
				</h1>
				<h5 class="title mb-3">
					臺中場 ( 國泰人壽 ) 面試時間 2018 年 11 月 3 日 ( 星期六 )<br>
					臺北場面試時間 2018 年 11 月 17 日 ( 星期六 )
				</h5>
			</b-col>
		</b-row>
		<b-row class="py-5">
			<b-col cols="8" offset="2" xl="6" offset-xl="3">
				<b-media>
					<picture slot="aside">
						<source srcset="@/assets/img/icon/4_interact.svg">
						<img src="@/assets/img/icon/4_interact.png" class="mr-5 icon" alt="深度交流活動">
					</picture>
					<h3 class="subtitle py-2">
						深度交流活動
					</h3>
					<p class="content">
						與國泰主管一對一交流
						<br>
						IT 前輩 OB 經驗分享
					</p>
				</b-media>
			</b-col>
		</b-row>
		<b-row class="py-5">
			<b-col cols="8" offset="2" xl="6" offset-xl="3">
				<b-media>
					<picture slot="aside">
						<source srcset="@/assets/img/icon/4_interview.svg">
						<img src="@/assets/img/icon/4_interview.png" class="mr-5 icon" alt="團體面試">
					</picture>
					<h3 class="subtitle py-2">
						團體面試
					</h3>
					<p class="content">
						將視應徵人數安排不同梯次
						<br>
						與單位主管 / 部室主管面談
					</p>
				</b-media>
			</b-col>
		</b-row>
		<b-row class="py-5">
			<b-col cols="8" offset="2" xl="6" offset-xl="3">
				<b-media>
					<picture slot="aside">
						<source srcset="@/assets/img/icon/4_pass.svg">
						<img src="@/assets/img/icon/4_pass.png" class="mr-5 icon" alt="聘用錄取通知">
					</picture>
					<h3 class="subtitle py-2">
						聘用錄取通知
					</h3>
					<p class="content">
						當天會以電話、簡訊和 email 通知
						<br>
						會再另約時間詳談
						<br>
						薪酬細節和工作地點等事項
					</p>
				</b-media>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: 'Interview'
}
</script>

<style lang="sass" scoped>
	#interview
		background-color: $white

		.title,
		.subtitle,
		.content
			color: $black
			font-family: PingFangTC-Regular, Heiti TC, Meiryo, "微軟正黑體", Microsoft JhengHei, "標楷體", DFKai-sb
			letter-spacing: 0.1em

		.title
			text-align: center

		.content
			font-size: 1.25em

		.icon
			width: 200px
</style>
