<template>
	<b-form-input type="text" :id="`languageSkills${count}`"
		:name="`languageSkills${count}`"
		placeholder="請輸入語言/證照名稱">
	</b-form-input>
</template>

<script>
import _ from 'lodash';

export default {
	props: {
		count: String
	}
}
</script>

<style lang="sass" scoped>
	[id^=languageSkills]
		margin-bottom: 1rem
</style>
