<template>
	<div>
		<div class="alert alert-danger text-center" role="alert" v-if="fetchError && !isLoading">
			{{ fetchError }}
		</div>
		<app-loading v-if="isLoading"></app-loading>
		<b-navbar toggleable="lg" class="row mb-2" v-if="projects.length && !isLoading">
			<b-navbar-toggle target="project-list" role="button" class="bg-secondary text-white btn-block dropdown-toggle d-lg-none p-2">Liste des projets</b-navbar-toggle>
			<b-collapse class="col-12" id="project-list" v-model="isVisible">
				<ul v-for="cathegory in projects" :key="cathegory.id" class="list-group">
					<div class="list-group-item bg-light" v-if="cathegory.projects.length">
						<strong>{{ cathegory.fullname }}</strong>
					</div>
					<ul class="list-group list-group-flush">
						<li 
							@click="collapseList(isVisible)"
							v-for="project in cathegory.projects"
							:key="project.id" 
							class="list-group-item list-group-item-action p-0 d-flex align-items-center nav-item">
								<router-link 
									active-class="custom-active-link"
									:to="{name: 'projectShow', params: { id: project.id }}"
									class="custom-link flex-grow-1">
										{{ project.short_title }}
								</router-link>
								<admin-button :id="project.id" :class="{ 'd-none': !admin }"></admin-button>
						</li>
					</ul>
				</ul>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminButtonVue from '../items/adminButton.vue';
import loadingVue from '../items/loading.vue';

export default {
	data() {
		return {
			isVisible: true,
			isLoading: false,
			fetchError: null,
		}
	},
	props: {
		admin: {
			type: Boolean,
			required: false,
			default: true
		}
	},
	computed: {
		...mapGetters({
			projects: 'projectList',
			isAuthenticated: 'isAuthenticated'
		})
	},
	methods: {
		collapseList(isVisible) {
			if (window.innerWidth >= 992 || !this.$route.params.id) {
				this.isVisible = true;
			} else {
				this.isVisible = !isVisible
			}
		},
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
		window.addEventListener('resize', this.collapseList);
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.collapseList);
	},
	components: {
		appLoading: loadingVue,
		adminButton: adminButtonVue
	}
}
</script>

<style>



</style>