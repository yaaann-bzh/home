<template>
	<div>
		<h2 class="h4">Ajouter un projet</h2>
		<project-form :successMessage="successMessage" :buttonText="buttonText" :project="project"></project-form>
	</div>
</template>

<script>
import ProjectFormVue from './ProjectForm.vue'

export default {
	data() {
		return {
			successMessage: 'Nouveau projet ajouté !',
			buttonText: 'Ajouter',
			project: {
                author_id: null,
                url: null,
                github_url: null,
                gitlab_url: null,
                pictures: null,
                title: '',
                short_title: '',
                tldr: '',
				content: '',
				cathegory_id: '',
                created_at: null
            },
		}
	},
	components: {
		ProjectForm: ProjectFormVue,
	}
}
</script>

<style>

</style>