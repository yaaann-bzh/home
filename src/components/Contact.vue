<template>
    <div>
        <h1 class="h2 text-center">Contact</h1>
        <hr>
        <p class="text-center">
            Vous pouvez me contacter en utilisant ce formulaire. <br>
            Je vous répondrai dans les meilleurs délais.
        </p>
        <validation-observer v-slot="{ handleSubmit }" tag="div" class="row">
            <transition name="fade">
                <form class="col-12 col-md-8 offset-md-2 mb-5" @submit.prevent="handleSubmit(onSubmit)" v-if="!sendingSuccess">
                    <div class="form-group">
                        <label for="fullname">Votre nom :</label>
                        <validation-provider mode="lazy" rules="required|maxLength:50" v-slot="{ errors }">
                            <input type="text" class="form-control" id="fullname" v-model.trim="fullname" :class="{invalid: errors[0]}">
                            <small class="form-text text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                    </div>
                    <div class="form-group">
                        <label for="email">Votre email :</label>
                        <validation-provider mode="lazy" rules="required|email|maxLength:50" v-slot="{ errors }">
                            <input type="email" class="form-control" id="email" v-model.trim="email" :class="{invalid: errors[0]}">
                            <small class="form-text text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                    </div>
                    <div class="form-group">
                        <label for="subject">Objet de votre message :</label>
                        <validation-provider mode="lazy" rules="required|maxLength:50" v-slot="{ errors }">
                            <input type="text" class="form-control" id="subject"  v-model.trim="subject" :class="{invalid: errors[0]}">
                            <small class="form-text text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        </div>
                    <div class="form-group">
                        <label for="content">Message :</label>
                        <validation-provider mode="lazy" rules="required|content:20,500" v-slot="{ errors }">
                            <textarea class="form-control" id="content" rows="5" v-model.trim="content" :class="{invalid: errors[0]}"></textarea>
                            <small class="form-text text-muted">
                                {{ content.length }} / 500
                            </small>                        
                            <small class="form-text text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                    </div>
                    <submit-button :error="sendingError" :isLoading="isLoading">
                        <span slot="text"><font-awesome-icon :icon="['far', 'envelope']"/> Envoyer</span>
                        <span slot="loading">Envoi...</span>
                    </submit-button>
                </form>
                <div v-else class="col-12 col-md-8 offset-md-2 mb-5 alert alert-success text-center lead">
                    Le message a bien été envoyé ! Merci
                </div>
            </transition>
        </validation-observer>
    </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email } from "vee-validate/dist/rules";
import { mapGetters } from "vuex";
import submitVue from './items/submit.vue';

export default {
    data () {
        return {
            fullname: '',
            email: '',
            subject: '',
            content:'',
            isLoading: false,
            sendingSuccess: false,
            sendingError: null
        }
    },
    components: {
        'validation-provider': ValidationProvider,
        'validation-observer': ValidationObserver,
        'submit-button': submitVue
    },
    computed: {
        ...mapGetters({
            baseUrl: 'baseUrl',
            contactApiKey: 'contactApiKey'
        })
    },
    methods: {
        onSubmit() {
            this.isLoading = true;
            const url = this.baseUrl + 'contact?apikey=' + this.contactApiKey;

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullname: this.fullname,
                    email: this.email,
                    subject: this.subject,
                    content: this.content
                })
            })
                .then((response) => {
                    this.isLoading = false;
                    if (response.ok) {
                        this.sendingError = null;
                        this.sendingSuccess = true;
                    } else {
                        this.sendingError = 'Désolé, le serveur à rencontré une erreur. Merci de réessayer ultérieurement.';
                    }
                })
                .catch(() => {
                    this.isLoading = false;
                    this.sendingError = 'Désolé, quelque chose s\'est mal passé. Merci de réessayer plus tard.';
                });
        }
    },
    beforeMount() {
        extend('email', {
            ...email,
            message: 'Merci de renseigner une adresse mail valide'
        });
        extend('required', {
            ...required,
            message: 'Merci de compléter ce champ'
        });
        extend('maxLength', {
            params: ['maxLength'],
            validate(value, { maxLength }) {
                return value.length <= maxLength;
            },
            message: '{maxLength} caractères maximum'
        });
        extend('content', {
            params: ['min', 'max'],
            validate(value, { min, max }) {
                const length = value.length;
                return length >= min && length <= max;
            },
            message: 'La longueur du message doit être comprise entre {min} et {max} caractères.'
        });
    }
}
</script>

<style scoped>
    .fade-enter {
		opacity: 0;
	}

	.fade-enter-active {
		transition: opacity 500ms 500ms;
	}

	.fade-leave-active {
        transition: opacity 500ms;
		opacity: 0;
	}

    .fade-move {
		transition: transform 500ms;
	}
</style>