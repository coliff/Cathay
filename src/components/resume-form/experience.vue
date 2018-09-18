<template>
	<b-container fluid id="experience" class="no-padding">
		<h2 class="my-4 title">過往經歷</h2>
		<!-- 社團經歷 -->
		<Club
			:errmsg="errmsg"
			:years="years"
			:months="months"
			count="1">
		</Club>
		<Club
			:errmsg="errmsg"
			:years="years"
			:months="months"
			count="2"
			v-show="clubCount > 1">
		</Club>
		<Club
			:errmsg="errmsg"
			:years="years"
			:months="months"
			count="3"
			v-show="clubCount > 2">
		</Club>
		<Club
			:errmsg="errmsg"
			:years="years"
			:months="months"
			count="4"
			v-show="clubCount > 3">
		</Club>
		<Club
			:errmsg="errmsg"
			:years="years"
			:months="months"
			count="5"
			v-show="clubCount > 4">
		</Club>
		<b-row class="my-3">
			<b-col md="4" class="add">
				<b-button id="addClub"
					variant="outline-success"
					@click="addClub">
					<svg class="iconAdd" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
						<path d="M3 0v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z" />
					</svg>
					新增社團經歷
				</b-button>
				<span class="remaining">其他 {{ 5 - clubCount }} 項</span>
			</b-col>
		</b-row>
		<!-- 工作經驗 -->
		<Work
			:errmsg="errmsg"
			:years="years"
			:months="months"
			count="1">
		</Work>
		<Work
			:errmsg="errmsg"
			:years="years"
			:months="months"
			count="2"
			v-show="workCount > 1">
		</Work>
		<Work
			:errmsg="errmsg"
			:years="years"
			:months="months"
			count="3"
			v-show="workCount > 2">
		</Work>
		<Work
			:errmsg="errmsg"
			:years="years"
			:months="months"
			count="4"
			v-show="workCount > 3">
		</Work>
		<Work
			:errmsg="errmsg"
			:years="years"
			:months="months"
			count="5"
			v-show="workCount > 4">
		</Work>
		<b-row class="my-3">
			<b-col md="4" class="add">
				<b-button id="addWork"
					variant="outline-success"
					@click="addWork">
					<svg class="iconAdd" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
						<path d="M3 0v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z" />
					</svg>
					新增工作經驗
				</b-button>
				<span class="remaining">其他 {{ 5 - workCount }} 項</span>
			</b-col>
		</b-row>
		<!-- 新增技能/語言/證照 -->
		<Skills></Skills>
	</b-container>
</template>

<script>
import Club from '@/components/resume-form/resume-components/club';
import Work from '@/components/resume-form/resume-components/work';
import Skills from '@/components/resume-form/resume-components/skills';

export default {
	props: {
		errmsg: Object,
		range: Function
	},
	components: {
		Club,
		Work,
		Skills
	},
	data() {
		return {
			clubCount: 1,
			workCount: 1,
			years: this.range(2018, 1930),
			months: this.range(1, 12),
		}
	},
	methods: {
		addClub: function() {
			if (this.clubCount < 5) this.clubCount++;
		},
		addWork: function() {
			if (this.workCount < 5) this.workCount++;
		}
	}
}
</script>

<style lang="sass" scoped>
</style>
