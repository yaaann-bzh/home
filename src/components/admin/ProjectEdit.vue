<template>
	<div>
		<h2 class="h4">Modifier le projet : {{ project.short_title }}</h2>
        <div class="alert alert-danger text-center" role="alert" v-if="fetchError && !isLoading">
			{{ fetchError }}
		</div>
		<project-form v-if="!isLoading" :successMessage="successMessage"  :buttonText="buttonText" :project="project"></project-form>
        <app-loading v-else></app-loading>
	</div>
</template>

<script>
import loadingVue from '../items/loading.vue';
import ProjectFormVue from './ProjectForm.vue'

export default {
	data() {
		return {
            successMessage: 'Le projet a été mofifié !',
			buttonText: 'Enregistrer',
            projectId: this.$route.params.id,
            project: {},
            isLoading: true,
			fetchError: null,
		}
	},
	components: {
		ProjectForm: ProjectFormVue,
		appLoading: loadingVue
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
    }
}
</script>

<style>

</style>