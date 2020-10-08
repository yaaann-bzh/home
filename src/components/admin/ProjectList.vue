<template>
	<div>
		<div class="alert alert-danger text-center" role="alert" v-if="fetchError && !isLoading">
			{{ fetchError }}
		</div>
		<div v-if="isLoading">Chargement...</div>
		<div class="row" v-if="projects.length && !isLoading">
			<div class="col-12">
				<ul v-for="cathegory in projects" :key="cathegory.id" class="list-group">
					<div class="list-group-item bg-light" v-if="cathegory.projects.length">
						<strong>{{ cathegory.fullname }}</strong>
					</div>
					<ul class="list-group list-group-flush">
						<li 
							v-for="project in cathegory.projects"
							:key="project.id" 
							class="list-group-item list-group-item-action p-2 d-flex align-items-center">
								<router-link 
									:to="{name: 'projectShow', params: { id: project.id }}"
									class="custom-link flex-grow-1 mr-1 ml-1">
										{{ project.short_title }}
								</router-link>
								<router-link
									:to="{name: 'projectEdit', params: { id: project.id }}"
									tag="a"
									type="button" class="btn btn-outline-info mr-1 ml-1">
										<font-awesome-icon icon="pen"/>
								</router-link>
								<router-link
									:to="{name: 'projectDelete', params: { id: project.id }}"
									tag="a"
									type="button" class="btn btn-outline-danger mr-1 ml-1">
										<font-awesome-icon icon="trash"/>
								</router-link>
						</li>
					</ul>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			isLoading: false,
			fetchError: null,
		}
	},
	computed: {
		...mapGetters({
			projects: 'projectList'
		})
	},
	methods: {
		async loadProjects() {
            this.catLoading = true;
            try {
                await this.$store.dispatch('fetchProjectList');
            } catch (error) {
                this.fetchError = error.message || 'Something went wrong!';
            }
            this.catLoading = false;
		}
	},
	created() {
		this.loadProjects();
	}
}
</script>

<style>

</style>