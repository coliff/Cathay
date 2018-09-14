<template>
	<b-container fluid :id="`club${count}`">
		<b-row class="my-1">
			<b-col md="4">
				<b-form-group
					label="社團經歷"
					label-for="clubName"
					:description="errmsg.clubName">
					<b-form-input type="text" :id="`clubName${count}`"
						:name="`clubName${count}`"
						placeholder="請輸入社團名稱">
					</b-form-input>
				</b-form-group>
			</b-col>
			<b-col md="4">
				<b-form-group
					label="擔任職務"
					label-for="cposition"
					:description="errmsg.cposition">
					<b-form-input type="text" :id="`cposition${count}`"
						:name="`cposition${count}`"
						placeholder="e.g. 副社長">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col md="2">
				<b-form-group class="no-padding"
					label="服務期間"
					label-for="studyPeriod"
					:description="errmsg.period">
					<b-input-group prepend="從" append="年">
						<b-form-select :id="`csyear${count}`"
							:name="`csyear${count}`"
							:value="csyear"
							:options="years">
						</b-form-select>
					</b-input-group>
				</b-form-group>
			</b-col>
			<b-col md="2">
				<b-input-group append="月">
					<b-form-select :id="`csmonth${count}`"
						:name="`csmonth${count}`"
						v-model:value="csmonth"
						:options="months">
					</b-form-select>
				</b-input-group>
			</b-col>
		</b-row>
		<b-row class="mt-1 mb-4">
			<b-col md="2">
				<b-input-group prepend="到" append="年">
					<b-form-select :id="`ceyear${count}`"
						:name="`ceyear${count}`"
						:value="ceyear"
						:options="years">
					</b-form-select>
				</b-input-group>
			</b-col>
			<b-col md="2">
				<b-input-group append="月">
					<b-form-select :id="`cemonth${count}`"
						:name="`cemonth${count}`"
						v-model:value="cemonth"
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
		years: Array,
		months: Array,
		count: String
	},
	data() {
		return {
			csyear: '2018',
			csmonth: '1',
			ceyear: '2018',
			cemonth: '1'
		}
	}
}
</script>

<style lang="sass" scoped>
	@include media-breakpoint-up(md)
		[id^=csmonth],
		[id^=csmonth] + .input-group-append
			margin-top: 1.875rem

	@include media-breakpoint-down(md)
		[id^=csmonth],
		[id^=csmonth] + .input-group-append
			margin-bottom: 1rem

		[id^=cemonth],
		[id^=cemonth] + .input-group-append
			margin-top: 1rem
</style>
