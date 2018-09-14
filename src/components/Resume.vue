<template>
	<b-container fluid id="resume" class="no-padding">
		<Nav></Nav>
		<img class="w-50" id="visual" src="@/assets/img/resume_design.png">
		<b-container fluid>
			<b-container fluid id="banner" class="my-4">
				<h1 class="pt-4 large title">IT's Time</h1>
				<h1 class="pb-4 title">履歷撰寫</h1>
				<p class="content">
					優秀的您還在等什麼？<br>
					國泰提供一個能讓您大顯身手的舞台<br>
					誠摯邀請懷抱熱情的 IT 人與我們一同大放異彩<br>
					加入國泰，就是現在！
				</p>
			</b-container>
			<b-container fluid class="pb-5" id="info">
				<form id="resume-form" @submit.prevent="submitForm">
					<BasicInfo class="pt-5"
						:errmsg="errmsg"
						:range="range">
					</BasicInfo>
					<Personal class="pt-5"
						:errmsg="errmsg"
						:range="range">
					</Personal>
					<Education class="pt-5"
						:errmsg="errmsg"
						:range="range">
					</Education>
					<Experience class="pt-5"
						:errmsg="errmsg"
						:range="range">
					</Experience>
					<Portfolio class="pt-5"
						:errmsg="errmsg">
					</Portfolio>
					<b-button type="submit" class="d-block mx-auto mt-5" id="submit">送出</b-button>
				</form>
			</b-container>
		</b-container>
	</b-container>
</template>

<script>
import Nav from '@/components/nav';
import BasicInfo from '@/components/resume-form/basicInfo';
import Personal from '@/components/resume-form/personal';
import Education from '@/components/resume-form/education';
import Experience from '@/components/resume-form/experience';
import Portfolio from '@/components/resume-form/portfolio';

export default {
	name: 'Resume',
	data() {
		return {
			errmsg: {}
		}
	},
	components: {
		Nav,
		BasicInfo,
		Personal,
		Education,
		Experience,
		Portfolio
	},
	methods: {
		range: (start, end) => {
			let span = end - start + 1;
			return [...Array(span).keys()].map(m => start + m);
		},
		submitForm: async function(e) {
			// Input 資料：e.targrt[index].value
			// 上傳檔案：e.target[index].files[index2]
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

			data["birthday"] = data["byear"] + (data["bmonth"].length < 2 ? '0' : '') + data["bmonth"] + (data["bdate"].length < 2 ? '0' : '') + data["bdate"];
			delete data["byear"];
			delete data["bmonth"];
			delete data["bdate"];

			data["address"] = data["city"] + data["district"] + data["address"];
			delete data["city"];
			delete data["district"];

			data = JSON.stringify(data);
			
			form_data.append('resume', data);
			form_data.append('file', resume, resume.name);

			response = await this.$http.post('/ittime/upload', form_data, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}).catch((err) => {
				if (err.response) {
					console.log(err.response.status);
					console.log(err.response.data);
					// this.errmsg = ...
				}
			});
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

	#banner
		color: $darker-green-text

	.large
		font-size: 3.5rem

	.title
		margin: 0
		letter-spacing: 0.4rem

	.content
		font-size: 1.25rem

	#submit
		border: none
		border-radius: 1.2em
		padding: 0.3em 2.2em
		background-color: $light-green-text
		font-size: 2rem
		letter-spacing: 0.2em
</style>
