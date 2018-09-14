<template>
	<b-container fluid id="skills">
		<b-row class="mt-1">
			<b-col md="4">
				<p>專業技能</p>
			</b-col>
			<b-col md="4">
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
			<b-col sm="6" md="4" class="my-1">
				<b-button id="addPSkills"
					variant="outline-success"
					@click="addPSkills">
					<svg class="add" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
						<path d="M3 0v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z" />
					</svg>
					新增專業能力
				</b-button>
				<span>其他 {{ 5 - skillCount }} 項</span>
			</b-col>
			<b-col sm="6" md="4" class="my-1">
				<b-button id="addLSkills"
					variant="outline-success"
					@click="addLSkills">
					<svg class="add" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
						<path d="M3 0v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z" />
					</svg>
					新增語言能力
				</b-button>
				<span>其他 {{ 5 - languageCount }} 項</span>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import ProfessionalSkill from '@/components/resume-form/resume-components/professionalSkill';
import LanguageSkill from '@/components/resume-form/resume-components/languageSkill';

export default {
	data() {
		return {
			skillCount: 1,
			languageCount: 1
		}
	},
	components: {
		ProfessionalSkill,
		LanguageSkill
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
</style>
