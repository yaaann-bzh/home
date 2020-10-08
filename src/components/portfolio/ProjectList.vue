<template>
	<div>
		<div class="alert alert-danger text-center" role="alert" v-if="fetchError && !isLoading">
			{{ fetchError }}
		</div>
		<app-loading v-if="isLoading"></app-loading>
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
							class="list-group-item list-group-item-action p-0 d-flex align-items-center">
								<router-link 
									active-class="custom-active-link"
									:to="{name: 'projectShow', params: { id: project.id }}"
									class="custom-link flex-grow-1">
										{{ project.short_title }}
								</router-link>
								<router-link
									v-if="isAuthenticated"
									:to="{name: 'projectEdit', params: { id: project.id }}"
									tag="a"
									type="button" class="btn btn-outline-info m-2">
										<font-awesome-icon icon="pen"/>
								</router-link>
								<router-link
									v-if="isAuthenticated"
									:to="{name: 'projectDelete', params: { id: project.id }}"
									tag="a"
									type="button" class="btn btn-outline-danger m-2">
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
import loadingVue from '../items/loading.vue';

export default {
	data() {
		return {
			isLoading: false,
			fetchError: null,
		}
	},
	computed: {
		...mapGetters({
			projects: 'projectList',
			isAuthenticated: 'isAuthenticated'
		})
	},
	methods: {
		async loadProjects() {
            this.isLoading = true;
            try {
                await this.$store.dispatch('fetchProjectList');
            } catch (error) {
                this.fetchError = error.message || 'Something went wrong!';
            }
            this.isLoading = false;
		}
	},
	created() {
		this.loadProjects();
	},
	components: {
		appLoading: loadingVue
	}
}
</script>

<style>

</style>