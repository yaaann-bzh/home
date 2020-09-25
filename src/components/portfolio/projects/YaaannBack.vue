<template>
    <div>
        <app-project-template
                :url="url"
                :github="github"
                :gitlab="gitlab"
                :picture="picture">
            <template v-slot:title>
                Mon site personnel (backend)
            </template>         
            <template v-slot:tldr>
                <p>Back-end de mon site personnel.</p>
                <p>Envoi des messages de contact.</p>
                <p>Interface administrateur avec authentification pour gestion des accès à l'API 
                    (oui j'ai mélangé dans la même application une API REST avec une application web...)</p>
                <p><em>(En cours) REST pour système de CRUD des projets de mon portfolio.</em></p>
            </template>
            <template v-slot:instruction>  
                <div>
                    <p>Il s'agit d'une application développée avec Symfony 5, constituée de 2 parties :</p>
                    <p><em>NOTA : Dans la vraie vie, ces deux parties devraient être séparée, c'est quelque chose que je ferais certainement dans l'avenir</em></p>
                    <ol>
                       <li>
                            <p><strong>L'interface administration :</strong></p>
                            <p>
                                Accessible après authentification et aui me permet de créer et gérer les utilisateurs de l'API
                                (création des clé API, niveau d'autorisation). <br>
                                Tous les utilisateurs sont stockés en base de données.
                            </p>
                        </li> 
                        <li>
                            <p><strong>L'API REST pour intéragir avec mon site en VueJS</strong></p>
                            <p>
                                Un point d'entrée s'occupe de l'envoi des messages de contact sur ma messagerie. 
                                Cette route est accessible avec une clé API en paramètre de requête. <br>
                                Il s'agit d'un hébergement mutualisé chez OVH donc : 
                                <ul>
                                    <li>L'envoi est un peu long...</li>
                                    <li>Le nombre de message par heure est limité, aussi n'hésitez pas à réessayer après quelques minutes si vous rencontrez un échec.</li>
                                </ul>
                            </p>
                            <p>
                                <em>
                                    <strong>(En cours de construction)</strong> <br>
                                    Une partie de l'API sera accessible avec authentification par mot de passe et permettra
                                    de stocker les projets de mon portfolio en base de données, de les modifier voire de les supprimer. <br>
                                    Ensuite mon application Vue récupérera ces projets pour les afficher.
                                </em>
                            </p>
                        </li>
                    </ol>
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
            github: 'https://github.com/yaaann-bzh/yaaann_back',
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