<template>
	<b-container fluid>
		<Nav></Nav>
		<b-container fluid id="jobs">
			<div class="title">
				<h2>所有職缺</h2>
				<h5>若對我們職缺有興趣，請點選“立即填寫履歷”！</h5>
			</div>
			<div v-for="job in jobs" class="job">
				<h4>{{ job.title }}<span>（預計招募 {{ job.available }} 人）</span></h4>
				<h5>{{ job.companies }}</h5>
				<div class="btn">立即填寫履歷</div>
				<div class="line"></div>
				<div class="content">
					工作說明：<br>
					<ul>
						<li v-for="resp in job.responsibilities">
							{{ resp }}
						</li>
					</ul>
					<br>
					<br>
					職位要求：<br>
					<ul>
						<li v-for="qual in job.qualifications">
							{{ qual }}
						</li>
					</ul>
				</div>
			</div>
		</b-container>
	</b-container>
</template>

<script>
import Nav from '@/components/nav';

export default {
	name: 'Jobs',
	components: {
		Nav
	},
	data() {
		return {
			jobs: [
				{
					title: '客服系統整合工程師',
					available: '2',
					companies: '國泰人壽 / 國泰產險',
					responsibilities: [
						'客服中心(Contact Center)資訊系統及電話語音系統之規劃、開發與維運。',
						'客服資通訊科技之應用研究及導入評估。'
					],
					qualifications: [
						'具IP網路、語音通訊、客戶服務相關系統開發經驗者尤佳。',
						'無相關經驗但有意願學習客服系統(含交換機,IVR)相關知識技能者亦可。',
						'具Java EE、HTML、JavaScript、Java等開發經驗者尤佳。'
					]
				},
				{
					title: '資料工程師',
					available: '1',
					companies: '國泰證券',
					responsibilities: [
						'異質資料庫數據整合。',
						'數據分析、應用之相關程式(C#或VB.Net或Python)開發。',
						'資料庫SQL語法開發。',
						'協助企劃、行銷團隊進行數據分析。'
					],
					qualifications: [
						'熟T-SQL語法及Stored Procedure開發。',
						'熟MS SQL Server SSIS開發。',
						'有C#或ASP.Net、Python等程式語言經驗者尤佳。',
						'了解證券、期貨等金融商品交易流程尤佳。',
						'5.二年以上程式設計及專案開發經驗。'
					]
				}
			]
		}
	}
}
</script>

<style lang="sass" scoped>

	#jobs
		padding: 100px 10vw
		color: $black

		h4
			span
				font-size: 16px

		ul
			li
				list-style: decimal

			ul
				li
					list-style: lower-alpha


		.title
			text-align: center

		.job
			padding-top: 100px

		.line
			height: 3px
			background: $black
			margin: 30px 0

		.btn
			position: absolute
			right: 0px
			margin-right: 10vw
			background: $green
			width: 110px
			height: 30px
			margin-top: -50px
			color: $white
			font-size: 14px
			line-height: 16px
			text-align: center

</style>
