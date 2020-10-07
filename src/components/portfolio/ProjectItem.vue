<template>
	<li class="list-group-item list-group-item-action p-0" @click="defineShow">
		<router-link 
				:to="path"
				tag="div" 
				class="custom-link"
				active-class="custom-active-link">
			{{ title }}
		</router-link>	
	</li>
</template>

<script>
export default {
	props: {
		path: String,
		title: String,
		defineShow: Function
	}
}
</script>

<style>

</style>