<template>
	<b-container fluid id="educations" class="no-padding">
		<h2 class="mt-4 title">教育背景</h2>
		<Education class="pt-4"
			:range="range"
			count="1">
		</Education>
		<Education class="pt-4"
			:range="range"
			count="2"
			v-show="educationCount > 1">
		</Education>
		<Education class="pt-4"
			:range="range"
			count="3"
			v-show="educationCount > 2">
		</Education>
		<Education class="pt-4"
			:range="range"
			count="4"
			v-show="educationCount > 3">
		</Education>
		<Education class="pt-4"
			:range="range"
			count="5"
			v-show="educationCount > 4">
		</Education>
		<b-row class="my-3">
			<b-col md="4" class="add">
				<b-button id="addEducation"
					variant="outline-success"
					@click="addEducation">
					<svg class="iconAdd" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
						<path d="M3 0v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z" />
					</svg>
					新增教育背景
				</b-button>
				<span class="remaining">其他 {{ 5 - educationCount }} 項</span>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import Education from '@/components/resume-form/resume-components/education';

export default {
	props: {
		range: Function
	},
	data() {
		return {
			educationCount: 1
		}
	},
	components: {
		Education
	},
	methods: {
		addEducation: function() {
			if (this.educationCount < 5) this.educationCount++;
		}
	}
}
</script>

<style lang="sass" scoped>
</style>
