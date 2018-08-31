<template>
	<b-container fluid id="resume-upload">
		<p>履歷表上傳（限使用 pdf 檔案，檔案大小限制為 15 MB，點選送出按鈕後才會進行上傳）</p>
		<b-row class="my-1">
			<b-col sm="12">
				<b-form-file v-model="resume" accept=".pdf">請選擇檔案</b-form-file>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: 'ResumeUpload',
	data() {
		return {
			resume: null
		}
	}
}
</script>

<style lang="sass" scoped>
	@import '@/assets/css/global.scss'
</style>
