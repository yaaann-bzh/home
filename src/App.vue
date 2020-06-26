<template>
	<div class="container">
		<app-header></app-header>
		<div class="row mt-5">
			<div class="col-12 mt-3">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
import HeaderVue from './components/Header.vue'

export default {
	components: {
		appHeader: HeaderVue
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

</style>
