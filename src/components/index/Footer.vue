<template>
	<b-container fluid id="footer">
		<b-row>
			<b-col>
				<br>
				<div id="contact">與我們聯繫：
				<a href="mailto:itstime@cathlife.com.tw">itstime@cathlife.com.tw</a>
				</div>
				<br>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: 'Footer'
}
</script>

<style lang="sass" scoped>
	#footer
		background-color: $white

		#contact
			text-align: center
			color: $black

		a
			color: $black

</style>
