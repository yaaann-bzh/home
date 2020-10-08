<template>
	<div class="text-center" v-if="isVisible">
		<a href="#main-navbar">
			<u>Haut de page</u>
		</a>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isVisible: true
		}
	},
	created() {
		const bodyHeight = parseFloat(getComputedStyle(document.querySelector('body')).height);
		if (window.innerHeight >= bodyHeight) {
			this.isVisible = false
		}
	}
}
</script>

<style>

</style>