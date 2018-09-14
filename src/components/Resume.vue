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
					<!-- 基本資料 -->
					<BasicInfo class="pt-5"
						:errmsg="errmsg"
						:range="range">
					</BasicInfo>
					<!-- 應徵明細 -->
					<Personal class="pt-5"
						:errmsg="errmsg"
						:range="range">
					</Personal>
					<!-- 教育背景 -->
					<h2 class="mt-4 mb-1 title">教育背景</h2>
					<Education class="pt-4"
						:errmsg="errmsg"
						:range="range"
						count="1">
					</Education>
					<Education class="pt-4"
						:errmsg="errmsg"
						:range="range"
						count="2"
						v-show="educationCount > 1">
					</Education>
					<Education class="pt-4"
						:errmsg="errmsg"
						:range="range"
						count="3"
						v-show="educationCount > 2">
					</Education>
					<Education class="pt-4"
						:errmsg="errmsg"
						:range="range"
						count="4"
						v-show="educationCount > 3">
					</Education>
					<Education class="pt-4"
						:errmsg="errmsg"
						:range="range"
						count="5"
						v-show="educationCount > 4">
					</Education>
					<b-row class="my-3">
						<b-col md="4">
							<b-button id="addEducation"
								variant="outline-success"
								@click="addEducation">
								<svg class="add" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
									<path d="M3 0v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z" />
								</svg>
								新增教育背景
							</b-button>
							<span>其他 {{ 5 - educationCount }} 項</span>
						</b-col>
					</b-row>
					<!-- 過往經歷 -->
					<Experience class="pt-5"
						:errmsg="errmsg"
						:range="range">
					</Experience>
					<!-- 過往作品 -->
					<Portfolio class="pt-5"
						:errmsg="errmsg">
					</Portfolio>
					<b-button type="submit"
						class="d-block mx-auto mt-5"
						id="submit">
						送出
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
import Education from '@/components/resume-form/resume-components/education';
import Experience from '@/components/resume-form/experience';
import Portfolio from '@/components/resume-form/portfolio';

export default {
	name: 'Resume',
	data() {
		return {
			errmsg: {},
			educationCount: 1
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
			if (end >= start) {
				let span = end - start + 1;
				return [...Array(span).keys()].map(m => start + m);
			} else {
				let span = start - end + 1;
				return [...Array(span).fill(start)].map((m, i) => m - i);
			}
		},
		addEducation: function() {
			if (this.educationCount < 5) this.educationCount++;
		},
		submitForm: async function(e) {
			// Input 資料：e.targrt[index].value
			// 上傳檔案：e.target[index].files[index2]
			let data = {},
				photo,
				resume,
				form_data = new FormData(),
				response;

			for(const raw_data of e.target) {
				if (raw_data.files) {
					if (raw_data.files[0].type === "application/pdf") {
						resume = raw_data.files[0];
					} else if (raw_data.files[0].type.indexOf('image') > -1) {
						photo = raw_data.files[0];
					}
				} else if (raw_data.name === 'infoSource' && raw_data.checked) {
					data[raw_data.name] = raw_data.value;
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

			data["onDutyDate"] = data["wyear"] + (data["wmonth"].length < 2 ? '0' : '') + data["wmonth"] + (data["wdate"].length < 2 ? '0' : '') + data["wdate"];
			delete data["wyear"];
			delete data["wmonth"];
			delete data["wdate"];

			data["expectedPositions"] = [];
			for (let i = 1; i < 6; i++) {
				let d = data["expectedPosition" + i];
				if (d) {
					data["expectedPositions"].push(d);
					delete data["expectedPosition" + i];
				}
			}

			data["educations"] = [];
			for (let i = 1; i < 6; i++) {
				let d = {},
					attr = ['degree', 'graduation', 'schoolName', 'major', 'syear', 'smonth', 'eyear', 'emonth'];
				for (a of attr) {
					let attr_name = a + i;
					if (data[attr_name]) {
						d[a] = data[attr_name];
						delete data[attr_name];
					}
				}

				let e, s;
				if (data['syear' + i] && data['smonth' + i]) {
					s = data['syear' + i] + (data["smonth" + i].length < 2 ? '0' : '') + data['smonth' + i];
					delete data['syear' + i];
					delete data['smonth' + i];
				}
				if (data['eyear' + i] && data['emonth' + i]) {
					e = data['eyear' + i] + (data["emonth" + i].length < 2 ? '0' : '') + data['emonth' + i];

					delete data['eyear' + i];
					delete data['emonth' + i];
				}
				if (s && e) {
					d["studyPeriod"] = { s, e };
				}
				data["educations"].push(d);
			}

			data["clubs"] = [];
			for (let i = 1; i < 6; i++) {
				let d = {},
					attr = ['clubName', 'cposition', 'csyear', 'csmonth', 'ceyear', 'cemonth'];
				for (a of attr) {
					let attr_name = a + i;
					if (data[attr_name]) {
						d[a] = data[attr_name];
						delete data[attr_name];
					}
				}

				let e, s;
				if (data['csyear' + i] && data['csmonth' + i]) {
					s = data['csyear' + i] + (data["csmonth" + i].length < 2 ? '0' : '') + data['csmonth' + i];
					delete data['csyear' + i];
					delete data['csmonth' + i];
				}
				if (data['ceyear' + i] && data['cemonth' + i]) {
					e = data['ceyear' + i] + (data["cemonth" + i].length < 2 ? '0' : '') + data['cemonth' + i];

					delete data['ceyear' + i];
					delete data['cemonth' + i];
				}
				if (s && e) {
					d["period"] = { s, e };
				}
				data["clubs"].push(d);
			}

			data["jobs"] = [];
			for (let i = 1; i < 6; i++) {
				let d = {},
					attr = ['type', 'companyName', 'department', 'wposition', 'jobContent', 'wsyear', 'wsmonth', 'weyear', 'wemonth', 'resignReason', 'pay'];
				for (a of attr) {
					let attr_name = a + i;
					if (data[attr_name]) {
						d[a] = data[attr_name];
						delete data[attr_name];
					}
				}

				let e, s;
				if (data['wsyear' + i] && data['wsmonth' + i]) {
					s = data['wsyear' + i] + (data["wsmonth" + i].length < 2 ? '0' : '') + data['wsmonth' + i];
					delete data['wsyear' + i];
					delete data['wsmonth' + i];
				}
				if (data['weyear' + i] && data['wemonth' + i]) {
					e = data['weyear' + i] + (data["wemonth" + i].length < 2 ? '0' : '') + data['wemonth' + i];

					delete data['weyear' + i];
					delete data['wemonth' + i];
				}
				if (s && e) {
					d["period"] = { s, e };
				}
				data["clubs"].push(d);
			}

			data["professionalSkills"] = [];
			for (let i = 1; i < 6; i++) {
				let d = data["professionalSkill" + i];
				if (d) {
					data["professionalSkills"].push(d);
					delete data["professionalSkill" + i];
				}
			}

			data["languageSkills"] = [];
			for (let i = 1; i < 6; i++) {
				let d = data["languageSkill" + i];
				if (d) {
					data["languageSkills"].push(d);
					delete data["languageSkill" + i];
				}
			}

			data = JSON.stringify(data);

			console.log(data);

			form_data.append('photo', data);
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

	.large
		font-size: 3.5rem

	#banner > .title
		margin: 0
		letter-spacing: 0.4rem

	.content
		color: $darker-green-text

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
