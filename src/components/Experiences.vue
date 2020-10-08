<template>
  <div>
        <div class="bg-white card text-center mb-3 p-2 d-none d-md-block"> 
            <h1 class="h2">Mes expériences</h1>
        </div>
        <hr>
        <div class="bg-white card text-center text-md-left mb-3">
            <div class="card-header">
                <h2 class="h5">Développeur freelance</h2>
            </div>
            <div class="card-body">
                <p class="card-subtitle mb-2 text-muted">Depuis juin 2020</p>
                <p class="card-text">Création, modification, mise à jour de sites internet et applications web.</p>
                <app-ext-pro-links></app-ext-pro-links>
            </div>        
        </div>
        <div class="bg-white card text-center mb-3 p-2"> 
            <p class="lead text-muted m-0">Avant ma reconversion</p>
        </div>
        <div class="bg-white card text-center text-md-left mb-3">
            <div class="card-header">
                <h2 class="h5">Assistant Chargé d'affaires en Génie climatique</h2>
            </div>
            <div class="card-body">
                <p class="card-subtitle mb-3 mb-md-2 text-muted">Oct. 2018 à Avril 2019 : Fauchet SARL - La Verrie (85)</p>
                <p class="card-subtitle mb-3 mb-md-2 text-muted">Oct. 2013 à Sept. 2018 : Eiffage Energie - La Roche-sur-Yon (85)</p>
                <p class="card-subtitle mb-3 mb-md-2 text-muted">Sept. 2007 à Sept. 2013 : Boissonnade SAS - Rodez (12)</p>
                <ul class="card-text list-unstyled">
                    <li>Études de prix, devis</li>
                    <li>Etudes d’exécution : dimensionnement, notes de calcul, plans</li>
                    <li>Consultations des fournisseurs et sous-traitants, achat</li>
                    <li>Planification, suivi de chantier, suivi financier (budget, facturation)</li>
                    <li>Secteurs : tertiaire, industriel, hospitalier, laboratoires pharmaceutiques</li>
                    <li>Domaines : chauffage, ventilation, plomberie, réseaux de fluides, vapeur</li>
                </ul>
            </div>        
        </div>
  </div>
</template>

<script>
import extProLinksVue from './items/extProLinks.vue';
export default {
	created() {
        document.body.classList.add('experiences-page');
    },
    beforeDestroy() {
        document.body.classList.remove('experiences-page');
    },
    components: {
        appExtProLinks: extProLinksVue
    }
}
</script>

<style>
.experiences-page {
    background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.7)), url("../assets/background/network.jpg");
	background-attachment: fixed;
	background-origin: border-box;
	background-size: cover;
} 

</style>