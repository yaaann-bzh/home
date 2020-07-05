<template>
    <div>
        <app-project-template
                :url="url"
                :github="github"
                :gitlab="gitlab"
                :picture="picture">
            <template v-slot:title>
                Présentez librement un projet personnel
            </template>         
            <template v-slot:tldr>
                <p>Pour ce projet, vous développerez l'application de votre choix en utilisant les 5 langages que vous avez appris : HTML, CSS, JS, PHP et SQL. 
                L'approche visuelle et le thème sont entièrement libres.</p>
            </template>
            <template v-slot:instruction>
                <div>
                    <p>Dans ce projet final, l’objectif est de démontrer que vous avez assimilé toutes les compétences vues dans les projets précédents de ce parcours. 
                        Vous devrez <strong>attester de votre degré d’autonomie dans l’organisation de votre travail et les choix techniques.</strong></p>
                    <p>Pour vous aider à orienter vos choix, voici le détail de certaines des compétences listées ci-après.</p>
                    <ul>
                        <li>
                            Organiser le code en langage PHP
                            <ul>
                                <li>Charger automatique des classes ou utilisation de l'autoload de Composer</li>
                                <li>Séparer du code en respectant l'architecture MVC</li>
                                <li>Utiliser des exceptions pour gérer les erreurs</li>
                                <li>Utiliser des namespaces pour organiser les classes</li>
                                <li>Créer des templates HTML avec syntaxe PHP alternative ou Twig</li>
                            </ul>
                        </li>
                        <li>
                            Organiser et manipuler les données
                            <ul>
                                <li>Créer et manipuler une session</li>
                                <li>Valider des données côté serveur en PHP</li>
                                <li>Valider des données côté client en JavaScript</li>
                                <li>Créer de requêtes HTTP en JavaScript avec récupération de données en JSON (Ajax)</li>
                                <li>Créer une pagination des données</li>
                                <li>Envoyer des fichiers au serveur</li>
                            </ul>
                        </li>
                        <li>
                            Sécuriser l'application
                            <ul>
                                <li>Supprimer des injections XSS dans les données saisies puis réaffichées</li>
                                <li>Supprimer des injections SQL avec PDO</li>
                                <li>Créer de mots de passes sécurisés avec un hachage fiable</li>
                                <li>Créer un système de login / logout</li>
                            </ul>
                        </li>
                    </ul>
                    <p>Compétences évaluées</p>
                    <ul>
                        <li>Découper, assembler et programmer les pages</li>
                        <li>Intégrer les contenus et les effets graphiques</li>
                        <li>Organiser et manipuler les données</li>
                        <li>Organiser le code en langage PHP</li>
                        <li>Sécuriser l'application</li>
                        <li>Stocker et récupérer les informations dans la base de données en langage SQL</li>
                        <li>Utiliser les langages de développement web dans un projet personnel</li>
                        <li>Assurer la conformité de votre application avec les langages PHP, JavaScript, HTML5 et CSS</li>
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
            url: 'http://projet5.yaaann.ovh/',
            github: 'https://github.com/yaaann-bzh/oc-projet-5',
            gitlab: 'https://gitlab.com/yaaann/oc-projet-5',
            picture: 'yannsjob'
        }
    },
    components: {
        appProjectTemplate: ProjectTemplateVue
    }
}
</script>

<style>

</style>