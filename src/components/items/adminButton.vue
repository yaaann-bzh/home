<template>
	<div>
		<router-link
			v-if="isAuthenticated"
			:to="{name: 'projectEdit', params: { id: id }}"
			tag="a"
			type="button" class="btn btn-outline-info m-2">
				<font-awesome-icon icon="pen"/>
		</router-link>
		<router-link
			v-if="isAuthenticated"
			:to="{name: 'projectDelete', params: { id: id }}"
			tag="a"
			type="button" class="btn btn-outline-danger m-2">
				<font-awesome-icon icon="trash"/>
		</router-link>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	props: {
		id: Number
	},
	computed: {
		...mapGetters({
			isAuthenticated: 'isAuthenticated'
		})
	},
}
</script>

<style>

</style>