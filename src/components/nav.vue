<template>
	<b-navbar toggleable="md" v-bind:type="isIndex ? 'dark' : 'light'" class="px-5">
		<b-navbar-brand to="/" id="brand" class="px-5">
			<img v-if="isIndex" src="@/assets/img/logo.png" class="w-100" alt="國泰金控 Cathay Financial Holdings">
			<img v-else src="@/assets/img/logo-black.png" class="w-100" alt="國泰金控 Cathay Financial Holdings">
		</b-navbar-brand>
		<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
		<b-collapse is-nav id="nav-collapse">
			<b-navbar-nav class="mr-auto">
				<b-nav-item v-if="isIndex" to="/#to-jobs" class="px-3 px-md-2">職缺一覽</b-nav-item>
				<b-nav-item v-else to="/jobs" class="px-3 px-md-2">職缺一覽</b-nav-item>
				<b-nav-item to="/#intro" class="px-3 px-md-2">IT's Time 介紹</b-nav-item>
				<b-nav-item to="/#welfare" class="px-3 px-md-2">集團福利</b-nav-item>
				<b-nav-item to="/#to-ob" class="px-3 px-md-2">OB分享</b-nav-item>
				<b-nav-item to="/#schedule" class="px-3 px-md-2">申請流程</b-nav-item>
				<b-nav-item to="/#interview" class="px-3 px-md-2">面試會流程</b-nav-item>
			</b-navbar-nav>
			<b-navbar-nav>
				<b-nav-item to="/resume" id="to-resume">履歷投遞</b-nav-item>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
export default {
	name: 'Nav',
	data() {
		return {
			isIndex: this.$route.path === '/'
		}
	}
}
</script>

<style lang="sass" scoped>
	nav
		background-color: transparent

	#brand
		box-sizing: content-box
		width: 40%

		@include media-breakpoint-up(md)
			width: 20%

	li
		@include media-breakpoint-only(md)
			font-size: 1.45vw;

	#to-resume
		.nav-link
			border:
				width: 0.1em
				style: solid
				color: $light-green
				radius: 1.2em
			padding: 0.3em 1.2em
			color: $light-green
</style>
