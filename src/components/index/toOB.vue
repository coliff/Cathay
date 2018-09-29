<template>
	<b-container fluid id="to-ob">
		<b-row>
			<b-col>
				<br><br><br>
				<a href="https://ioh.tw/search/%E5%9C%8B%E6%B3%B0" target="_blank" rel="noopener">
					<picture>
						<source type="image/webp" srcset="@/assets/img/obsharing.webp">
						<img src="@/assets/img/obsharing.png" class="d-block py-5" id="ob" alt="OB一覽">
					</picture>
				</a>
				<picture>
					<source type="image/webp" srcset="@/assets/img/dialog.webp">
					<img src="@/assets/img/dialog.png" id="dialog" alt="快來聽聽學長姐說了什麼吧！">
				</picture>
				<picture>
					<source type="image/webp" srcset="@/assets/img/triangle.webp">
					<img src="@/assets/img/triangle.png" id="triangle" alt="邊邊工作室設計">
				</picture>
				<br><br><br>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: 'ToOB'
}
</script>

<style lang="sass" scoped>
	#to-ob
		background-color: $white

		.title
			color: $dark-green
			text-align: center

		#ob
			width: 200px
			margin-left: 13%

		#dialog
			position: absolute
			width: 170px
			left: 240px
			margin-left: 13%
			top: 65px
			opacity: 0.8


		#triangle
			position: absolute
			right: 10%
			width: 15%
			top: 7vw
</style>
