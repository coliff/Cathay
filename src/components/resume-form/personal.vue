<template>
	<b-container fluid id="personal" class="no-padding">
		<h2 class="my-4 title">應徵明細</h2>
		<b-row class="my-1">
			<b-col md="3" lg="2">
				<b-form-group
					label="目前狀態 *"
					label-for="jobStatus">
					<b-form-select id="jobStatus"
						name="jobStatus"
						:value="jobStatus"
						:options="jobStatuses"
						required>
					</b-form-select>
				</b-form-group>
			</b-col>
			<b-col md="9" lg="6" class="px-md-1">
				<b-form-group class="no-padding"
					label="最快可上班日 *"
					label-for="wyear">
					<b-row>
						<b-col>
							<b-input-group append="年">
								<b-form-select id="wyear"
									name="wyear"
									:options="wyears"
									required>
								</b-form-select>
							</b-input-group>
						</b-col>
						<b-col>
							<b-input-group append="月">
								<b-form-select id="wmonth"
									name="wmonth"
									v-model:value="wmonth"
									:options="wmonths"
									required>
								</b-form-select>
							</b-input-group>
						</b-col>
						<b-col>
							<b-input-group append="日">
								<b-form-select id="wdate"
									name="wdate"
									:options="wdates"
									required>
								</b-form-select>
							</b-input-group>
						</b-col>
					</b-row>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col md="6">
				<b-form-group
					label="希望從事職務 *（至少填一項）"
					label-for="expectedPositions1">
					<b-input-group prepend="志願一" class="mb-3">
						<b-form-select id="expectedPositions1"
							name="expectedPositions1"
							:value="null"
							:options="expectedPositions"
							required>
						</b-form-select>
					</b-input-group>
					<b-input-group prepend="志願二" class="mb-3">
						<b-form-select id="expectedPositions2"
							name="expectedPositions2"
							:value="null"
							:options="expectedPositions">
						</b-form-select>
					</b-input-group>
					<b-input-group prepend="志願三" class="mb-3">
						<b-form-select id="expectedPositions3"
							name="expectedPositions3"
							:value="null"
							:options="expectedPositions">
						</b-form-select>
					</b-input-group>
					<b-input-group v-show="positionCount > 3" prepend="志願四" class="mb-3">
						<b-form-select id="expectedPositions4"
							name="expectedPositions4"
							:value="null"
							:options="expectedPositions">
						</b-form-select>
					</b-input-group>
					<b-input-group v-show="positionCount > 4" prepend="志願五" class="mb-3">
						<b-form-select id="expectedPositions5"
							name="expectedPositions5"
							:value="null"
							:options="expectedPositions">
						</b-form-select>
					</b-input-group>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="mb-3">
			<b-col md="4"class="add">
				<b-button id="addPosition"
					variant="outline-success"
					@click="addPosition">
					<svg class="iconAdd" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
						<path d="M3 0v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z" />
					</svg>
					新增志願
				</b-button>
				<span class="remaining">其他 {{ 5 - positionCount }} 項</span>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col md="6">
				<b-form-group
					label="希望待遇 *"
					label-for="expectedPay">
					<b-form-input type="text" id="expectedPay"
						name="expectedPay"
						required
						placeholder="請填寫薪資期待、工作想像">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col md="9" lg="7">
				<b-form-group
					label="如何得知本次徵才資訊 *">
					<b-form-radio-group id="infoSource" name="infoSource" required>
						<b-form-radio class="mt-2" value="Facebook">Facebook</b-form-radio>
						<b-form-radio class="mt-2" value="國泰網站">國泰網站</b-form-radio>
						<b-form-radio class="mt-2" value="親戚朋友">親戚朋友</b-form-radio>
						<b-form-radio class="mt-2" value="人力銀行">人力銀行</b-form-radio>
						<br>
						<div id="other-sourse" class="mt-2">
							<b-form-radio value="其他">其他</b-form-radio>
							<b-form-input type="text" id="infoSourceOther"
								class="d-inline-block w-75 mb-0"
								name="infoSourceOther">
							</b-form-input>
						</div>
					</b-form-radio-group>
				</b-form-group>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	props: {
		range: Function
	},
	data() {
		return {
			positionCount: 3,
			jobStatus: '就業中',
			jobStatuses: [
				"就業中",
				"待業中",
				"就學中",
				"其他"
			],
			wmonth: null,
			wyears: this.range(2020, 2018),
			wmonths: this.range(1, 12),
			wdates: this.range(1, 31),
			expectedPositions: [
				{
					text: "請選擇",
					value: null,
					disabled: true
				},
				{
					text: "—— 國泰人壽 ——",
					value: null,
					disabled: true
				},
				"國泰人壽｜客服系統整合工程師",
				"國泰人壽｜應用系統開發工程師",
				"國泰人壽｜應用系統分析工程師",
				"國泰人壽｜伺服器系統管理工程師(Linux、Windows、AIX)",
				"國泰人壽｜應用伺服器系統工程師(WAS、JBoss)",
				"國泰人壽｜資料庫系統管理工程師(DB2、SQL、Open source)",
				"國泰人壽｜雲端虛擬化系統工程師(VMWare、Hyper-V)",
				"國泰人壽｜網路系統管理工程師",
				"國泰人壽｜應用系統品質管理工程師",
				"國泰人壽｜大數據資料工程師",
				"國泰人壽｜前端工程師(Front-end Developer)",
				"國泰人壽｜智能客服研發工程師",
				"國泰人壽｜行動化App開發工程師",
				"國泰人壽｜機器學習研發工程師",
				"國泰人壽｜資訊安全防護工程師",
				"國泰人壽｜資訊安全制度管理工程師",
				"國泰人壽｜東南亞語系儲備資訊人員(越南、印尼)",
				{
					text: "—— 國泰人壽 台中場 ——",
					value: null,
					disabled: true
				},
				"國泰人壽 台中場｜應用系統開發工程師",
				{
					text: "—— 國泰世華銀行 ——",
					value: null,
					disabled: true
				},
				"國泰世華銀行｜APP軟體工程師",
				"國泰世華銀行｜ITSM系統管理人員",
				"國泰世華銀行｜大數據開發維運工程師",
				"國泰世華銀行｜系統分析工程師",
				"國泰世華銀行｜測試規劃師",
				"國泰世華銀行｜程式開發工程師",
				"國泰世華銀行｜數據應用工程師",
				{
					text: "—— 國泰產險 ——",
					value: null,
					disabled: true
				},
				"國泰產險｜客服系統整合工程師",
				"國泰產險｜JAVA程式開發師",
				{
					text: "—— 國泰證券 ——",
					value: null,
					disabled: true
				},
				"國泰證券｜資料工程師",
				"國泰證券｜數據分析師",
				"國泰證券｜金融交易工程師",
				"國泰證券｜網頁程式開發師",
				"國泰證券｜UX設計師"
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
	},
	methods: {
		addPosition: function() {
			if (this.positionCount < 5) this.positionCount++;
		}
	}
}
</script>

<style lang="sass" scoped>
	#other-sourse
		white-space: nowrap

	.input-group-prepend > .input-group-text
		padding: 0.375rem 0.75rem 0.375rem 0;
</style>
