<template>
	<div>
		<div v-for="item in items" :key="item.id" class="card">
			<div class="card-header bg-success text-white">
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
						['Liste', 'projectsList'],
						['Ajouter', 'projectsAdd'],
						['Modifier', 'projectsToEdit'],
						['Supprimer', 'projectsToDelete']
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