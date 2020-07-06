<template>
	<div class="container-fluid position-relative" id="page-content">
		<app-header></app-header>
		<div class="container pt-md-5 pb-5" id="main-container">
			<div class="row">
				<transition name="slide" type="out-in">
					<router-view class="col-12 col-md-10 offset-md-1"></router-view>
				</transition>
			</div>
		</div>
		<app-footer class="row position-absolute w-100"></app-footer>
	</div>
</template>

<script>
import HeaderVue from './components/Header.vue'
import FooterVue from './components/Footer.vue'

export default {
	methods: {
		changeBackground() {

		}
	},
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

footer {
	bottom: 0;
}

#page-content {
	min-height: 100vh;
}

hr{
	background-color: #28a745 !important;
}

.slide-enter-active {
	animation: slide-in 300ms ease-out forwards;
}

.slide-leave-active {
	animation: slide-out 300ms ease-out forwards;
	position: absolute;
}

@keyframes slide-in {
	from {
		transform: translateX(200%);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}

@keyframes slide-out {
	from {
		transform: translateX(0);
		opacity: 1;
	}
	to {
		transform: translateX(-100%);
		opacity: 0;
	}
}

</style>
