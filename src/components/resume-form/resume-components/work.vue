<template>
	<b-container fluid :id="`work${count}`" class="no-padding">
		<b-row class="my-1">
			<b-col md="3">
				<b-form-group
					label="工作經驗"
					label-for="type"
					:description="errmsg.type">
					<b-form-select :id="`type${count}`"
						:name="`type${count}`"
						:value="null"
						:options="types">
					</b-form-select>
				</b-form-group>
			</b-col>
			<b-col md="3">
				<b-form-group
					label="公司名稱"
					label-for="companyName"
					:description="errmsg.companyName">
					<b-form-input type="text" :id="`companyName${count}`"
						:name="`companyName${count}`"
						placeholder="請輸入公司名稱">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col md="4">
				<b-form-group
					label="部門"
					label-for="department"
					:description="errmsg.department">
					<b-form-input type="text" :id="`department${count}`"
						:name="`department${count}`"
						placeholder="請輸入部門名稱">
					</b-form-input>
				</b-form-group>
			</b-col>
			<b-col md="4">
				<b-form-group
					label="職位"
					label-for="wposition"
					:description="errmsg.wposition">
					<b-form-input type="text" :id="`wposition${count}`"
						:name="`wposition${count}`"
						placeholder="請輸入擔任職位">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col md="6">
				<b-form-group
					label="工作內容"
					label-for="jobContent"
					:description="errmsg.jobContent">
					<b-form-input type="text" :id="`jobContent${count}`"
						:name="`jobContent${count}`"
						placeholder="請描述工作名稱">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col md="4" lg="3">
				<b-form-group class="no-padding"
					label="服務期間"
					label-for="studyPeriod"
					:description="errmsg.period">
					<b-input-group prepend="從" append="年">
						<b-form-select :id="`wsyear${count}`"
							:name="`wsyear${count}`"
							:options="years">
						</b-form-select>
					</b-input-group>
				</b-form-group>
			</b-col>
			<b-col md="3" lg="2">
				<b-input-group append="月">
					<b-form-select :id="`wsmonth${count}`"
						:name="`wsmonth${count}`"
						:options="months">
					</b-form-select>
				</b-input-group>
			</b-col>
		</b-row>
		<b-row class="mt-1 mb-4">
			<b-col md="4" lg="3">
				<b-input-group prepend="到" append="年">
					<b-form-select :id="`weyear${count}`"
						:name="`weyear${count}`"
						:options="years">
					</b-form-select>
				</b-input-group>
			</b-col>
			<b-col md="3" lg="2">
				<b-input-group append="月">
					<b-form-select :id="`wemonth${count}`"
						:name="`wemonth${count}`"
						:options="months">
					</b-form-select>
				</b-input-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col md="6">
				<b-form-group
					label="離職原因"
					label-for="resignReason"
					:description="errmsg.resignReason">
					<b-form-input type="text" :id="`resignReason${count}`"
						:name="`resignReason${count}`"
						placeholder="請描述離職原因">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col md="6">
				<b-form-group
					label="月薪 / 年薪"
					label-for="pay"
					:description="errmsg.pay">
					<b-form-input type="text" :id="`pay${count}`"
						:name="`pay${count}`"
						placeholder="請輸入月薪或年薪狀況">
					</b-form-input>
				</b-form-group>
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
			skillCount: 1,
			languageCount: 1,
			types: [
				{
					text: '選擇工作性質',
					value: null,
					disabled: true
				},
				"正職",
				"約聘",
				"工讀",
				"其他"
			]
		}
	}
}
</script>

<style lang="sass" scoped>
	@include media-breakpoint-up(md)
		[id^=wsmonth],
		[id^=wsmonth] + .input-group-append
			margin-top: 1.875rem

	@include media-breakpoint-down(sm)
		[id^=wsmonth],
		[id^=wsmonth] + .input-group-append
			margin-bottom: 1rem

		[id^=wemonth],
		[id^=wemonth] + .input-group-append
			margin-top: 1rem

		[id^=wsmonth],
		[id^=wemonth]
			margin-left: 2.5rem
</style>
