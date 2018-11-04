<template>
	<b-container fluid id="resume" class="no-padding">
		<Nav></Nav>
		<b-container fluid id="cover">
			<b-row align-v="center">
				<b-col>
					<picture>
						<source type="image/webp" srcset="/ittime/static/cathay.webp">
						<img class="my-2" src="/ittime/static/cathay.png" alt="IT's Time">
					</picture>
					<h3 class="my-2">資料處理中</h3>
				</b-col>
			</b-row>
		</b-container>
		<picture>
			<source type="image/webp" srcset="@/assets/img/resume_design.webp">
			<img class="w-50" id="visual" src="@/assets/img/resume_design.png" alt="邊邊工作室設計">
		</picture>
		<b-container fluid>
			<b-container fluid id="banner" class="my-4">
				<h1 class="pt-4 large title">IT's Time</h1>
				<h1 class="pb-4 title">履歷撰寫</h1>
				<p class="content">
					優秀的您還在等什麼？<br>
					國泰提供一個能讓您大顯身手的舞台<br>
					誠摯邀請懷抱熱情的 IT 人與我們一同大放異彩<br>
					加入國泰，就是現在！<br>
					<br>
					【註一】建議可事先備妥客製化自傳 / 履歷 / 作品集，以及個人近照，以節省您履歷填寫的時間<br>
					【註二】請勿重覆投遞履歷
				</p>
			</b-container>
			<b-container fluid id="note" class="py-3">
				<p>
					{{closedMsg}}
				</p>
			</b-container>
			<b-container fluid id="info" class="pb-5">
				<form id="resume-form" @submit.prevent="submitForm">
					<!-- 基本資料 -->
					<BasicInfo class="pt-4"
						:errmsg="errmsg"
						:range="range">
					</BasicInfo>
					<!-- 應徵明細 -->
					<Personal class="pt-4"
						:range="range">
					</Personal>
					<!-- 教育背景 -->
					<Educations class="pt-4"
						:range="range">
					</Educations>
					<!-- 過往經歷 -->
					<Experience class="pt-4"
						:range="range">
					</Experience>
					<!-- 過往作品 -->
					<Portfolio class="pt-4"
						:errmsg="errmsg">
					</Portfolio>
					<b-button type="submit"
						class="d-block mx-auto mt-5"
						id="submit"
						disabled>
						已截止
					</b-button>
				</form>
			</b-container>
		</b-container>
	</b-container>
</template>

<script>
import Nav from '@/components/nav';
import BasicInfo from '@/components/resume-form/basicInfo';
import Personal from '@/components/resume-form/personal';
import Educations from '@/components/resume-form/educations';
import Experience from '@/components/resume-form/experience';
import Portfolio from '@/components/resume-form/portfolio';
export default {
	name: 'Resume',
	data() {
		return {
			errmsg: {},
			closedMsg: "感謝您對本計畫的支持，目前「IT's Time 國泰資訊人才招募計畫」的報名已截止。然而，國泰金控對於招募資訊人才的熱情絕不會終止，您仍可搜尋各公司官網的人才招募進行投遞。"
		}
	},
	components: {
		Nav,
		BasicInfo,
		Personal,
		Educations,
		Experience,
		Portfolio
	},
	methods: {
		range: function(start, end) {
			if (end >= start) {
				let span = end - start + 1;
				return [...Array(span).keys()].map(m => start + m);
			} else {
				let span = start - end + 1;
				return [...Array(span).fill(start)].map((m, i) => m - i);
			}
		},
		submitForm: function(e) {
			alert(this.closedMsg);
		}
	}
}
</script>

<style lang="sass" scoped>
	#resume
		position: relative
		background-color: $white;
		& > .container-fluid
			padding: 0 10vw
		#visual
			position: absolute
			margin-left: 35%
		#cover
			display: none
			position: fixed
			width: 100vw
			height: 100vh
			background-color: rgba(255, 255, 255, 0.5)
			z-index: 10
			& > .row
				height: 100%
				text-align: center
			img
				max-width: 120px
		&.covered > #cover
			display: block
	.large
		font-size: 3.5rem
	#banner > .title
		margin: 0
		letter-spacing: 0.4rem
	.content
		color: $darker-green-text
		font-size: 1.25rem
	#note
		margin: 0 15px
		padding-left: 2em
		padding-right: 2em
		border:
			style: solid
			width: 0.1em
			color: $darker-green-text
		color: $darker-green-text
		p
			margin: 0
	#submit
		border: none
		border-radius: 1.2em
		padding: 0.3em 2.2em
		background-color: $orange
		font-size: 2rem
		letter-spacing: 0.2em
</style>
