<template>
	<b-container fluid id="footer">
		<b-row>
			<b-col>
				<br>
				<div id="contact">與我們聯繫：
				<a href="mailto:itstime@cathlife.com.tw">itstime@cathlife.com.tw</a>
				</div>
				<br>
				<div class="version">
					v1.1.2
				</div>
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

		.version
			position: absolute
			bottom: 2px;
			right: 8px;
			font-size: 0.2em;
			color: grey;

</style>
