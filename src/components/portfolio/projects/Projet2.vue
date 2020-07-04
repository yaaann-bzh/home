<template>
    <div>
        <app-project-template
                :url="url"
                :github="github"
                :gitlab="gitlab">
            <template v-slot:title>
                Créez un site en personnalisant un thème WordPress
            </template>         
            <template v-slot:tldr>
                <p>Créer un site pour l’office de tourisme de Nouméa avec WordPress.</p>
                <p>Rédaction de l’ensemble du contenu et construction suivant consigne (détail ci-dessous)</p>
                <p>Personnalisation d’un thème enfant, pas de pagebuilder.</p>
                <p>Optimisation du referencement à l’aide d’un plugin SEO.</p>
                <p>Réaliser une animation en CSS.</p>
            </template>
            <template v-slot:instruction>
                <div>
                    <p>Vous avez un client : l'office du tourisme de la ville de Nouméa en Nouvelle Calédonie ! Ils souhaitent un site web à l'image de la ville 
                    pour attirer des touristes et informer sur les activités proposées.</p>
                    <p>On vous indique que le site doit être créé sous WordPress et qu'il doit <strong>utiliser un thème personnalisé</strong>. 
                    Le client souhaite avoir un rendu unique pour son site : vous allez donc devoir adapter le thème à son image.</p>
                    <p>Voici les fonctionnalités attendues de la toute première version du site :</p>
                    <ul>
                        <li>Le site possèdera une page d’accueil, essentiellement graphique, avec un peu de texte, qui souhaite la bienvenue au visiteur et lui indique ce que l’on peut trouver sur le site. Des liens sont prévus pour accéder aux autres pages dans le corps de l’accueil. Un encart affichera un aperçu de la dernière actualité postée par la ville.</li>
                        <li>Un menu de navigation en haut de la page doit suivre le visiteur lorsqu’on va plus bas dans la page. Ce menu doit contenir les éléments suivants dans l’ordre : Accueil (avec une icône de maison à gauche du texte),  Actualités, Plus d’infos, Activités du mois, Contact</li>
                        <li>Un Champ de recherche doit aussi être présent pour faciliter l’accès au contenu. Il n'est pas nécessaire que celui-ci fonctionne pour cet exercice.</li>
                        <li>Les pages doivent être conçues en responsive, de telle sorte à ce que le site s’affiche correctement sur toutes les résolutions. La navigation sur mobile et tablettes doit être naturelle et ne doit pas nécessiter de zoomer.</li>
                        <li>Le client veut valider l'intérêt des animations en pur CSS 3, vous devez donc en proposer une sur l'une des pages.</li>
                    </ul>
                    <p>Voici les différentes pages que doit proposer le site:</p>
                    <ul>
                        <li>La page « Actualités » affiche la liste des billets d’actualité. Les billets ne seront pas signés par un auteur : ils seront tous postés au nom de la ville.</li>
                        <li>La page « Plus d’infos »  présente différents types d’activités sportives et culturelles organisées (musée de la ville, marathon… affichez-en au départ au moins 6 différentes). L'administrateur du site doit pouvoir indiquer le nom de l’activité, une description et une image.</li>
                        <li>La page « Activités du mois » liste au moins 10 activités à venir dans le mois sous forme de tableau (avec date, titre et court descriptif). Les lignes doivent se colorer au survol de la souris pour qu’on puisse se repérer. Un bouton « Inscription » à droite de chaque ligne du tableau ouvre un formulaire permettant de saisir son nom.  L'envoi du formulaire n'a pas d'effet pour cet exercice.</li>
                        <li>La page « Contact » affiche un formulaire de contact structuré avec les champs « Titre du message », « Votre nom », « Votre date de naissance », « Votre e-mail », une case à cocher « Résident de la ville », un menu déroulant « Nationalité « et un champ « Message » où on peut rédiger son message. Un petit texte d’aide s’affiche sous le champ date de naissance pour dire que le format JJ/MM/AAAA est attendu.</li>
                    </ul>
                    <p>Le site doit avoir été optimisé pour le référencement naturel et doit suivre les bonnes pratiques d'accessibilité (WCAG 2.0 niveau A).</p>           
                </div>
                <div>
                    <h2>Référentiel d'évaluation</h2>
                    <h3>Définir la structure de navigation du site</h3>
                    <ol>
                        <li>Le menu est présent et conforme à la demande</li>
                        <li>L'ensemble des pages demandées - et leur contenu - est présent</li>
                        <li>Les liens de navigation proposés sont pertinents</li>
                        <li>Il est possible de revenir à la page d'accueil en cliquant sur le logo</li>
                    </ol>
                    <h3>Assurer la cohérence graphique du site</h3>
                    <ol>
                        <li>Les différentes pages du site sont cohérentes visuellement</li>
                        <li>Des classes CSS pertinentes sont définies et utilisées</li>
                        <li>Les fichiers du thème de base ne sont pas altérés</li>
                        <li>Aucun builder de thème n'est utilisé</li>
                    </ol>
                    <h3>Adapter l'affichage en fonction de la taille de l'écran</h3>
                    <ol>
                        <li>Le viewport est configuré dans l'en-tête de la page HTML</li>
                        <li>(Au moins) Un breakpoint pertinent est défini</li>
                        <li>Une grille (avec ou sans Framework de type Bootstrap) et/ou des Media Queries sont utilisés </li>
                        <li>Le contenu s'affiche sur une seule colonne en mobilité et occupe intelligemment l'espace sur un grand écran</li>
                        <li>Les marges/padding sont adaptés</li>
                    </ol>
                    <h3>Appliquer les principes de SEO dans le code HTML</h3>
                    <ol>
                        <li>Un plugin de référencement (type Yoast SEO) est installé dans Wordpress</li>
                        <li>Le plugin valide un bon niveau de référencement</li>
                        <li>Un sitemap est présent</li>
                    </ol>
                    <h3>Créer une animation avec CSS3</h3>
                    <ol>
                        <li>L'animation est définie exclusivement à l'aide de CSS 3</li>
                        <li>L'animation fonctionne même si JavaScript est désactivé</li>
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
            url: 'https://projet2.yaaann.ovh/',
            github: '',
            gitlab: ''
        }
    },
    components: {
        appProjectTemplate: ProjectTemplateVue
    }
}
</script>

<style>

</style>