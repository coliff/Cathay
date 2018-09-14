<template>
	<b-col sm="4">
		<b-form-input type="text" :id="`professionalSkills${count}`"
			:name="`professionalSkills${count}`"
			placeholder="請輸入技能/證照名稱">
		</b-form-input>
	</b-col>
</template>

<script>
export default {
	props: {
		count: String
	}
}
</script>

<style lang="sass" scoped>
</style>
