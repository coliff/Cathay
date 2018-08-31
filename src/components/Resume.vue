<template>
	<div id="resume">
		<Nav></Nav>
		<b-container fluid id="banner" class="my-4">
			<h1>IT's Time</h1>
			<h1>履歷填寫</h1>
			<p>
				優秀的您還在等什麼？
				國泰提供一個能讓您大顯身手的舞台
				誠摯邀請懷抱熱情的 IT 人與我們一同大放異彩
				加入國泰，就是現在！
			</p>
		</b-container>
		<b-container id="info">
			<form id="resume-form" v-on:submit.prevent="submitForm" method="post">
				<BasicInfo></BasicInfo>
				<ResumeUpload></ResumeUpload>
				<b-button type="submit" id="submit">送出</b-button>
			</form>
		</b-container>
	</div>
</template>

<script>
import Nav from '@/components/nav';
import BasicInfo from '@/components/resume-form/basicInfo';
import ResumeUpload from '@/components/resume-form/resumeUpload';

export default {
	name: 'Resume',
	components: {
		Nav,
		BasicInfo,
		ResumeUpload
	},
	methods: {
		submitForm: function(e) {
			console.log(this);
		}
	}
}
</script>

<style lang="sass" scoped>
	@import '@/assets/css/global.scss'

	#info
		width: 86%
</style>
