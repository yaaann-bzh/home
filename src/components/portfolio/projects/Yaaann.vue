<template>
    <div>
        <app-project-template
                :url="url"
                :github="github"
                :gitlab="gitlab"
                :picture="picture">
            <template v-slot:title>
                Mon site personnel
            </template>         
            <template v-slot:tldr>
                <p><em>Vous y êtes ;)</em></p>
                <p>Création d'un site personnel avec portfolio sous Vue.js</p>
                <p>Formulaire de contact <em>(en cours)</em></p>
            </template>
            <template v-slot:instruction>  
                <div>
                    <p>Voici les principales caractéristiques de ce projet :</p>
                    <ul>
                        <li>Site construit avec Vue-CLI</li>
                        <li>Utilisation de Vue-router pour la navigation</li>
                        <li>Mise en forme avec Bootstrap</li>
                        <li>
                            Formulaire de contact :
                            <br>
                            <em>(en cours de réalisation)</em>
                        </li>
                    </ul>
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
            github: 'https://github.com/yaaann-bzh/home',
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