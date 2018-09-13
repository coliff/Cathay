<template>
	<b-container fluid id="welfare" class="py-5">
		<b-row>
			<b-col>
				<h1 class="title mt-2 py-5">
					四大亮點與集團福利
				</h1>
			</b-col>
		</b-row>
		<b-row class="my-5 px-5">
			<b-col>
				<h5 class="dark-green subtitle">
					<span class="hightlight">
						4
					</span>
					間公司
				</h5>
				<picture>
					<source srcset="@/assets/img/icon/1_experience.svg">
					<img src="@/assets/img/icon/1_experience.png" class="d-block w-50 mx-auto py-4" alt="最貼心的面試體驗">
				</picture>
				<h5 class="subtitle py-3">
					最貼心的面試體驗
				</h5>
				<p class="content">
					一份履歷可面試四間公司
					<br>
					當天收到結果回覆
				</p>
			</b-col>
			<b-col>
				<h5 class="orange subtitle">
					<span class="hightlight">
						50
					</span>
					萬起
				</h5>
				<picture>
					<source srcset="@/assets/img/icon/1_money.svg">
					<img src="@/assets/img/icon/1_money.png" class="d-block w-50 mx-auto py-4" alt="具競爭力的薪酬與福利">
				</picture>
				<h5 class="subtitle py-3">
					具競爭力的薪酬與福利
				</h5>
				<p class="content">
					新鮮人保障年薪 50 萬起
					<br>
					各事業單位另有獎勵
				</p>
			</b-col>
			<b-col>
				<h5 class="light-green subtitle">
					<span class="hightlight">
						IT
					</span>
					主管
				</h5>
				<picture>
					<source srcset="@/assets/img/icon/1_boss.svg">
					<img src="@/assets/img/icon/1_boss.png" class="d-block w-50 mx-auto py-4" alt="第一手的職場交流">
				</picture>
				<h5 class="subtitle py-3">
					第一手的職場交流
				</h5>
				<p class="content">
					面試當天可與國泰 IT 主管
					<br>
					前輩面對面請益交流
				</p>
			</b-col>
			<b-col>
				<h5 class="yellow subtitle">
					<span class="hightlight">
						3
					</span>
					個月給薪培訓
				</h5>
				<picture>
					<source srcset="@/assets/img/icon/1_training.svg">
					<img src="@/assets/img/icon/1_training.png" class="d-block w-50 mx-auto py-4" alt="完善的培訓與升遷制度">
				</picture>
				<h5 class="subtitle py-3">
					完善的培訓與升遷制度
				</h5>
				<p class="content">
					到職後三個月給薪培訓
					<br>
					表現好則有機會升遷
				</p>
			</b-col>
		</b-row>
		<b-container fluid id="benefits">
			<b-row class="px-5 py-4">
				<b-col>
					<picture>
						<source srcset="@/assets/img/icon/2_teaching.svg">
						<img src="@/assets/img/icon/2_teaching.png" class="d-block w-50 mx-auto py-4" alt="定期教育訓練">
					</picture>
					<p class="content py-3">
						定期教育訓練
					</p>
				</b-col>
				<b-col>
					<picture>
						<source srcset="@/assets/img/icon/2_health.svg">
						<img src="@/assets/img/icon/2_health.png" class="d-block w-50 mx-auto py-4" alt="定期員工健康檢查">
					</picture>
					<p class="content py-3">
						定期員工健康檢查
					</p>
				</b-col>
				<b-col>
					<picture>
						<source srcset="@/assets/img/icon/2_travel.svg">
						<img src="@/assets/img/icon/2_travel.png" class="d-block w-50 mx-auto py-4" alt="員工學習與旅遊補助">
					</picture>
					<p class="content py-3">
						員工學習與旅遊補助
					</p>
				</b-col>
			</b-row>
			<b-row class="px-5 py-4">
				<b-col>
					<picture>
						<source srcset="@/assets/img/icon/2_money.svg">
						<img src="@/assets/img/icon/2_money.png" class="d-block w-50 mx-auto py-4" alt="年節福利與生日禮金">
					</picture>
					<p class="content py-3">
						年節福利與生日禮金
					</p>
				</b-col>
				<b-col>
					<picture>
						<source srcset="@/assets/img/icon/2_good.svg">
						<img src="@/assets/img/icon/2_good.png" class="d-block w-50 mx-auto py-4" alt="關係企業商品服務員工優惠">
					</picture>
					<p class="content py-3">
						關係企業商品服務員工優惠
					</p>
				</b-col>
				<b-col>
					<picture>
						<source srcset="@/assets/img/icon/2_speech.svg">
						<img src="@/assets/img/icon/2_speech.png" class="d-block w-50 mx-auto py-4" alt="社團活動與集團名人講座">
					</picture>
					<p class="content py-3">
						社團活動與集團名人講座
					</p>
				</b-col>
			</b-row>
		</b-container>
	</b-container>
</template>

<script>
export default {
	name: 'Welfare'
}
</script>

<style lang="sass" scoped>
	#welfare
		background-color: $black

		.title,
		.subtitle,
		.content
			color: $white
			text-align: center

		.title,
		.content
			letter-spacing: 0.15em

		.title
			position: relative
			&::before
				content: '\2022\00B7\00B7\00B7\00B7\00B7\00B7\00B7\00B7\00B7\2022'
				position: absolute
				top: -0.5em
				left: 50%
				transform: translateX(-50%)
				color: $light-green
				font-size: 0.5em


		.subtitle
			letter-spacing: 0.1em
			&.dark-green
				color: $dark-green
			&.orange
				color: $orange
			&.light-green
				color: $light-green
			&.yellow
				color: $yellow

		.hightlight
			font-size: 2.5em

		#benefits
			width: 80%
			.row:not(:first-child)
				border-top: 4px $light-green dotted
			.col:not(:first-child)
				border-left: 4px $light-green dotted

</style>
