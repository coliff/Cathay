<template>
	<b-container fluid id="interview" class="py-5">
		<b-row>
			<b-col>
				<h1 class="title mt-2 mb-5 py-5">
					關於面試會
				</h1>
			</b-col>
		</b-row>
		<b-row class="py-5">
			<b-col cols="8" offset="2" xl="4" offset-xl="4">
				<b-media>
					<img slot="aside" src="https://via.placeholder.com/200x200" class="mr-5" alt="深度交流活動">
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
			<b-col cols="8" offset="2" xl="4" offset-xl="4">
				<b-media>
					<img slot="aside" src="https://via.placeholder.com/200x200" class="mr-5" alt="60 分鐘面試">
					<h3 class="subtitle py-2">
						60 分鐘面試
					</h3>
					<p class="content">
						（三位共用 60 分鐘）
					</p>
					<p class="content">
						單位主管 / 部室主管面試
						<br>
						一間會同時面試三位
					</p>
				</b-media>
			</b-col>
		</b-row>
		<b-row class="py-5">
			<b-col cols="8" offset="2" xl="4" offset-xl="4">
				<b-media>
					<img slot="aside" src="https://via.placeholder.com/200x200" class="mr-5" alt="聘用錄取通知">
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
	@import '@/assets/css/global.scss'

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
</style>
