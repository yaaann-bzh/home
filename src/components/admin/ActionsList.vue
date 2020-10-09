<template>
	<div>
		<div v-for="item in items" :key="item.id" class="card">
			<div class="card-header bg-yaaann">
				{{ item.title }}
			</div>
			<ul class="list-group list-group-flush">
				<li  v-for="li in item.li" :key="li.id" class="list-group-item list-group-item-action p-0">
					<router-link
							:to="{name: li[1]}"
							tag="div" 
							class="custom-link"
							active-class="custom-active-link">
						{{ li[0] }}
					</router-link>
				</li>
			</ul>			
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: {
				projects: {
					title: 'Projets :',
					li: [
						['Liste', 'projectList'],
						['Ajouter', 'projectAdd']
					]
				},
/* 				test: {
					title: 'Test boucle :',
					li: [
						['Action 1', 'routeName'],
						['Action 2', 'routeName'],
						['Action 3', 'routeName']
					]
				} */
			}
		}	
	},
	created() {
	}
}
</script>

<style>

</style>