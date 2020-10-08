<template>
	<div class="mt-lg-5">
		<h1 class="h3 text-center">Connexion</h1>
		<hr>
		<validation-observer v-slot="{ handleSubmit }" tag="div" class="row">
			<form @submit.prevent="handleSubmit(onSubmit)" class="border border-dark rounded-lg p-4 bg-light col-10 offset-1 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
				<div class="form-group">
					<label class="col-form-label" for="email">Email</label>
					<validation-provider mode="lazy" rules="required|email" v-slot="{ errors }">
						<input type="email" name="email" id="email" class="form-control form-control-lg" v-model.trim="email" :class="{invalid: errors[0]}">
						<small class="form-text text-danger">{{ errors[0] }}</small>
					</validation-provider>
				</div>
				<div class="form-group">
					<label class="col-form-label" for="password">Mot de passe</label>
					<validation-provider mode="lazy" rules="required" v-slot="{ errors }">
						<input type="password" name="password" id="password" class="form-control form-control-lg" v-model.trim="password" :class="{invalid: errors[0]}">
						<small class="form-text text-danger">{{ errors[0] }}</small>
					</validation-provider>
				</div>
				<submit-button :error="error" :isLoading="isLoading">
					<span slot="text">Se connecter</span>
					<span slot="loading">Connexion...</span>
				</submit-button>
			</form>
		</validation-observer>	
	</div>
</template>

<script>
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { email, required } from 'vee-validate/dist/rules'
import submitVue from '../form/submit.vue'

export default {
	data() {
		return {
			error: '',
			isLoading: false,
			email: '',
			password: '',
			buttonText: 'Se connecter',
			loadingText: 'Connexion...'
		}
	},
	components:{
		'validation-provider': ValidationProvider,
		'validation-observer': ValidationObserver,
		'submit-button': submitVue 
	},
	methods: {
		async onSubmit() {
			this.isLoading = true;
			try {
				const loginForm = {
					email: this.email,
					password: this.password
				}
				await this.$store.dispatch('login', loginForm)
			} catch (error) {
				this.error = error.message;
			}
			this.isLoading = false;
		}
	},
	beforeMount() {
		extend('required', {
			...required,
			message: 'Merci de compléter ce champ'
		}),
		extend('email', {
			...email,
			message: 'Renseigner une adresse valide'
		})
	}
}
</script>

<style>

</style>