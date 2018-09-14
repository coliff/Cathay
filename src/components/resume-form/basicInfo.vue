<template>
	<b-container fluid id="basic-info">
		<h2 class="my-4 title">基本資料</h2>
		<b-row class="my-1">
			<b-col sm="6">
				<b-form-group
					label="姓名 *"
					label-for="name"
					:description="errmsg.name">
					<b-form-input type="text" id="name"
						name="name"
						required
						placeholder="e.g. 林大豪">
					</b-form-input>
				</b-form-group>
			</b-col>
			<b-col sm="6">
				<b-form-group
					label="英文姓名 *"
					label-for="enName"
					:description="errmsg.enName">
					<b-form-input type="text" id="enName"
						name="enName"
						required
						placeholder="e.g. Jeremy Lin">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col sm="6">
				<b-form-group
					label="行動電話 *"
					label-for="cellphone"
					:description="errmsg.cellphone">
					<b-form-input type="tel" id="cellphone"
						name="cellphone"
						required
						placeholder="e.g. 0912345678">
					</b-form-input>
				</b-form-group>
			</b-col>
			<b-col sm="6">
				<b-form-group
					label="身分證字號 / 居留證號碼 / 護照號碼 *"
					label-for="idNumber"
					:description="errmsg.idNumber">
					<b-form-input type="text" id="idNumber"
						name="idNumber"
						required
						placeholder="e.g. F123456789">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col sm="6">
				<b-form-group
					label="Email *"
					label-for="email"
					:description="errmsg.email">
					<b-form-input type="email" id="email"
						name="email"
						required
						placeholder="e.g. abcdefg@gmail.com">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col sm="2">
				<b-form-group class="no-padding"
					label="生日 *"
					label-for="year"
					:description="errmsg.birthday">
					<b-input-group append="年">
						<b-form-select id="year"
							name="year"
							:value="year"
							:options="years"
							required>
						</b-form-select>
					</b-input-group>
				</b-form-group>
			</b-col>
			<b-col sm="2">
				<b-input-group append="月">
					<b-form-select id="month"
						name="month"
						v-model:value="month"
						:options="months"
						required>
					</b-form-select>
				</b-input-group>
			</b-col>
			<b-col sm="2">
				<b-input-group append="日">
					<b-form-select id="date"
						name="date"
						:value="date"
						:options="dates"
						required>
					</b-form-select>
				</b-input-group>
			</b-col>
			<b-col sm="2">
				<b-form-group
					label="性別 *"
					label-for="gender"
					:description="errmsg.gender">
					<b-form-select id="gender"
						name="gender"
						:value="null"
						:options="genderOptions"
						required>
					</b-form-select>
				</b-form-group>
			</b-col>
			<b-col sm="2">
				<b-form-group
					label="兵役狀況 *"
					label-for="military"
					:description="errmsg.military">
					<b-form-select id="military"
						name="military"
						:value="null"
						:options="militaryOptions"
						required>
					</b-form-select>
				</b-form-group>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: 'BasicInfo',
	props: {
		errmsg: Object,
		range: Function
	},
	data() {
		return {
			year: '2018',
			years: this.range(1900, 2018),
			month: '1',
			months: this.range(1, 12),
			date: '1',
			dates: this.range(1, 31),
			genderOptions: [
				{
					text: "請選擇",
					value: null,
					disabled: true
				},
				"男性",
				"女性",
				"其他"
			],
			militaryOptions: [
				{
					text: "請選擇",
					value: null,
					disabled: true
				}, {
					text: "未役",
					value: "未役",
				}, {
					text: "待役",
					value: "待役",
				}, {
					text: "免役",
					value: "免役",
				}, {
					text: "屆役畢",
					value: "屆役畢",
				}, {
					text: "役畢",
					value: "役畢",
				}
			]
		}
	},
	watch: {
		month: function() {
			let prev = this.dates.length,
				lunarMonths = [4, 6, 9, 11];

			if (prev == 29) {
				if (this.month != 2) {
					this.dates.push('30');
					if (lunarMonths.indexOf(this.month) == -1) {
						this.dates.push('31');
					}
				}
			} else if (prev == 30) {
				if (this.month == 2) {
					this.dates.pop();
				} else if (lunarMonths.indexOf(this.month) == -1) {
					this.dates.push('31');
				}
			} else {
				if (this.month == 2) {
					this.dates.pop();
					this.dates.pop();
				} else if (lunarMonths.indexOf(this.month) != -1) {
					this.dates.pop();
				}
			}
		}
	}
}
</script>

<style lang="sass" scoped>
	#basic-info
		padding: 0

	.title
		color: $darker-green-text

	#month,
	#date,
	.custom-select:not(#year) + .input-group-append
		margin-top: 1.875rem
</style>
