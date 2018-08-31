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
		// Input 資料：e.targrt[index].value
		// 上傳檔案：e.target[index].files[index2]
		submitForm: async function(e) {
			let data = {},
				resume,
				form_data = new FormData(),
				response;
			for(let raw_data of e.target) {
				if (raw_data.files) {
					resume = raw_data.files[0];
				} else if (raw_data.value) {
					data[raw_data.name] = raw_data.value;
				}
			};
			data = JSON.stringify(data);

			form_data.append('resume', resume, resume.name);
			form_data.append('data', data);

			response = await this.$axios.post('/ittime/upload', form_data, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}).catch((err) => {
				// error handling
				console.log(err);
			});
		}
	}
}
</script>

<style lang="sass" scoped>
	@import '@/assets/css/global.scss'

	#info
		width: 86%
</style>
