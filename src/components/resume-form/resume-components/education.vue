<template>
	<b-container fluid :id="`education${count}`">
		<b-row class="my-1">
			<b-col md="3">
				<b-form-group
					label="教育背景 *"
					label-for="degree"
					:description="errmsg.degree">
					<b-form-select :id="`degree${count}`"
						:name="`degree${count}`"
						:value="null"
						:options="degrees">
					</b-form-select>
				</b-form-group>
			</b-col>
			<b-col md="3">
				<b-form-select :id="`graduation${count}`"
					:name="`graduation${count}`"
					:value="null"
					:options="graduationOptions">
				</b-form-select>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col md="4">
				<b-form-group
					label="學校名稱 *"
					label-for="schoolName"
					:description="errmsg.schoolName">
					<b-form-input type="text" :id="`schoolName${count}`"
						:name="`schoolName${count}`"
						placeholder="請輸入學校名稱">
					</b-form-input>
				</b-form-group>
			</b-col>
			<b-col md="4">
				<b-form-group
					label="科系 *"
					label-for="major"
					:description="errmsg.major">
					<b-form-input type="text" :id="`major${count}`"
						:name="`major${count}`"
						placeholder="請輸入科系">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col md="4">
				<b-form-group class="no-padding"
					label="修業期間 *"
					label-for="studyPeriod"
					:description="errmsg.studyPeriod">
					<b-input-group prepend="從" append="年">
						<b-form-select :id="`syear${count}`"
							:name="`syear${count}`"
							:value="syear"
							:options="years">
						</b-form-select>
					</b-input-group>
				</b-form-group>
			</b-col>
			<b-col md="4">
				<b-input-group append="月">
					<b-form-select :id="`smonth${count}`"
						:name="`smonth${count}`"
						v-model:value="smonth"
						:options="months">
					</b-form-select>
				</b-input-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col md="4">
				<b-input-group prepend="到" append="年">
					<b-form-select :id="`eyear${count}`"
						:name="`eyear${count}`"
						:value="eyear"
						:options="years">
					</b-form-select>
				</b-input-group>
			</b-col>
			<b-col md="4">
				<b-input-group append="月">
					<b-form-select :id="`emonth${count}`"
						:name="`emonth${count}`"
						v-model:value="emonth"
						:options="months">
					</b-form-select>
				</b-input-group>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	props: {
		errmsg: Object,
		range: Function,
		count: String
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
					text: "畢肄業狀態",
					value: null,
					disabled: true
				},
				"畢業",
				"就讀中",
				"肄業",
				"其他"
			],
			syear: null,
			smonth: null,
			eyear: null,
			emonth: null,
			years: this.range(2030, 1950),
			months: this.range(1, 12),
		}
	}
}
</script>

<style lang="sass" scoped>
	#education
		padding: 0

	@include media-breakpoint-up(md)
		[id^=graduation],
		[id^=smonth],
		[id^=smonth] + .input-group-append
			margin-top: 1.875rem

	@include media-breakpoint-down(sm)
		[id^=graduation],
		[id^=smonth],
		[id^=smonth] + .input-group-append,
		[id^=emonth],
		[id^=emonth] + .input-group-append
			margin-bottom: 1rem

		[id^=emonth],
		[id^=emonth] + .input-group-append
			margin-top: 1rem
</style>
