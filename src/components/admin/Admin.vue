<template>
	<div>
		<div id="admin-header" class="d-none d-lg-block">
			<h1 class="h2 text-center">Espace admin</h1>
			<hr>
		</div>
		<div class="row align-items-start">
			<actions-list class="col-12 col-lg-4 col-xl-3"></actions-list>
				<div class="col-12 col-lg-8 col-xl-9">
				<router-view class="m-lg-2 p-lg-2"></router-view>
				<app-top></app-top>	
			</div>
		</div>
	</div>
</template>

<script>
import backToTopVue from '../items/backToTop.vue'
import ActionsListVue from './ActionsList.vue'
export default {

	components: {
		ActionsList: ActionsListVue,
		appTop: backToTopVue
	}
}
</script>

<style>

</style>