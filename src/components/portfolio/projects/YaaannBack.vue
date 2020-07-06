<template>
    <div>
        <app-project-template
                :url="url"
                :github="github"
                :gitlab="gitlab"
                :picture="picture">
            <template v-slot:title>
                Mon site personnel (back)
            </template>         
            <template v-slot:tldr>
                <p><em>En cours d'ajout</em></p>
                <p>Back-end de mon site personnel</p>
            </template>
            <template v-slot:instruction>  
                <div>
                    <p>Gestion du back-end de mon site personnel :</p>
                    <p><em>Fonctionnalités à venir !</em></p>
                </div>
            </template>
        </app-project-template>
    </div>
</template>

<script>
import ProjectTemplateVue from '../ProjectTemplate.vue'

export default {
    data() {
        return {
            url: '',
            github: '',
            gitlab: '',
            picture: ''
        }
    },
    components: {
        appProjectTemplate: ProjectTemplateVue
    }
}
</script>

<style>

</style>