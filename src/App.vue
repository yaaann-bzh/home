<template>
	<div class="container-fluid position-relative" id="page-content">
		<app-header></app-header>
		<div class="container mt-2 mt-md-0 pt-md-5 pb-5" id="main-container">
			<div class="row">
				<transition name="app-slide" mode="out-in">
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
import { mapActions, mapGetters } from 'vuex';

export default {
	created() {
		this.setActiveTab(this.$route.path);
	},
	watch: {
		'$route' (to) {
			this.setActiveTab(to.path);
		}
	},
	methods: {
		...mapActions({
			setActiveTab: 'setActiveTab'
		})
	},
	computed: {
		...mapGetters([
			'activeTab',
		])
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

.bg-yaaann {
	background-color: #424242 !important; 
	color: white;
}

.app-slide-enter-active {
	animation: app-slide-in 0.5s ease-out forwards;
}

.app-slide-leave-active {
	animation: app-slide-out 0.5s ease-out forwards;
	position: absolute;
}

@keyframes app-slide-in {
	from {
		transform: translateX(200%);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}

@keyframes app-slide-out {
	from {
		transform: translateX(0);
		opacity: 1;
	}
	to {
		transform: translateX(-100%);
		opacity: 0;
	}
}

input.invalid, textarea.invalid, select.invalid{
		border: 1px solid red;
		background-color: #ffc9aa;
	}

.custom-link {
	padding: 0.75rem 1.25rem;
	cursor: pointer;
	color: rgb(73, 80, 87);
}
.custom-active-link {
	background-color: rgb(195, 230, 203);
	color: rgb(21, 87, 36);
}

</style>
