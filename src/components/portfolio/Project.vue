<template>
	<div>
		<transition name="fade" mode="out-in">
			<div class="alert alert-danger text-center" role="alert" v-if="fetchError && !isLoading">
				{{ fetchError }}
			</div>
		</transition>
		<transition name="fade" mode="out-in">
			<app-loading v-if="isLoading"></app-loading>
			<div v-else>
				<h3 class="text-center text-md-left h4">
					{{ project.title }}
				</h3>
				<div class="d-flex flex-wrap mt-1 mr-3 ml-3 mb-3 align-center">
					<p v-if="project.url" class="col-12 col-sm p-0 mt-2 mb-2 text-center text-sm-left">
						<a :href="project.url" class="btn btn-primary mt-1" role="button" target="_blank">
							Accéder au site
							<font-awesome-icon :icon="['fas', 'arrow-circle-right']" class="ml-2"/>
						</a>
					</p>
					<p v-if="project.github_url || project.gitlab_url" class="ml-auto mt-1 mb-1 text-center text-sm-right col-12 col-sm p-0">
						<span class="m-2">Dépôts :</span>
						<a :href="project.github_url" v-if="project.github_url" class="text-white btn btn-dark m-2" role="button" title="Depot Github" target="_blank">
							<font-awesome-icon :icon="['fab', 'github']" class=""/>
						</a>
						<a :href="project.gitlab_url" v-if="project.gitlab_url" class="btn btn-warning m-2" role="button" title="Depot Gitlab" target="_blank">
							<font-awesome-icon :icon="['fab', 'gitlab']" class=""/>
						</a>	
					</p>
				</div>
				<div v-if="isAuthenticated" class="col-12 mb-3">
					<hr>
					<div class="d-flex  justify-content-between">
						<div>
							<p class="mb-1">Création : {{ project.created_at | dateFormat }}</p>
							<p v-if="project.updated_at" class="mb-1">Modifié le : {{ project.updated_at | dateFormat }}</p>
						</div>
						<admin-button :id="project.id"></admin-button>
					</div>
				</div>
				<div class="card bg-light mt-1 ml-3 mr-3 mb-1">
					<div class="card-header">
						<strong>tl ; dr</strong>
					</div>
					<div class="card-body wysiwyg-cont" v-html="project.tldr">
						{{ project.tldr }}
					</div>
				</div>
				<div class="mt-3">
					<p class="lead"><u>Descriptif détaillé :</u></p>
					<span v-html="project.content" class="wysiwyg-cont"></span>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import adminButtonVue from '../items/adminButton.vue';
import loadingVue from '../items/loading.vue';

export default {
	data() {
		return {
            projectId: this.$route.params.id,
			project: {},
			isLoading: true,
			fetchError: null,			
		}
	},
	computed: {
		isAuthenticated() {
			return this.$store.getters.isAuthenticated;
		}
	},
	filters: {
		dateFormat(date) {
			date = date.substring(0, date.lastIndexOf('.'));
			let event = new Date(date);
			let day = event.getDate();
			let month = event.getMonth() + 1;
			let year = event.getFullYear();
			let time = event.toTimeString();
			return day + '-' + month + '-' + year + ' ' + time.substring(0, 5);
		}
	},
	methods: {
		async loadProject() {
            this.isLoading = true;
            try {
                this.project = await this.$store.dispatch('fetchProject', this.projectId);
            } catch (error) {
                this.fetchError = error.message || 'Something went wrong!';
            }
            this.isLoading = false;
		}
	},
	created() {
		this.loadProject();
	},
	watch: {
		'$route' (to) {
			this.projectId = to.params.id;
			this.loadProject();
		}
	},
	components: {
		appLoading: loadingVue,
		adminButton: adminButtonVue
	}
}
</script>

<style>

.wysiwyg-cont img {
	margin: 5px auto;
	max-width: 90%;
	max-height: 200px;
} 

.card-body p{
	margin-bottom: 0.6rem; 
}

.fade-enter-from, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active {
	transition: opacity 0.5s;
}

.fade-leave-active {
	transition: opacity 0.5s;
}

.fade-enter-to, .fade-leave-from {
	opacity: 1;
}


</style>