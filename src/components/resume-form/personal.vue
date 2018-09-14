<template>
	<b-container fluid id="personal">
		<h2 class="my-4 title">應徵明細</h2>
		<b-row class="my-1">
			<b-col sm="3">
				<b-form-group
					label="目前狀態 *"
					label-for="jobStatus"
					:description="errmsg.jobStatus">
					<b-form-select id="jobStatus"
						name="jobStatus"
						:value="jobStatus"
						:options="jobStatuses"
						required>
					</b-form-select>
				</b-form-group>
			</b-col>
			<b-col sm="2">
				<b-form-group class="no-padding"
					label="最快可上班日 *"
					label-for="wyear"
					:description="errmsg.onDutyDate">
					<b-input-group append="年">
						<b-form-select id="wyear"
							name="wyear"
							:value="wyear"
							:options="wyears"
							required>
						</b-form-select>
					</b-input-group>
				</b-form-group>
			</b-col>
			<b-col sm="2">
				<b-input-group append="月">
					<b-form-select id="wmonth"
						name="wmonth"
						v-model:value="wmonth"
						:options="wmonths"
						required>
					</b-form-select>
				</b-input-group>
			</b-col>
			<b-col sm="2">
				<b-input-group append="日">
					<b-form-select id="wdate"
						name="wdate"
						:value="wdate"
						:options="wdates"
						required>
					</b-form-select>
				</b-input-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col sm="6">
				<b-form-group
					label="希望從事職務 *（至少填一項）"
					label-for="expectedPositions1"
					:description="errmsg.expectedPositions">
					<b-input-group prepend="志願一">
						<b-form-select id="expectedPositions1"
							name="expectedPositions1"
							:value="null"
							:options="expectedPositions"
							required>
						</b-form-select>
					</b-input-group>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col sm="6">
				<b-input-group prepend="志願二">
					<b-form-select id="expectedPositions2"
						name="expectedPositions2"
						:value="null"
						:options="expectedPositions">
					</b-form-select>
				</b-input-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col sm="6">
				<b-input-group prepend="志願三">
					<b-form-select id="expectedPositions3"
						name="expectedPositions3"
						:value="null"
						:options="expectedPositions">
					</b-form-select>
				</b-input-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col sm="6">
				<b-form-group
					label="希望待遇 *"
					label-for="expectedPay"
					:description="errmsg.expectedPay">
					<b-form-input type="text" id="expectedPay"
						name="expectedPay"
						required
						placeholder="請填寫薪資期待、工作想像">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="my-3">
			<b-col sm="7">
				<b-form-group
					label="如何得知本次徵才資訊 *"
					:description="errmsg.infoSource">
					<b-form-radio-group id="infoSource" name="infoSource" required>
						<b-form-radio value="Facebook">Facebook</b-form-radio>
						<b-form-radio value="國泰網站">國泰網站</b-form-radio>
						<b-form-radio value="親戚朋友">親戚朋友</b-form-radio>
						<b-form-radio value="人力銀行">人力銀行</b-form-radio>
						<b-form-radio value="其他">其他</b-form-radio>
					</b-form-radio-group>
				</b-form-group>
				<b-form-input type="text" id="infoSourceOther"
					name="infoSourceOther"
					placeholder="如何得知本次徵才資訊">
				</b-form-input>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: 'Personal',
	props: {
		errmsg: Object,
		range: Function
	},
	data() {
		return {
			jobStatus: '就業中',
			jobStatuses: [
				"就業中",
				"待業中",
				"就學中",
				"其他"
			],
			wyear: '2018',
			wyears: this.range(2018, 2020),
			wmonth: '10',
			wmonths: this.range(1, 12),
			wdate: '1',
			wdates: this.range(1, 31),
			expectedPositions: [
				{
					text: "請選擇",
					value: null,
					disabled: true
				},
				"客服系統整合工程師",
				"應用系統開發工程師",
				"應用系統分析工程師",
				"伺服器系統管理工程師(Linux、Windows、AIX)",
				"應用伺服器系統工程師(WAS、JBoss)",
				"資料庫系統管理工程師(DB2、SQL、Open source)",
				"雲端虛擬化系統工程師(VMWare、Hyper-V)",
				"網路系統管理工程師",
				"應用系統品質管理工程師",
				"大數據資料工程師",
				"前端工程師(Front-end Developer)",
				"智能客服研發工程師",
				"機器學習研發工程師",
				"資訊安全防護工程師",
				"資訊安全制度管理工程師",
				"東南亞語系儲備資訊人員(越南、印尼)",
				"資料工程師",
				"數據分析師",
				"金融交易工程師",
				"網頁程式開發師",
				"UX設計師",
				"JAVA程式開發師",
				"APP軟體工程師",
				"ITSM系統管理人員",
				"大數據開發維運工程師",
				"系統分析工程師",
				"測試規劃人員",
				"程式開發工程師",
				"數據應用工程師"
			]
		}
	},
	watch: {
		wmonth: function() {
			let prev = this.wdates.length,
				lunarMonths = [4, 6, 9, 11];

			if (prev == 29) {
				if (this.wmonth != 2) {
					this.wdates.push('30');
					if (lunarMonths.indexOf(this.wmonth) == -1) {
						this.wdates.push('31');
					}
				}
			} else if (prev == 30) {
				if (this.wmonth == 2) {
					this.wdates.pop();
				} else if (lunarMonths.indexOf(this.wmonth) == -1) {
					this.wdates.push('31');
				}
			} else {
				if (this.wmonth == 2) {
					this.wdates.pop();
					this.wdates.pop();
				} else if (lunarMonths.indexOf(this.wmonth) != -1) {
					this.wdates.pop();
				}
			}
		}
	}
}
</script>

<style lang="sass" scoped>
	#personal
		padding: 0

		.input-group:not(first-of-type)
			margin-bottom: 1rem;

	.title
		color: $darker-green-text

	#wmonth,
	#wdate,
	.custom-select:not(#wyear) + .input-group-append
		margin-top: 1.875rem
</style>
