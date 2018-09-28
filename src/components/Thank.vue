<template>
	<b-container fluid class="no-padding">
		<Nav></Nav>
		<div class="thank">
			謝謝您的填寫，請點擊下方連結回到首頁。<br>
			<br><br>
			<b-link to="/" class="btn">回首頁</b-link>
		</div>
	</b-container>
</template>

<script>
import Nav from '@/components/nav';

export default {
	name: 'Thank',
	components: {
		Nav
	},
	data() {
		return {
			tabIndex: 0
		}
	},
	methods: {
    linkClass (idx) {
      if (this.tabIndex === idx) {
        return ['bg-light', 'text-muted']
      } else {
        return ['bg-light', 'text-muted']
      }
    }
  }
}
</script>

<style lang="sass" scoped>

	.thank
		position: relative
		padding: 100px 0
		text-align: center
		
		.btn
			padding: 10px 25px
			background: $green
			color: white

</style>
