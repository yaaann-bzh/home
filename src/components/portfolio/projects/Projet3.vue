<template>
    <div>
        <app-project-template
                :url="url"
                :github="github"
                :gitlab="gitlab">
            <template v-slot:title>
                Concevez une carte interactive de location de vélos
            </template>         
            <template v-slot:tldr>
                <p>Application simple page avec carte interactive pour réservation de vélos.</p>
                <p>Utilisation d'une API de cartographie et API JCDecaux pour les données de station en temps réel.</p>
                <p>développement Front seulement en JavaScript (+ HTML et CSS).</p>
                <p>Diaporama explicatif avec animation en JS.</p>
                <p>Utilisation Web Storage pour simuler la réservation.</p>
            </template>
            <template v-slot:instruction>
                <div>
                    <p>Vous devez développer une page de type "Single page Application" simulant la réservation 
                    de vélos dans une ville. Ces vélos sont répartis dans de nombreuses stations dans la ville. 
                    L'utilisateur doit pouvoir réserver un vélo depuis son navigateur (à condition qu'il reste des vélos disponibles à la station !). 
                    La réservation est alors temporairement enregistrée sur le navigateur du visiteur.</p>
                    <p>Cette application doit notamment, en s'appuyant sur JavaScript, afficher une carte avec la liste des stations de location de vélos disponibles dans la ville. </p>
                    <h3>Diaporama</h3>
                    <p>Vous devez afficher en haut de la page un diaporama de photos et de textes expliquant le fonctionnement de l'application. 
                    La logique du diaporama doit être écrite par vos soins. 
                    L’utilisation de tout plugin automatisant la logique de l’application est proscrite.</p>
                    <p>Le diaporama passe automatiquement à la diaporama suivante toutes les 5 secondes. L’utilisateur peut toutefois choisir de mettre le diaporama en pause. Il peut également reculer ou avancer manuellement 
                    à l’aide d’un clic de souris, ainsi qu’avec les touches gauche et droite de son clavier.</p>
                    <h3>Carte des vélos</h3>
                    <p>En-­dessous du diaporama se trouve une carte affichant en temps réel la liste des stations de location de vélos ainsi que leur disponibilité.  
                    La localisation de toutes les stations de vélos est affichée à l’aide de marqueurs.</p>
                    <p>La localisation et l'état de chaque station (ouverte, en travaux, combien de vélos et de places sont disponibles, etc.) est fourni via la plateforme OpenData de JC Decaux.</p>
                    <p><em>Les données doivent provenir de l'API temps réel.</em></p>
                    <p>Un clic sur un marqueur affiche l’état de la station dans un panneau construit en HTML et CSS à côté de la carte. </p>
                    <p>La carte doit être générée dynamiquement via un service de cartographie.</p>
                    <h3>Réservation d'un vélo</h3>
                    <p>Il doit être possible de réserver un vélo disponible à la station sélectionnée en :</p>
                    <ol>
                        <li>indiquant son nom et son prénom,</li>
                        <li>signant dans un champ libre implémenté à l’aide de l’API HTML5 Canvas.</li>
                    </ol>
                    <p><em>Vous devez écrire vous même le code du Canvas. Aucun plugin n’est autorisé. Vous devez être capable d’expliquer votre code lors de la soutenance.</em></p>
                    <p>Une fois la réservation validée,  un vélo est marqué comme réservé à cette station.</p>
                    <p><em>Pour ce projet, la réservation ne sera pas communiquée à un serveur. Seul le navigateur de l'utilisateur "retiendra" que le vélo a été réservé.</em></p>
                    <p>Les données de réservation seront stockées dans le navigateur à l’aide de l’API Web Storage et affichées en dessous du panneau. L'état de la réservation (s’il y en a une) est ainsi affiché, avec un décompte dynamique du temps restant avant expiration de la réservation.</p>
                    <p>Une réservation expire automatiquement au bout de 20 minutes et également lorsque le navigateur web se referme.</p>
                    <p><em>Le nom et le prénom sont toutefois conservés par le navigateur pour préremplir le formulaire de réservation lors d'un prochain usage, même si le navigateur a été fermé.</em></p>
                    <p>Il ne peut y avoir qu'une réservation à la fois. Si une nouvelle réservation a lieu, elle remplace la précédente.</p> 
                    <h3>Mockup de la page</h3>
                    <p>Le mockup ci-dessous résume le fonctionnement de la page à créer :</p>
                    <div class="text-center">
                        <img src="../../../assets/maquettes/mockup.png" alt="Mockup de la page">
                    </div>
                    <h3>Contraintes techniques</h3>
                    <p>Le code JavaScript doit être conçu en Programmation Orientée Objet</p>
                    <p>Vous pouvez vous appuyer sur :</p>
                    <ul>
                        <li>une librairie CSS telle que Bootstrap ou pure css,</li>
                        <li>une bibliothèque telle que jQuery pour manipuler le DOM.</li>
                    </ul>
                    <p><em>Aucun plugin jQuery (ou autre) ne doit être utilisé pour la logique du diaporama.</em></p>
                    <p>Le code doit exploiter une API cartographique et l'API temps réel de API JCDecaux. Il doit également utiliser les API Web Storage et Canvas.</p>                  
                </div>
                <div>
                    <h2>Référentiel d'évaluation</h2>
                    <h3>Créer des objets simples en JavaScript, contenant des méthodes et des propriétés</h3>
                    <ol>
                        <li>Le code JavaScript est développé en Orienté Objet</li>
                        <li>Le diaporama est conforme et fonctionnel</li>
                        <li>Aucun plugin n’est utilisé pour la logique de l’application (Diaporama, Canvas, Carte</li>
                    </ol>
                    <h3>Récupérer des données de formulaires en utilisant le langage JavaScript</h3>
                    <ol>
                        <li>Le canvas est fonctionnel</li>
                        <li>Le nom et prénom utilisent l’API LocalStorage</li>
                        <li>Les informations de réservations utilisent l’API SessionStorage</li>
                        <li>Les données de réservation sont affichées en dessous de la carte, s'il y a une réservation en cours</li>
                    </ol>
                    <h3>Faire des requêtes HTTP en langage JavaScript</h3>
                    <ol>
                        <li>La carte est récupérée dynamiquement depuis un web service cartographique</li>
                        <li>Les informations sur les stations utilisent l’API Live de JC Decaux</li>
                    </ol>
                    <h3>Écrire un code source lisible</h3>
                    <ol>
                        <li>Le code est correctement indenté</li>
                        <li>Les noms de classes, de méthode et de variables sont explicites (indifféremment en français ou en anglais)</li>
                        <li>Il y a une seule classe par fichier</li>
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
            url: 'https://projet3.yaaann.ovh/',
            github: '',
            gitlab: 'https://gitlab.com/yaaann/oc-projet-2'
        }
    },
    components: {
        appProjectTemplate: ProjectTemplateVue
    }
}
</script>

<style>

</style>