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
.custom-link {
	padding: 0.75rem 1.25rem;
	cursor: pointer;
	color: rgb(73, 80, 87);
}
.custom-active-link {
	background-color: rgb(195, 230, 203);
	color: rgb(21, 87, 36);
}
</style>