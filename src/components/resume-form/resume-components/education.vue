<template>
	<b-container fluid id="education">
		<h2 class="my-4 title">教育背景</h2>
		<b-row class="my-1">
			<b-col sm="3">
				<b-form-group
					label="教育背景 *"
					label-for="degree"
					:description="errmsg.degree">
					<b-form-select id="degree"
						name="degree"
						:value="null"
						:options="degrees"
						required>
					</b-form-select>
				</b-form-group>
			</b-col>
			<b-col sm="3">
				<b-form-select id="graduation"
					name="graduation"
					:value="null"
					:options="graduationOptions"
					required>
				</b-form-select>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col sm="4">
				<b-form-group
					label="學校名稱 *"
					label-for="schoolName"
					:description="errmsg.schoolName">
					<b-form-input type="text" id="schoolName"
						name="schoolName"
						required
						placeholder="請輸入學校名稱">
					</b-form-input>
				</b-form-group>
			</b-col>
			<b-col sm="4">
				<b-form-group
					label="科系 *"
					label-for="major"
					:description="errmsg.major">
					<b-form-input type="text" id="major"
						name="major"
						required
						placeholder="請輸入科系">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col sm="2">
				<b-form-group class="no-padding"
					label="修業期間"
					label-for="studyPeriod"
					:description="errmsg.studyPeriod">
					<b-input-group prepend="從" append="年">
						<b-form-select id="syear"
							name="syear"
							:value="syear"
							:options="years"
							required>
						</b-form-select>
					</b-input-group>
				</b-form-group>
			</b-col>
			<b-col sm="2">
				<b-input-group append="月">
					<b-form-select id="smonth"
						name="smonth"
						v-model:value="smonth"
						:options="months"
						required>
					</b-form-select>
				</b-input-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col sm="2">
				<b-input-group prepend="到" append="年">
					<b-form-select id="eyear"
						name="eyear"
						:value="eyear"
						:options="years"
						required>
					</b-form-select>
				</b-input-group>
			</b-col>
			<b-col sm="2">
				<b-input-group append="月">
					<b-form-select id="emonth"
						name="emonth"
						v-model:value="emonth"
						:options="months"
						required>
					</b-form-select>
				</b-input-group>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import TW from '@/assets/js/TW_district';

export default {
	name: 'BasicInfo',
	props: {
		errmsg: Object,
		range: Function
	},
	data() {
		return {
			degrees: [
				{
					text: "選擇學位",
					value: null,
					disabled: true
				},
				"學士",
				"碩士",
				"博士",
				"其他"
			],
			graduationOptions: [
				{
					text: "肄畢業狀態",
					value: null,
					disabled: true
				},
				"畢業",
				"肄業",
				"就讀中",
				"其他"
			],
			syear: '2018',
			smonth: '1',
			eyear: '2018',
			emonth: '1',
			years: this.range(1900, 2018),
			months: this.range(1, 12),
		}
	}
}
</script>

<style lang="sass" scoped>
	#education
		padding: 0

	.title
		color: $darker-green-text

	#graduation,
	#smonth,
	#smonth + .input-group-append
		margin-top: 1.875rem
</style>
