<template>
    <validation-observer v-slot="{ handleSubmit }" tag="div" class="row">
        <form class="col-12 mt-3 mb-5" @submit.prevent="handleSubmit(onSubmit)" v-if="!sendingSuccess">
            <div class="row">
                <div class="form-group col-lg-6">
                    <label for="url">Url :</label>
                    <!-- Try to use regex in variable but doesnt work even in custom vamidator -->
                    <validation-provider mode="lazy" :rules="{ regex: /^https?:\/\/[a-z0-9/:%_+.,#?!@&=-]+$/i }" v-slot="{ errors }">
                        <input class="form-control" type="url" name="url" id="url" v-model.trim="project.url" :class="{invalid: errors[0]}">
                        <small class="form-text text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                </div>
                <div class="form-group col-lg-6">
                    <label for="cathegory_id">Cathégorie :</label>
                    <validation-provider rules="required" v-slot="{ errors }">
                        <select v-model="project.cathegory_id" id="cathegory_id" name="cathegory_id" class="form-control" v-if="!catLoading" :class="{invalid: errors[0]}">
                            <option value="">--Sélectionner une cathégorie--</option>
                            <option v-for="cathegory in cathegories" :key="cathegory.id" :value="cathegory.id">
                                {{ cathegory.fullname }}
                            </option>
                        </select>
                        <div class="form-control" v-else>loading ...</div>
                        <small class="form-text text-danger">{{ errors[0] }}</small>
                    </validation-provider>   
                </div>
            </div>
            <div class="row">
                <div class="form-group col-lg-6">
                    <label for="github_url">Dépôt Github</label>
                    <!-- Try to use regex in variable but doesnt work even in custom vamidator -->
                    <validation-provider mode="lazy" ::rules="{ regex: /^https?:\/\/[a-z0-9/:%_+.,#?!@&=-]+$/i }" v-slot="{ errors }">
                        <input class="form-control" type="text" name="github_url" id="github_url" v-model.trim="project.github_url" :class="{invalid: errors[0]}">
                        <small class="form-text text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                </div>
                <div class="form-group col-lg-6">
                    <label for="gitlab_url">Dépôt Gitlab</label>
                    <!-- Try to use regex in variable but doesnt work even in custom vamidator -->
                    <validation-provider mode="lazy" :rules="{ regex: /^https?:\/\/[a-z0-9/:%_+.,#?!@&=-]+$/i }" v-slot="{ errors }">
                        <input class="form-control" type="text" name="gitlab_url" id="gitlab_url" v-model.trim="project.gitlab_url" :class="{invalid: errors[0]}">
                        <small class="form-text text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                </div>
            </div>
            <div class="form-group">
                <label for="title">Titre</label>
                <validation-provider mode="lazy" rules="required|max:150" v-slot="{ errors }">
                    <input class="form-control" type="text" name="title" id="title" v-model.trim="project.title" :class="{invalid: errors[0]}">
                    <small class="form-text text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </div>
            <div class="form-group">
                <label for="short_title">Titre court</label>
                <validation-provider mode="lazy" rules="required|max:50" v-slot="{ errors }">
                    <input class="form-control" type="text" name="short_title" id="short_title" v-model.trim="project.short_title" :class="{invalid: errors[0]}">
                    <small class="form-text text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </div>
            <div class="form-group">
                <label for="tldr">Résumé TLDR</label>
                <validation-provider mode="lazy" rules="required|max:1000" v-slot="{ errors }">
                    <wysiwyg v-model.trim="project.tldr" class="" name="tldr" id="tldr" :class="{invalid: errors[0]}"/>
                    <small class="form-text text-danger">{{ errors[0] }}</small>
                </validation-provider>
            </div>
            <div class="form-group">
                <label for="content">Enoncé :</label>
                <validation-provider mode="lazy" rules="required|content:20,18000" v-slot="{ errors }">
                    <wysiwyg v-model.trim="project.content" class="" name="content" id="content" :class="{invalid: errors[0]}"/>
                    <small class="form-text text-muted">
                        {{ project.content.length }} / 18000
                    </small>                        
                    <small class="form-text text-danger">{{ errors[0] }}</small>
                </validation-provider>            
            </div>
            <submit-button :error="sendingError" :isLoading="isLoading"></submit-button>
        </form>
        <div v-else class="col-12 col-md-8 offset-md-2 mb-5 alert alert-success text-center lead">
            {{ successMessage }} -> 
            <router-link :to="{name: 'portfolio', params: { projectId: newProjectId }}">voir</router-link>
            <br>
            ou 
            <a href="#" role="button" @click="sendingSuccess = false">Ajouter un autre projet</a>
        </div>
    </validation-observer>
</template>

<script>
import "vue-wysiwyg/dist/vueWysiwyg.css"; 
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, max, min, regex } from "vee-validate/dist/rules";
import submitVue from '../form/submit.vue';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            // Try to use regex in variable but doesnt work even in custom vamidator
            regexUrl: '/^https?://[a-z0-9/:%_+.,#?!@&=-]+$/i',
            newProjectId: null,
            isLoading: false,
            catLoading: false,
            sendingSuccess: false,
            fetchError: null,
            sendingError: null 
        }
    },
    props: {
        successMessage: String,
        project: Object
    },
    components: {
        'validation-provider': ValidationProvider,
        'validation-observer': ValidationObserver,
        'submit-button': submitVue      
    },
    computed: {
        ...mapGetters ({
            cathegories: 'projectCathegories',
            userId: 'userId'
        })
    },
    methods: {
        async loadCathegories() {
            this.catLoading = true;
            try {
                await this.$store.dispatch('fetchProjectCathegories');
            } catch (error) {
                this.fetchError = error.message || 'Something went wrong!';
            }
            this.catLoading = false;
        },
        handleError() {
            this.sendingError = null;
        },
        async onSubmit() {
            this.isLoading = true;
            try {
                this.newProjectId = await this.$store.dispatch('addProject', this.project);
                this.sendingSuccess = true;
            } catch (error) {
                this.sendingError = error.message || 'Something went wrong!';
            }
            this.isLoading = false;
        }
    },
    created() {       
        this.loadCathegories();
    },
    beforeMount() {
        extend('regex', {
            ...regex,
            message: 'Le champ ne correspond pas à ce qui est attendu'
        });
        extend('required', {
            ...required,
            message: 'Merci de compléter ce champ'
        });
        extend('max', {
            ...max,
            message: 'Trop long ({max} max)'
        });
        extend('min', {
            ...min,
            message: 'Trop court ({min} mini)'
        });
        extend('content', {
            params: ['min', 'max'],
            validate(value, { min, max }) {
                const length = value.length;
                return length >= min && length <= max;
            },
            message: 'La longueur doit être comprise entre {min} et {max} caractères.'
        });
    }
}
</script>

<style>

</style>