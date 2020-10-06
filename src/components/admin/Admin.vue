<template>
	<div>
		<div id="admin-header" class="d-none d-lg-block">
			<h1 class="h2 text-center">Espace admin</h1>
			<hr>
		</div>
		<div class="row">
			<actions-list class="col-12 col-lg-4 col-xl-3"></actions-list>
				<div class="col-12 col-lg-8 col-xl-9">
				<keep-alive>
					<router-view class="m-lg-2 p-lg-2"></router-view>
				</keep-alive>
				<div class="text-center"><a href="#main-navbar"><u>Haut de page</u></a></div>	
			</div>
		</div>
	</div>
</template>

<script>
import ActionsListVue from './ActionsList.vue'
export default {

	components: {
		ActionsList: ActionsListVue
	}
}
</script>

<style>

</style>