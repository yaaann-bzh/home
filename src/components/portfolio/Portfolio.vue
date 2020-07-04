<template>
	<div>
		<div id="portfolio-header">
			<h1 class="h2">Portfolio</h1>
			<hr>
		</div>
		<div class="row">
			<div class="col-12 col-md-4 border-right border-success overflow-auto" :style="{maxHeight: maxContentHeight}">
				<div v-if="projects.pro.length">
					<h2 class="h6 mt-2 text-center bg-secondary text-white p-1 rounded-sm">
						Missions professionnelles
					</h2>
					<ul class="list-group list-group-flush">
						<app-project-item v-for="project in projects.pro" :key="project.key" :path="project.path" :title="project.title"></app-project-item>						
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
						<app-project-item v-for="project in projects.oc" :key="project.key" :path="project.path" :title="project.title"></app-project-item>							
					</ul>
				</div>
				<div v-if="projects.others.length">
					<h2 class="h6 mt-2 text-center bg-secondary text-white p-1 rounded-sm">
						Projets personnels
					</h2>
					<ul class="list-group list-group-flush">
						<app-project-item v-for="project in projects.others" :key="project.key" :path="project.path" :title="project.title"></app-project-item>						
					</ul>
				</div>

			</div>
			<div class="col-12 col-md-8">
				<keep-alive>
					<router-view 
							class="m-md-2 p-md-2 overflow-auto bg-white rounded"
							:style="{maxHeight: maxContentHeight}">
					</router-view>
				</keep-alive>			
			</div>
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
			maxContentHeight: ''
		}
	},
	watch: {
        '$route' (to) {
			this.title = to.meta.title;
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
	},
	mounted() {
		this.defineContentHeight();
	},
	methods: {
		defineContentHeight() {
			const headerHeight = parseFloat(getComputedStyle(document.querySelector('header')).height);
			const footerHeight = parseFloat(getComputedStyle(document.querySelector('footer')).height);
			const portfolioHeaderHeight = parseFloat(getComputedStyle(document.getElementById('portfolio-header')).height);
			const mainContainerPadding = parseFloat(getComputedStyle(document.getElementById('main-container')).paddingBottom) + parseFloat(getComputedStyle(document.getElementById('main-container')).paddingTop)
			this.maxContentHeight = window.innerHeight - headerHeight - footerHeight - portfolioHeaderHeight - mainContainerPadding + 'px';
		}
	},
	components: {
		appProjectItem: ProjectItemVue
	}
}
</script>

<style>

</style>