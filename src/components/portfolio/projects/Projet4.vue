<template>
    <div>
        <app-project-template
                :url="url"
                :github="github"
                :gitlab="gitlab"
                :picture="picture">
            <template v-slot:title>
                Créez un blog pour un écrivain
            </template>         
            <template v-slot:tldr>
                <p>Créer un blog en PHP avec utilisation DB en MySQL.</p>
                <p>Programmation orientée objet, architecture MVC.</p>
                <p>Pas de framework type Symfony.</p>
                <p>Interface administration avec ajout, modification, suppression de post</p>
                <p>Les utilisateurs peuvent poster des commentaires et en signaler au(x) administrateur(s)</p>
                <p>Administrateurs peuvent modérer ces commentaires</p>
            </template>
            <template v-slot:instruction>
                <div>
                    <p>Vous venez de décrocher un contrat avec Jean Forteroche, acteur et écrivain. Il travaille actuellement sur son prochain roman, "Billet simple pour l'Alaska". Il souhaite innover et le publier par épisode en ligne sur son propre site.</p>
                    <p>Seul problème : Jean n'aime pas WordPress et souhaite avoir son propre outil de blog, offrant des fonctionnalités plus simples. Vous allez donc devoir développer un moteur de blog en PHP et MySQL.</p>
                    <p>Vous développerez une application de blog simple en PHP et avec une base de données MySQL. Elle doit fournir une interface frontend (lecture des billets) et une interface backend (administration des billets pour l'écriture). On doit y retrouver tous les éléments d'un CRUD :</p>
                    <ul>
                        <li>Create : création de billets</li>
                        <li>Read : lecture de billets</li>
                        <li>Update : mise à jour de billets</li>
                        <li>Delete : suppression de billets</li>
                    </ul>
                    <p>Chaque billet doit permettre l'ajout de commentaires, qui pourront être modérés dans l'interface d'administration au besoin.
                    Les lecteurs doivent pouvoir "signaler" les commentaires pour que ceux-ci remontent plus facilement dans l'interface d'administration pour être modérés.</p>
                    <p>L'interface d'administration sera protégée par mot de passe. La rédaction de billets se fera dans une interface WYSIWYG basée sur TinyMCE, pour que Jean n'ait pas besoin de rédiger son histoire en HTML (on comprend qu'il n'ait pas très envie !).</p>
                    <p>Vous développerez en PHP sans utiliser de framework pour vous familiariser avec les concepts de base de la programmation. Le code sera construit sur une architecture MVC. Vous développerez autant que possible en orienté objet (au minimum, le modèle doit être construit sous forme d'objet).</p>
                    <p>Compétences évaluées</p>
                    <ul>
                        <li>Construire une base de données</li>
                        <li>Récupérer la saisie d’un formulaire utilisateur en langage PHP</li>
                        <li>Soutenir et argumenter ses propositions</li>
                        <li>Analyser les données utilisées par le site ou l’application</li>
                        <li>Récupérer les données d’une base</li>
                        <li>Créer un site Internet, de sa conception à sa livraison</li>
                        <li>Insérer ou modifier les données d’une base</li>
                        <li>Organiser le code en langage PHP</li>
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
            url: 'http://projet4.yaaann.ovh/',
            github: 'https://github.com/yaaann-bzh/oc-projet-4',
            gitlab: 'https://gitlab.com/yaaann/oc-projet-4',
            picture: 'forteroche'
        }
    },
    components: {
        appProjectTemplate: ProjectTemplateVue
    }
}
</script>

<style>

</style>