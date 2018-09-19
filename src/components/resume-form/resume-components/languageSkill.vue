<template>
	<b-form-input type="text" :id="`languageSkills${count}`"
		:name="`languageSkills${count}`"
		placeholder="請輸入語言/證照名稱">
	</b-form-input>
</template>

<script>
export default {
	props: {
		count: String
	}
}
</script>

<style lang="sass" scoped>
	[id^=professionalSkills]
		margin-bottom: 1rem
</style>
