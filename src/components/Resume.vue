<template>
	<b-container fluid id="resume" class="no-padding">
		<b-container fluid id="cover">
			<b-row align-v="center">
				<b-col>
					<img class="my-2" src="static/cathay.png" alt="IT's Time">
					<h3 class="my-2">資料處理中</h3>
				</b-col>
			</b-row>
		</b-container>
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
import Educations from '@/components/resume-form/educations';
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
		setPeriod: function(d_syear, d_smonth, d_eyear, d_emonth) {
			let start, end;
			if (d_syear && d_smonth) {
				start = d_syear + (d_smonth.length < 2 ? '0' : '') + d_smonth;
			}
			if (d_eyear && d_emonth) {
				end = d_eyear + (d_emonth.length < 2 ? '0' : '') + d_emonth;
			}
			if (start && end)
				return {start, end};
			else
				return null;
		},
		setBirthday: function(data) {
			data["birthday"] =
				data["byear"] +
				(data["bmonth"].length < 2 ? '0' : '') + data["bmonth"] +
				(data["bdate"].length < 2 ? '0' : '') + data["bdate"];
			delete data["byear"];
			delete data["bmonth"];
			delete data["bdate"];
			return data;
		},
		setAddress: function(data) {
			if (!(data["city"] && data["district"] && data["address"])) {
				return data;
			}

			data["address"] = data["city"] + data["district"] + data["address"];
			delete data["city"];
			delete data["district"];
			return data;
		},
		setOnDutyDate: function(data) {
			if (!(data["wyear"] && data["wmonth"] && data["wdate"])) {
				return data;
			}

			data["onDutyDate"] = data["wyear"] + (data["wmonth"].length < 2 ? '0' : '') + data["wmonth"] + (data["wdate"].length < 2 ? '0' : '') + data["wdate"];
			delete data["wyear"];
			delete data["wmonth"];
			delete data["wdate"];
			return data;
		},
		setExpectedPositions: function(data) {
			data["expectedPositions"] = [];
			for (let i = 1; i < 6; i++) {
				let d = data["expectedPositions" + i];
				if (d) {
					data["expectedPositions"].push(d);
					delete data["expectedPositions" + i];
				}
			}
			return data;
		},
		setEducations: function (data) {
			data["educations"] = [];
			for (let i = 1; i < 6; i++) {
				let d = {},
					attr = ['degree', 'graduation', 'schoolName', 'major', 'syear', 'smonth', 'eyear', 'emonth'],
					syear = 'syear',
					smonth = 'smonth',
					eyear = 'eyear',
					emonth = 'emonth';

				for (let a of attr) {
					let attr_name = a + i;
					if (data[attr_name]) {
						d[a] = data[attr_name];
						delete data[attr_name];
					}
				}

				if (d[syear] && d[smonth] && d[eyear] && d[emonth]) {
					let period = this.setPeriod(d[syear], d[smonth], d[eyear], d[emonth]);
					delete d[syear];
					delete d[smonth];
					delete d[eyear];
					delete d[emonth];
					if (period) {
						d["period"] = period;
					}
				}
				data["educations"].push(d);
			}
			return data;
		},
		setClubs: function(data) {
			data["clubs"] = [];
			for (let i = 1; i < 6; i++) {
				let d = {},
					attr = ['clubName', 'cposition', 'csyear', 'csmonth', 'ceyear', 'cemonth'],
					syear = 'csyear',
					smonth = 'csmonth',
					eyear = 'ceyear',
					emonth = 'cemonth';
				for (let a of attr) {
					let attr_name = a + i;
					if (data[attr_name]) {
						d[a] = data[attr_name];
						delete data[attr_name];
					}
				}

				if (d[syear] && d[smonth] && d[eyear] && d[emonth]) {
					let period = this.setPeriod(d[syear], d[smonth], d[eyear], d[emonth]);
					delete d[syear];
					delete d[smonth];
					delete d[eyear];
					delete d[emonth];
					if (period) {
						d["period"] = period;
					}
				}
				data["clubs"].push(d);
			}
			return data;
		},
		setJobs: function(data) {
			data["jobs"] = [];
			for (let i = 1; i < 6; i++) {
				let d = {},
					attr = ['type', 'companyName', 'department', 'wposition', 'jobContent', 'wsyear', 'wsmonth', 'weyear', 'wemonth', 'resignReason', 'pay'],
					syear = 'wsyear',
					smonth = 'wsmonth',
					eyear = 'weyear',
					emonth = 'wemonth';
				for (let a of attr) {
					let attr_name = a + i;
					if (data[attr_name]) {
						d[a] = data[attr_name];
						delete data[attr_name];
					}
				}

				if (d[syear] && d[smonth] && d[eyear] && d[emonth]) {
					let period = this.setPeriod(d[syear], d[smonth], d[eyear], d[emonth]);
					delete d[syear];
					delete d[smonth];
					delete d[eyear];
					delete d[emonth];
					if (period) {
						d["period"] = period;
					}
				}
				data["jobs"].push(d);
			}
			return data;
		},
		setProfessionalSkills: function(data) {
			data["professionalSkills"] = [];
			for (let i = 1; i < 6; i++) {
				let d = data["professionalSkills" + i];
				if (d) {
					data["professionalSkills"].push(d);
					delete data["professionalSkills" + i];
				}
			}
			return data;
		},
		setLanguageSkills: function(data) {
			data["languageSkills"] = [];
			for (let i = 1; i < 6; i++) {
				let d = data["languageSkills" + i];
				if (d) {
					data["languageSkills"].push(d);
					delete data["languageSkills" + i];
				}
			}
			return data;
		},
		process: function (data) {
			data = this.setBirthday(data);
			data = this.setAddress(data);
			data = this.setOnDutyDate(data);
			data = this.setExpectedPositions(data);
			data = this.setEducations(data);
			data = this.setClubs(data);
			data = this.setJobs(data);
			data = this.setProfessionalSkills(data);
			data = this.setLanguageSkills(data);

			return data;
		},
		getForm: function(data) {
			if (!data) return;
			let form_data = new FormData();

			if (data["photo"]) {
				form_data.append('photo', data["photo"]);
				delete data["photo"];
			}

			if (data["resume"]) {
				form_data.append('file', data["resume"]);
				delete data["resume"];
			}

			data = JSON.stringify(data);
			form_data.append('resume', data);
			return form_data;
		},
		submitForm: async function(e) {
			// prevent default submit behavior
			// as we define our action (axios post api) here
			let page = document.getElementById('resume'),
				data = {},
				form_data;

			page.classList.add('covered');

			for (const raw_data of e.target) {
				if (raw_data.files) {
					if (raw_data.files[0].type === "application/pdf") {
						data["resume"] = raw_data.files[0];

					} else if (raw_data.files[0].type.indexOf('image') > -1) {
						data["photo"] = raw_data.files[0];
					}
				} else if (raw_data.name === 'infoSource') {
					if (raw_data.checked) {
						data[raw_data.name] = raw_data.value;
					}
				} else if (raw_data.value) {
					data[raw_data.name] = raw_data.value;
				}
			};

			data = this.process(data);
			form_data = this.getForm(data);

			await this.$http.post('/ittime/upload', form_data, {
				headers: {
					'Content-Type': 'multipart/form-data;charset=UTF-8'
				}
			}).then((response) => {
				page.classList.remove('covered');

				if (response.status == 200) {
					document.getElementById('resume-form').reset();
					alert('謝謝你，我們已收到你的資料！');
				}
			}).catch((error) => {
				let message;
				page.classList.remove('covered');

				if (error.response.status == 500) {
					message = '系統繁忙中，請稍後再試一次';
					alert(message);
				} else {
					let inputs = '';
					this.errmsg = error.response.data;
					message = '格式有誤，請確認無誤後再重新上傳';

					if (this.errmsg.mobile) {
						inputs += '行動電話\n';
					}
					if (this.errmsg.idNumber) {
						inputs += '身分證字號 / 居留證號碼 / 護照號碼\n';
					}
					if (this.errmsg.email) {
						inputs += 'Email\n';
					}
					if (this.errmsg.photo) {
						inputs += '個人照片\n';
					}
					if (this.errmsg.file) {
						inputs += '個人自傳\n';
					}

					alert(inputs + message);
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

	#submit
		border: none
		border-radius: 1.2em
		padding: 0.3em 2.2em
		background-color: $light-green-text
		font-size: 2rem
		letter-spacing: 0.2em
</style>
