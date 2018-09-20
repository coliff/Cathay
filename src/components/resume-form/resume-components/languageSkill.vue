<template>
	<b-form-input type="text" :id="`languageSkills${count}`"
		@input="debounce"
		:name="`languageSkills${count}`"
		placeholder="請輸入語言/證照名稱">
	</b-form-input>
</template>

<script>
export default {
	props: {
		count: String
	},
	methods: {
		debounce: function() {
			this.$_.debounce(function(e) {
				this.filterKey = e.target.value;
			}, 300);
		}
	}
}
</script>

<style lang="sass" scoped>
	[id^=languageSkills]
		margin-bottom: 1rem
</style>
