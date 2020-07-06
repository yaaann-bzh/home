<template>
    <div>
        <app-project-template
                :url="url"
                :github="github"
                :gitlab="gitlab"
                :picture="picture">
            <template v-slot:title>
                Mon site personnel (front)
            </template>         
            <template v-slot:tldr>
                <p><em>Vous y êtes ;)</em></p>
                <p>Création d'un site personnel avec portfolio sous Vue.js</p>
            </template>
            <template v-slot:instruction>  
                <div>
                    <p>Voici les principales caractéristiques de ce projet :</p>
                    <ul>
                        <li>Site construit avec Vue-CLI</li>
                        <li>Utilisation de Vue-router pour la navigation</li>
                        <li>Mise en forme avec Bootstrap</li>
                        <li>
                            Requêtes HTTP avec Vue-resource <br>
                            <em>Pour plus d'information sur le back-end, c'est <router-link to="./yaaann-back" tag="a">ici</router-link> !</em>
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