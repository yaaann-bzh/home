<template>
	<router-link 
			:to="path" 
			class="list-group-item list-group-item-action"
			active-class="list-group-item-success">
		{{ title }}
	</router-link>
</template>

<script>
export default {
	props:[
		'path',
		'title'
	]
}
</script>

<style>

</style>