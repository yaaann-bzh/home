<template>
	<div class="text-center">
		<h2 class="h4">Supprimer le projet : {{ project.short_title }}</h2>
		<div v-if="!isLoading && !isDeleted">
			<p>Etes-vous sûr.e de vouloir supprimer ce projet ?</p>
			<p><strong>{{ project.title }}</strong></p>
			<p>Cette action est irréversible.</p>
		</div>
		<div v-if="isLoading">Chargement...</div>
		<div v-if="isDeleted"><strong>Projet supprimé</strong></div>
		<div class="d-flex justify-content-around">
			<button type="button" class="btn btn-light m-2" @click="cancelDelete" :disabled="isDeleting">Retour</button>
			<button v-if="!isDeleted" type="button" class="btn btn-primary m-2" @click="updateProject" :disabled="isDeleting || isLoading">Modifier</button>
			<button v-if="!isDeleted" type="button" class="btn btn-danger m-2" @click="confirmDelete" :disabled="isDeleting || isLoading">
				<span v-if="!isDeleting">Supprimer</span>
				<span v-else>Suppression...</span>
			</button>
		</div>
		<div class="alert alert-danger text-center" role="alert" v-if="error && !isLoading">
			{{ error }}
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
            projectId: this.$route.params.id,
            project: {},
			isLoading: true,
			isDeleting: false,
			isDeleted: false,
			error: null,
			confirmation: ''
		}
    },
    methods: {
		cancelDelete() {
			this.$router.push({ name: 'projectList' })
		},
		updateProject() {
			this.$router.push({ name: 'projectEdit', params: { id: this.projectId }})
		},		
		async confirmDelete() {
			this.isDeleting = true;
            try {
                await this.$store.dispatch('deleteProject', this.projectId);
            } catch (error) {
                this.error = error.message || 'Something went wrong!';
			}
			this.isDeleted = true
            this.isDeleting = false;
		},
		async loadProject() {
            this.isLoading = true;
            try {
                this.project = await this.$store.dispatch('fetchProject', this.projectId);
            } catch (error) {
                this.error = error.message || 'Something went wrong!';
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