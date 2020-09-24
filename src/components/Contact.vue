<template>
    <div>
        <h1 class="h2 text-center">Contact</h1>
        <hr>
        <p class="text-center">
            Vous pouvez me contacter en utilisant ce formulaire. <br>
            Je vous répondrai dans les meilleurs délais.
        </p>
        <validation-observer v-slot="{ handleSubmit }" tag="div" class="row">
            <form class="col-12 col-md-8 offset-md-2 mb-5" @submit.prevent="handleSubmit(onSubmit)">
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
                    <label for="object">Objet de votre message :</label>
                    <validation-provider mode="lazy" rules="required|maxLength:50" v-slot="{ errors }">
                        <input type="text" class="form-control" id="object"  v-model.trim="object" :class="{invalid: errors[0]}">
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
                <button type="submit" class="btn btn-primary">
                    <font-awesome-icon :icon="['far', 'envelope']"/> Envoyer
                </button>
            </form>
        </validation-observer>
    </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email } from "vee-validate/dist/rules";
import { mapGetters } from "vuex";
/* import axios from 'axios';
 */
export default {
    data () {
        return {
            fullname: 'test',
            email: 'test@test.org',
            object: 'test',
            content:'Message de test de 20 caractère mini'
        }
    },
    components: {
        'validation-provider': ValidationProvider,
        'validation-observer': ValidationObserver
    },
    computed: {
        ...mapGetters({
            baseUrl: 'baseUrl',
            contactApiKey: 'contactApiKey'
        })
    },
    methods: {
        onSubmit() {
            const url = this.baseUrl + 'contact?apikey=' + this.contactApiKey;
            console.log(url);
            const formData = {
                    fullname: this.fullname,
                    email: this.email,
                    object: this.object,
                    content: this.content
                }

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
                .then((response) => {
                    console.log(response);
                })
                .catch(error => console.error(error));
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
	.invalid {
		border: 1px solid red;
		background-color: #ffc9aa;
	}
</style>