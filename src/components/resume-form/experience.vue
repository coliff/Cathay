<template>
	<b-container fluid id="education">
		<h2 class="my-4 title">過往經歷</h2>
		<b-row class="my-1">
			<b-col sm="4">
				<b-form-group
					label="社團經歷"
					label-for="clubName"
					:description="errmsg.clubName">
					<b-form-input type="text" id="clubName"
						name="clubName"
						placeholder="請輸入社團名稱">
					</b-form-input>
				</b-form-group>
			</b-col>
			<b-col sm="4">
				<b-form-group
					label="擔任職務"
					label-for="cposition"
					:description="errmsg.cposition">
					<b-form-input type="text" id="cposition"
						name="cposition"
						placeholder="e.g. 副社長">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col sm="2">
				<b-form-group class="no-padding"
					label="服務期間"
					label-for="studyPeriod"
					:description="errmsg.period">
					<b-input-group prepend="從" append="年">
						<b-form-select id="csyear"
							name="csyear"
							:value="csyear"
							:options="years">
						</b-form-select>
					</b-input-group>
				</b-form-group>
			</b-col>
			<b-col sm="2">
				<b-input-group append="月">
					<b-form-select id="csmonth"
						name="csmonth"
						v-model:value="csmonth"
						:options="months">
					</b-form-select>
				</b-input-group>
			</b-col>
		</b-row>
		<b-row class="mt-1 mb-4">
			<b-col sm="2">
				<b-input-group prepend="到" append="年">
					<b-form-select id="ceyear"
						name="ceyear"
						:value="ceyear"
						:options="years">
					</b-form-select>
				</b-input-group>
			</b-col>
			<b-col sm="2">
				<b-input-group append="月">
					<b-form-select id="cemonth"
						name="cemonth"
						v-model:value="cemonth"
						:options="months">
					</b-form-select>
				</b-input-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col sm="3">
				<b-form-group
					label="工作經驗"
					label-for="type"
					:description="errmsg.type">
					<b-form-select id="type"
						name="type"
						:value="null"
						:options="types">
					</b-form-select>
				</b-form-group>
			</b-col>
			<b-col sm="3">
				<b-form-group
					label="公司名稱"
					label-for="companyName"
					:description="errmsg.companyName">
					<b-form-input type="text" id="companyName"
						name="companyName"
						placeholder="請輸入公司名稱">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col sm="4">
				<b-form-group
					label="部門"
					label-for="department"
					:description="errmsg.department">
					<b-form-input type="text" id="department"
						name="department"
						placeholder="請輸入部門名稱">
					</b-form-input>
				</b-form-group>
			</b-col>
			<b-col sm="4">
				<b-form-group
					label="職位"
					label-for="wposition"
					:description="errmsg.wposition">
					<b-form-input type="text" id="wposition"
						name="wposition"
						placeholder="請輸入擔任職位">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col sm="6">
				<b-form-group
					label="工作內容"
					label-for="jobContent"
					:description="errmsg.jobContent">
					<b-form-input type="text" id="jobContent"
						name="jobContent"
						placeholder="請描述工作名稱">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col sm="2">
				<b-form-group class="no-padding"
					label="服務期間"
					label-for="studyPeriod"
					:description="errmsg.period">
					<b-input-group prepend="從" append="年">
						<b-form-select id="wsyear"
							name="wsyear"
							:value="wsyear"
							:options="years">
						</b-form-select>
					</b-input-group>
				</b-form-group>
			</b-col>
			<b-col sm="2">
				<b-input-group append="月">
					<b-form-select id="wsmonth"
						name="wsmonth"
						v-model:value="wsmonth"
						:options="months">
					</b-form-select>
				</b-input-group>
			</b-col>
		</b-row>
		<b-row class="mt-1 mb-4">
			<b-col sm="2">
				<b-input-group prepend="到" append="年">
					<b-form-select id="weyear"
						name="weyear"
						:value="weyear"
						:options="years">
					</b-form-select>
				</b-input-group>
			</b-col>
			<b-col sm="2">
				<b-input-group append="月">
					<b-form-select id="wemonth"
						name="wemonth"
						v-model:value="wemonth"
						:options="months">
					</b-form-select>
				</b-input-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col sm="6">
				<b-form-group
					label="離職原因"
					label-for="resignReason"
					:description="errmsg.resignReason">
					<b-form-input type="text" id="resignReason"
						name="resignReason"
						placeholder="請描述離職原因">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col sm="6">
				<b-form-group
					label="月薪 / 年薪"
					label-for="pay"
					:description="errmsg.pay">
					<b-form-input type="text" id="pay"
						name="pay"
						placeholder="請輸入月薪或年薪狀況">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="mt-1">
			<b-col sm="4">
				<p>專業技能</p>
			</b-col>
			<b-col sm="4">
				<p>語言能力</p>
			</b-col>
		</b-row>
		<b-row class="mb-1">
			<ProfessionalSkill count="1"></ProfessionalSkill>
			<LanguageSkill count="1"></LanguageSkill>
		</b-row>
		<b-row class="my-1">
			<ProfessionalSkill count="2"
				v-show="skillCount > 1">
			</ProfessionalSkill>
			<LanguageSkill count="2"
				v-show="languageCount > 1"
				:class="[skillCount < 2 ? 'offset-sm-4' : '']">
			</LanguageSkill>
		</b-row>
		<b-row class="my-1">
			<ProfessionalSkill count="3"
				v-show="skillCount > 2">
			</ProfessionalSkill>
			<LanguageSkill count="3"
				v-show="languageCount > 2"
				:class="[skillCount < 3 ? 'offset-sm-4' : '']">
			</LanguageSkill>
		</b-row>
		<b-row class="my-1">
			<ProfessionalSkill count="4"
				v-show="skillCount > 3">
			</ProfessionalSkill>
			<LanguageSkill count="4"
				v-show="languageCount > 3"
				:class="[skillCount < 4 ? 'offset-sm-4' : '']">
			</LanguageSkill>
		</b-row>
		<b-row class="my-1">
			<ProfessionalSkill count="5"
				v-show="skillCount > 4">
			</ProfessionalSkill>
			<LanguageSkill count="5"
				v-show="languageCount > 4"
				:class="[skillCount < 5 ? 'offset-sm-4' : '']">
			</LanguageSkill>
		</b-row>
		<b-row class="my-1">
			<b-col sm="4">
				<b-button id="addPSkills"
					name="addPSkills"
					variant="outline-success"
					@click="addPSkills">
					新增專業能力
				</b-button>
				<span>其他 {{ 5 - skillCount }} 項</span>
			</b-col>
			<b-col sm="4">
				<b-button id="addLSkills"
					name="addLSkills"
					variant="outline-success"
					@click="addLSkills">
					新增語言能力
				</b-button>
				<span>其他 {{ 5 - languageCount }} 項</span>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import TW from '@/assets/js/TW_district';
import ProfessionalSkill from './resume-components/professionalSkill';
import LanguageSkill from './resume-components/languageSkill';

export default {
	name: 'BasicInfo',
	props: {
		errmsg: Object,
		range: Function
	},
	components: {
		ProfessionalSkill,
		LanguageSkill
	},
	data() {
		return {
			skillCount: 1,
			languageCount: 1,
			csyear: '2018',
			csmonth: '1',
			ceyear: '2018',
			cemonth: '1',
			wsyear: '2018',
			wsmonth: '1',
			weyear: '2018',
			wemonth: '1',
			years: this.range(1900, 2018),
			months: this.range(1, 12),
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
	},
	methods: {
		addPSkills: function() {
			if (this.skillCount < 5) this.skillCount++;
		},
		addLSkills: function() {
			if (this.languageCount < 5) this.languageCount++;
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
	#wsmonth,
	#csmonth,
	#wsmonth + .input-group-append,
	#csmonth + .input-group-append
		margin-top: 1.875rem
</style>
