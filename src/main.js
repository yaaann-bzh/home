import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { store } from "./store/store";
import { routes } from "./routes.js";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faExternalLinkAlt, faArrowCircleRight, faHandPointLeft } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithubAlt, faCuttlefish, faGitlab, faEarlybirds, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faHome, faLinkedinIn, faGithubAlt, faEnvelope, faEarlybirds, faCuttlefish, faExternalLinkAlt, faArrowCircleRight, faGitlab, faGithub, faHandPointLeft)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
	//mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
			return savedPosition;
    }
    if (to.hash) {
			return { selector: to.hash };
		}
  }
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

