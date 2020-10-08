<template>
	<div>
		<div id="portfolio-header" class="d-none d-lg-block">
			<h1 class="h2">Portfolio</h1>
			<hr>
		</div>
		<div class="row">
			<div class="col-12 col-lg-4 border-right border-success overflow-auto" :style="{maxHeight: maxContentHeight}">
				<project-list></project-list>
			</div>
			<div class="col-12 col-lg-8">
				<router-view 
						class="m-lg-2 p-lg-2 overflow-auto bg-white rounded"
						:style="{maxHeight: maxContentHeight}">
				</router-view>	
				<app-top></app-top>
			</div>
		</div>
	</div>
</template>

<script>
import backToTopVue from '../items/backToTop.vue';
import ProjectListVue from './ProjectList.vue';

export default {
	data() {
		return {
			maxContentHeight: '',
			showList: true,
			showDetail: true
		}
	},	
	created() {
		window.addEventListener('resize', this.displayInit);
	},
	mounted() {
		this.displayInit();
	},
	beforeDestroy() {
		document.querySelector('body').classList.remove('overflow-hidden');
		window.removeEventListener('resize', this.displayInit);
	},
	methods: {
		defineContentHeight() {
			if (window.innerWidth >= 992) {
				const headerHeight = parseFloat(getComputedStyle(document.querySelector('header')).height);
				const footerHeight = parseFloat(getComputedStyle(document.querySelector('footer')).height);
				const portfolioHeaderHeight = parseFloat(getComputedStyle(document.getElementById('portfolio-header')).height);
				const mainContainerPadding = parseFloat(getComputedStyle(document.getElementById('main-container')).paddingBottom) + parseFloat(getComputedStyle(document.getElementById('main-container')).paddingTop)
				this.maxContentHeight = window.innerHeight - headerHeight - footerHeight - portfolioHeaderHeight - mainContainerPadding + 'px';
			} else {
				this.maxContentHeight = '';
			}
		},
		defineBodyOverflow() {
			if (window.innerWidth >= 992) {
				document.querySelector('body').classList.add('overflow-hidden');
			} else {
				document.querySelector('body').classList.remove('overflow-hidden');
			}
		},
		switchView() {
			this.showList = !this.showList;
			this.showDetail = !this.showList;
		},
		defineShow() {
			if (window.innerWidth < 992) {
				if (this.$route.path === "/portfolio") {
					this.showDetail = false;
					this.showList = true;
				} else {
					this.switchView();
				}
			} else {
				this.showDetail = true;
				this.showList = true;
			}
		},
		displayInit() {
			this.defineContentHeight();
			this.defineBodyOverflow();
			this.defineShow();
		}
	},
	components: {
		projectList: ProjectListVue,
		appTop: backToTopVue
	}
}
</script>

<style>
@media (max-width: 992px) {
	.list-slide-enter-active {
		animation: left-slide 300ms ease-out normal forwards;
	}

	.list-slide-leave-active {
		animation: left-slide 300ms ease-out reverse backwards;
		position: absolute;
	}
	.detail-slide-enter-active {
		animation: right-slide 300ms ease-out normal forwards;
	}

	.detail-slide-leave-active {
		animation: right-slide 300ms ease-out reverse backwards;
		position: absolute;
	}
}

@keyframes left-slide {
	from {
		transform: translateX(-100%);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}

@keyframes right-slide {
	from {
		transform: translateX(200%);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}


</style>