<template>
	<b-container fluid id="resume-upload">
		<h2 class="my-4 title">過往作品</h2>
		<p class="content">
			想讓我們更暸解你嗎？<br>
			快把個人自傳或作品集上傳吧！<br>
			（限使用 pdf 檔案，檔案大小限制為 15 MB，點選送出按鈕後才會進行上傳）
		</p>
		<b-row class="my-1">
			<b-col sm="12">
				<b-form-file accept=".pdf" id="portfolio" name="resume"></b-form-file>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: 'Portfolio',
	props: {
		errmsg: Object
	}
}
</script>

<style lang="sass" scoped>
	#resume-upload
		padding: 0

	.title
		color: $darker-green-text

	.content
		font-size: 1.25rem
</style>
