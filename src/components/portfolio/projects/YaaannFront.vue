<template>
    <div>
        <app-project-template
                :url="url"
                :github="github"
                :gitlab="gitlab"
                :picture="picture">
            <template v-slot:title>
                Mon site personnel (frontend)
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
                        <li>Validation des formulaire avec <a href="https://logaretm.github.io/vee-validate/">VeeValidate</a></li>
                        <li>
                            Requêtes HTTP vers une API Symfony pour le Back-end :
                            <ul>
                                <li>Envoi des messages de contact</li>
                                <li>
                                    <em>
                                        (en projet) Système CRUD avec authentification par mot de passe pour l'ajout de projets à 
                                        mon portfolio avec persistance en base de données. <br>
                                        Les projets seront récupérés depuis la DB pour être affichés.
                                    </em>
                                </li>
                            </ul>
                            <em>Pour plus d'information sur le back-end, <router-link to="./yaaann-back" tag="a">c'est ici</router-link> !</em>
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