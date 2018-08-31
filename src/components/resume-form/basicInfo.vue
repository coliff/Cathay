<template>
	<b-container fluid id="basic-info">
		<h3>基本資料</h3>
		<b-row class="my-1">
			<b-col sm="6">
				<label for="name">
					姓名
				</label>
			</b-col>
			<b-col sm="6">
				<label for="en-name">
					英文姓名
				</label>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col sm="6">
				<b-form-input type="text" id="name" name="name" placeholder="e.g. 林大豪"></b-form-input>
			</b-col>
			<b-col sm="6">
				<b-form-input type="text" id="en-name" name="en-name" placeholder="e.g. Jeremy Lin"></b-form-input>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col sm="6">
				<label for="cellphone">
					行動電話
				</label>
			</b-col>
			<b-col sm="6">
				<label for="id-number">
					身分證字號 / 居留證號碼 / 護照號碼
				</label>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col sm="6">
				<b-form-input type="tel" id="cellphone" name="cellphone" placeholder="e.g. 0912345678"></b-form-input>
			</b-col>
			<b-col sm="6">
				<b-form-input type="text" id="id-number" name="id-number" placeholder="e.g. F123456789"></b-form-input>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col sm="6">
				<label for="email">
					Email
				</label>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col sm="6">
				<b-form-input type="email" id="email" name="email" placeholder="e.g. abcdefg@gmail.com"></b-form-input>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: 'BasicInfo'
}
</script>

<style lang="sass" scoped>
	@import '@/assets/css/global.scss'
</style>
