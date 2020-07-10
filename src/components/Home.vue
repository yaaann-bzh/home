<template>
    <div class="mt-3 mt-lg-5 col-lg-10 offset-lg-1">
        <h2 class="h1">Qui suis-je ?</h2>
        <hr>
        <h1 class="h3">Yann Tachier, développeur web front/backend</h1>
        <p>J'ai tout d'abord travaillé pendant douze ans dans le génie climatique comme technicien en bureau d'étude, 
            puis j’ai entamé une reconversion comme <strong>développeur</strong>. Depuis l'obtention de mon diplôme avec <em>OpenClassrooms</em>, 
            je réalise des missions en freelance dans la création de sites et applications web.</p>
        <hr>
        <div>
            <h3 class="h5">Mes profils professionnels</h3>
            <app-ext-pro-links></app-ext-pro-links>
        </div>
        <hr>
        <div class="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-md-between align-item-center">
            <div class="flex-shrink-1 m-3">
                <img src="../assets/logos/logo_php.png" class="img-fluid logos" alt="PHP">
            </div>
            <div class="flex-shrink-1 m-3">
                <img src="../assets/logos/logo_mysql.png" class="img-fluid logos" alt="MySQL">
            </div>
            <div class="flex-shrink-1 m-3">
                <img src="../assets/logos/logo_vue.png" class="img-fluid logos" alt="Vue.js">
            </div>
            <div class="flex-shrink-1 m-3">
                <img src="../assets/logos/logo_js.png" class="img-fluid logos" alt="JavaScript">
            </div>
            <div class="flex-shrink-1 m-3">
                <img src="../assets/logos/logo_html.png" class="img-fluid logos" alt="HTML 5">
            </div>
            <div class="flex-shrink-1 m-3">
                <img src="../assets/logos/logo_css.png" class="img-fluid logos" alt="CSS 3">
            </div>
            <div class="flex-shrink-1 m-3">
                <img src="../assets/logos/logo_wp.png" class="img-fluid logos" alt="WordPress">
            </div>
        </div>
    </div>
</template>

<script>
import extProLinksVue from './links/extProLinks.vue';

export default {
    created() {
        document.body.classList.add('homepage');
    },
    beforeDestroy() {
        document.body.classList.remove('homepage');
    },
    components: {
        appExtProLinks: extProLinksVue
    }
}
</script>

<style>
.logos {
    height: 50px;
    width: 50px !important;
}

.homepage {
    background-image: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.9)), url("../assets/background/home.jpg");
	background-attachment: fixed;
	background-origin: border-box;
	background-size: cover;
} 

@media (min-width: 1280px) {
    .logos {
    max-height: 80px;
    }
}

</style>