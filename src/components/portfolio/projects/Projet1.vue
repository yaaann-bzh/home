<template>
    <div>
        <app-project-template
                :url="url"
                :github="github"
                :gitlab="gitlab"
                :picture="picture">
            <template v-slot:title>
                Intégrez la maquette du site d'une agence Web
            </template>         
            <template v-slot:tldr>
                <p>J'ai à ma disposition une maquette numérique à reproduire à l'identique en HTML et CSS.</p>
                <p>Utilisation d'un Framework interdite. Le site devra être responsive de 2000 à 300 px.</p>
                <p>Le filtre du portfolio et le formulaire de contact ne sont pas foncionnels.</p>
            </template>
            <template v-slot:instruction>
                <div>
                    <p>Vous venez d'être embauché(e) par une agence Web, la WebAgency, qui réalise des sites web pour différents clients. 
                    Sophie, la directrice technique de l’agence vous informe que le site actuel est vieillissant et 
                    que son équipe a peu de temps pour travailler dessus.</p>
                    <p>Elle vous propose donc, pour votre première mission, de vous occuper de la refonte du site de l'agence.</p>
                    <p>Voici le mail que vous recevez à votre arrivée le premier jour.</p>
                    <div class="card p-2 font-italic mb-3">
                        <p>Bonjour et bienvenue à la WebAgency. <br>
                        J’espère que ta première journée se passe bien ! <br>
                        Pour débuter chez nous, je souhaite que tu t’occupes de la refonte de notre site, qui n’a pas été mis à jour depuis plusieurs mois. <br>
                        Voici quelques informations dont tu auras besoin pour te lancer : <br>
                        le site doit tenir sur une page avec un menu qui reste visible, en haut de la page, même lorsque l'on se déplace dans la page ; <br>
                        les différentes sections attendues sont :</p>
                        <ul>
                            <li>un premier écran d'accueil de bienvenue, très visuel ;</li>
                            <li>la liste des services offerts par l'agence ;</li>
                            <li>des exemples de projets déjà réalisés ;</li>
                            <li>une carte avec un formulaire de contact (on ne vous demande pas de faire marcher le formulaire, juste de l'afficher).</li>   
                        </ul>
                        <p>Le site devra être réalisé en HTML et CSS (sans framework tel que Bootstrap). <br>
                        Par ailleurs, j’aimerais également que tu rédiges le texte de présentation de WebAgency. <br>
                        Pour que tu ne partes pas de rien dans la refonte du site, notre graphiste, Mathieu a réalisé des maquettes que tu trouveras ci-dessous. <br>
                        Voici les différentes sections :</p>
                        <div class="row mb-2">
                            <img src="../../../assets/maquettes/maquette1.png" alt="Maquette 1" class="col-12 col-md-6">
                            <img src="../../../assets/maquettes/maquette2.png" alt="Maquette 2" class="col-12 col-md-6">
                            <img src="../../../assets/maquettes/maquette3.png" alt="Maquette 3" class="col-12 col-md-6">
                            <img src="../../../assets/maquettes/maquette4.png" alt="Maquette 4" class="col-12 col-md-6">
                        </div>
                        <p> Tu trouveras également ci-joint le premier découpage des fichiers de la maquette. Il ne reste plus que l’intégration à réaliser. <br>
                        Je te laisse choisir l’hébergeur pour me présenter la nouvelle version du site. Il peut s’agir d’Heroku, Hostinger, Free, Nexgate, 
                        GitHub Pages, Google Sites ou tout autre hébergeur de ton choix. <br>
                        Enfin, j’aimerais que tu crées un support de présentation comprenant les points suivants : </p>
                        <ul>
                            <li>ce que tu as compris du rôle d'intégrateur web et en quoi ta réalisation répond bien à ce rôle ;</li>
                            <li>les difficultés rencontrées et comment tu les as résolues ;</li>
                            <li>les perspectives d’amélioration : comment ferais-tu évoluer l’application si tu avais été libre d'en fixer les contraintes ?</li>
                        </ul>       
                        <p>Merci, <br>
                        Sophie</p>
                    </div>
                </div>
                <div>
                    <h4>Référentiel d'évaluation</h4>
                    <h5>Définir le contenu d'une page web à partir d'une maquette</h5>
                    <ol>
                        <li>L'ensemble du contenu défini par la maquette est présent</li>
                        <li>Le contenu texte est pertinent et grammaticalement correct</li>
                        <li>L'aspect visuel correspond à la maquette sur écran d'ordinateur</li>
                        <li>La maquette est adaptée de manière pertinente sur un terminal mobile</li>
                    </ol>
                    <p><em>Les sliders et onglets ne sont pas nécessairement fonctionnels. JavaScript n'est pas requis pour ce projet.</em></p>

                    <h5>Coder la structure d'une page web en HTML</h5>
                    <ol>
                        <li>La page HTML passe la validation w3c HTML sans erreur</li>
                        <li>Les balises HTML sont définies avec la sémantique HTML 5 pertinente</li>
                        <li>Les icônes sont crées avec un outil pertinent, type  font-awesome</li>
                    </ol>
                    <h5>Coder la présentation d'une page web en CSS</h5>
                    <ol>
                        <li>Le code CSS passe la validation w3c CSS</li>
                        <li>Le code CSS est écrit dans un ou plusieurs fichier CSS</li>
                        <li>Aucun code CSS n'est appliqué via un attribut style  dans une balise HTML</li>
                        <li>La zone avec le menu reste visible, en haut de la page, même lorsque l'on se déplace dans la page</li>
                    </ol>
                    <h5>Gérer la responsivité avec les Media Queries</h5>
                    <ol>
                        <li>Le viewport est configuré dans l'en-tête de la page HTML</li>
                        <li>(Au moins) Un breakpoint pertinent est défini</li>
                        <li>Des règles CSS @media  et/ou des feuilles de styles dédiées identifiées par un attribut media sont utilisées</li>
                        <li>Aucun Framework (type Bootstrap) n'est utilisé pour ce projet</li>
                    </ol>
                    <h5>Présenter une réalisation de manière professionnelle</h5>
                    <ol>
                        <li>La soutenance est préparée</li>
                        <li>La tenue et l'attitude sont appropriées</li>
                        <li>Le support de présentation est soigné, respecte la structure imposée et le temps imparti</li>
                        <li>Le temps de présentation est respecté</li>
                        <li>Les réponses aux questions sont pertinentes</li>
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
            url: 'http://projet1.yaaann.ovh/',
            github: 'https://github.com/yaaann-bzh/oc-projet-1',
            gitlab: 'https://gitlab.com/yaaann/oc-projet-1.git',
            picture: 'web_agency'
        }
    },
    components: {
        appProjectTemplate: ProjectTemplateVue
    }
}
</script>

<style>


</style>
