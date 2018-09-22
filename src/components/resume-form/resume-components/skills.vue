<template>
	<b-container fluid id="skills" class="no-padding">
		<b-row class="mt-1">
			<b-col md="6" lg="4">
				<b-form-group
					label="專業技能"
					label-for="professionalSkills1">
					<ProfessionalSkill count="1"></ProfessionalSkill>
					<ProfessionalSkill count="2"
						v-show="skillCount > 1">
					</ProfessionalSkill>
					<ProfessionalSkill count="3"
						v-show="skillCount > 2">
					</ProfessionalSkill>
					<ProfessionalSkill count="4"
						v-show="skillCount > 3">
					</ProfessionalSkill>
					<ProfessionalSkill count="5"
						v-show="skillCount > 4">
					</ProfessionalSkill>
				</b-form-group>
				<b-container fluid class="my-3 no-padding add">
					<b-button id="addPSkills"
						variant="outline-success"
						@click="addPSkills">
						<svg class="iconAdd" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
							<path d="M3 0v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z" />
						</svg>
						新增專業技能
					</b-button>
					<span class="remaining">其他 {{ 5 - skillCount }} 項</span>
				</b-container>
			</b-col>
			<b-col md="6" lg="4">
				<b-form-group
					label="語言能力"
					label-for="languageSkills1">
					<LanguageSkill count="1"></LanguageSkill>
					<LanguageSkill count="2"
						v-show="languageCount > 1">
					</LanguageSkill>
					<LanguageSkill count="3"
						v-show="languageCount > 2">
					</LanguageSkill>
					<LanguageSkill count="4"
						v-show="languageCount > 3">
					</LanguageSkill>
					<LanguageSkill count="5"
						v-show="languageCount > 4">
					</LanguageSkill>
				</b-form-group>
				<b-container fluid class="my-3 no-padding add">
					<b-button id="addLSkills"
						variant="outline-success"
						@click="addLSkills">
						<svg class="iconAdd" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
							<path d="M3 0v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z" />
						</svg>
						新增語言能力
					</b-button>
					<span class="remaining">其他 {{ 5 - languageCount }} 項</span>
				</b-container>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import ProfessionalSkill from '@/components/resume-form/resume-components/professionalSkill';
import LanguageSkill from '@/components/resume-form/resume-components/languageSkill';

export default {
	props: {
		errmsg: Object
	},
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
