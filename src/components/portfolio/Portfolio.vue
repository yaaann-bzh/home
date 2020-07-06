<template>
	<div>
		<div id="portfolio-header" class="d-none d-lg-block">
			<h1 class="h2">Portfolio</h1>
			<hr>
		</div>
		<div class="row">
			<transition name="list-slide" mode="out-in">
				<div class="col-12 col-lg-4 border-right border-success overflow-auto" :style="{maxHeight: maxContentHeight}" v-show="showList">
					<div v-if="projects.pro.length">
						<h2 class="h6 mt-2 text-center bg-secondary text-white p-1 rounded-sm">
							Missions professionnelles
						</h2>
						<ul class="list-group list-group-flush">
							<app-project-item v-for="project in projects.pro" :key="project.key" :path="project.path" :title="project.title" :defineShow="defineShow"></app-project-item>						
						</ul>
					</div>
					<div v-if="projects.oc.length">
						<h2 class="h6 mt-2 text-center  bg-secondary text-white p-1 rounded-sm">
							Projets réalisés pendant ma formation de Développeur Web chez
							<a href="https://openclassrooms.com/fr/paths/48-developpeur-web-junior" class="text-white" target="_blank">
								<u>OpenClassrooms</u>
							</a>
						</h2>
						<ul class="list-group list-group-flush">
							<app-project-item v-for="project in projects.oc" :key="project.key" :path="project.path" :title="project.title" :defineShow="defineShow"></app-project-item>							
						</ul>
					</div>
					<div v-if="projects.others.length">
						<h2 class="h6 mt-2 text-center bg-secondary text-white p-1 rounded-sm">
							Projets personnels
						</h2>
						<ul class="list-group list-group-flush">
							<app-project-item v-for="project in projects.others" :key="project.key" :path="project.path" :title="project.title" :defineShow="defineShow"></app-project-item>						
						</ul>
					</div>

				</div>
			</transition>
			<transition name="detail-slide" mode="out-in">
				<div class="col-12 col-lg-8" v-show="showDetail">
					<div class="d-lg-none">
						<button type="button" class="btn btn-outline-success btn-block mb-2"  @click="defineShow">
							<font-awesome-icon :icon="['fas', 'hand-point-left']" class="mr-2"/>Retour à la liste
						</button>
					</div>
					<transition name="slideup" type="out-in">
						<keep-alive>
							<router-view 
									class="m-lg-2 p-lg-2 overflow-auto bg-white rounded"
									:style="{maxHeight: maxContentHeight}">
							</router-view>
						</keep-alive>	
					</transition>
					<div class="d-lg-none text-center"><a href="#main-navbar"><u>Haut de page</u></a></div>	
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
import routes from "./projects/projects.js";
import ProjectItemVue from './ProjectItem.vue';

export default {
	data() {
		return {
			title: this.$route.meta.title,
			routes: routes,
			projects: {
				oc: [],
				others: [],
				pro: []
			},
			maxContentHeight: '',
			showList: true,
			showDetail: true
		}
	},	
	created() {
		this.routes.forEach(route => {
			if (route.meta) {
				switch (route.meta.list) {
				case 'oc':
					this.projects.oc.push({ path: route.path, title: route.meta.title})
					break;

				case 'others':
					this.projects.others.push({ path: route.path, title: route.meta.title})
					break;

				case 'pro':
					this.projects.pro.push({ path: route.path, title: route.meta.title})
					break;
			
				default:
					break;
				}
			}
		});
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
		appProjectItem: ProjectItemVue
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


@media (min-width: 992px) {
	.slideup-enter-active {
		animation: slideup-in 300ms ease-out forwards;
	}

	.slideup-leave-active {
		animation: slideup-out 300ms ease-out forwards;
		position: absolute;
	}
}


@keyframes slideup-in {
	from {
		transform: translateY(200%);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}

@keyframes slideup-out {
	from {
		transform: translateY(0);
		opacity: 1;
	}
	to {
		transform: translateY(-100%);
		opacity: 0;
	}
}

</style>