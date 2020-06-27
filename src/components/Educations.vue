<template>
	<div>
		<h1 class="h2">Mes formations</h1>
		<hr>
		<div class="border rounded-lg p-3 mt-3 mb-3">
			<h2 class="h4 text-success">Titre RNCP Niveau III (Bac+2) - Développeur Web</h2>
			<p class="p-2 bg-light">
				<a href="https://openclassrooms.com/fr/paths/48-developpeur-web-junior">
					<img src="../assets/logos/logo_oc.png" alt="OpenClassrooms" style="height: 30px;"> 
					<u class="ml-3 text-dark">OpenClassrooms</u>
				</a>
			</p>
			<p>Mai à décembre 2019</p>
			<p>Donner vie aux maquettes visuelles d’un site, d’une application web. Traduire, en
				langage web, ses recommandations graphiques en rédigeant du code HTML, CSS,
				JavaScript et PHP.</p>
			<p>
				Les projets réalisés sont visibles dans mon 
				<router-link tag="a" type="button" role="button" class="btn btn-outline-success ml-2" to="/portfolio">
					Portfolio
					<font-awesome-icon :icon="['fas', 'arrow-circle-right']" class="ml-2"/>
				</router-link>
			</p>
		</div>
		<div class="border rounded-lg p-3 mt-3 mb-3">
			<h2 class="h4 text-success">DUT Génie civil - Option Génie Climatique</h2>
			<p class="p-2 bg-light">
				Université Paul Sabatier - Toulouse
			</p>
			<p>2005 à 2007</p>
		</div>
		<div class="border rounded-lg p-3 mt-3 mb-3">
			<h2 class="h4 text-success">Baccalauréat général - Série S</h2>
			<p class="p-2 bg-light">
				Lycée François d'Estaing - Rodez
			</p>
			<p>2005</p>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style>
@media (max-width: 700px) {
	h2 {
		font-size: 20px !important;
	}
	
}

</style>