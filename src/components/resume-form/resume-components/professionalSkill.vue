<template>
	<b-form-input type="text" :id="`professionalSkills${count}`"
		:name="`professionalSkills${count}`"
		placeholder="請輸入技能/證照名稱">
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
