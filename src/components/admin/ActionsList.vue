<template>
	<b-navbar toggleable="lg">
		<b-navbar-toggle
				target="action-list" 
				role="button" 
				class="bg-secondary text-white btn-block dropdown-toggle d-lg-none p-2">
			Menu
		</b-navbar-toggle>
		<b-collapse id="action-list" v-model="isVisible" class="col-12">
			<div v-for="item in items" :key="item.id" class="card">
				<div class="card-header bg-yaaann">
					{{ item.title }}
				</div>
				<ul class="list-group list-group-flush">
					<li  v-for="li in item.li" :key="li.id" class="list-group-item list-group-item-action p-0" @click="collapseList">
						<router-link
								:to="{name: li[1]}"
								tag="div" 
								class="custom-link"
								active-class="bg-success text-white">
							{{ li[0] }}
						</router-link>
					</li>
				</ul>			
			</div>
		</b-collapse>
	</b-navbar>
</template>

<script>
export default {
	data() {
		return {
			isVisible: true,
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
		window.addEventListener('resize', this.collapseList);
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.collapseList);
	},
	methods: {
		collapseList() {
			if (window.innerWidth >= 992) {
				this.isVisible = true;
			} else {
				this.isVisible = !this.isVisible
			}
		}
	}
}
</script>

<style>

</style>