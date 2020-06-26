<template>
	<div class="container-fluid position-relative" id="page-content">
		<app-header></app-header>
		<div class="container">
			<div class="row">
				<div class="col-12 mt-3">
					<router-view></router-view>
				</div>
			</div>
		</div>
		<app-footer class="row position-absolute w-100"></app-footer>
	</div>
</template>

<script>
import HeaderVue from './components/Header.vue'
import FooterVue from './components/Footer.vue'

export default {
	components: {
		appHeader: HeaderVue,
		appFooter: FooterVue
	}
}
</script>

<style>
@font-face {
    font-family: 'open_sansregular';
    src: url('./assets/fonts/OpenSans-Regular-webfont.eot');
    src: url('./assets/fonts/OpenSans-Regular-webfont.eot?#iefix') format('embedded-opentype'),
         url('./assets/fonts/OpenSans-Regular-webfont.woff') format('woff'),
         url('./assets/fonts/OpenSans-Regular-webfont.ttf') format('truetype'),
         url('./assets/fonts/OpenSans-Regular-webfont.svg#open_sansregular') format('svg');
    font-weight: normal;
    font-style: normal;
}

body {
	font-family: 'open_sansregular', sans-serif;
}

footer {
	bottom: 0;
}

#page-content {
	min-height: 100vh;
}

</style>
