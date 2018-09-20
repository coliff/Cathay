<template>
	<b-container fluid id="resume-upload" class="no-padding">
		<h2 class="my-4 title">過往作品</h2>
		<p class="content">
			想讓我們更暸解你嗎？<br>
			快把個人自傳或作品集上傳吧！<br>
			（限使用 pdf 檔案，檔案大小限制為 15 MB，點選送出按鈕後才會進行上傳）*
		</p>
		<b-row class="my-1">
			<b-col lg="8">
				<b-form-file required accept=".pdf" id="portfolio" name="resume"></b-form-file>
				<small class="text-muted">{{ errmsg.file }}</small>
			</b-col>
		</b-row>
		<b-row class="mt-3">
			<b-col md="6">
				<b-form-group
					label="Github 連結"
					label-for="github">
					<b-form-input type="url" id="github"
						name="github"
						placeholder="請輸入網址">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col md="6">
				<b-form-group
					label="其他補充資料"
					label-for="others">
					<b-form-input id="others"
						name="others"
						placeholder="可新增其他作品網址或各項補充資料">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	props: {
		errmsg: Object
	}
}
</script>

<style lang="sass" scoped>
	.content
		font-size: 1.25rem
</style>
