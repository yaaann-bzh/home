import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from "./store/store";
import wysiwyg from 'vue-wysiwyg'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faExternalLinkAlt, faArrowCircleRight, faHandPointLeft, faHourglassHalf, faHourglassEnd, faUserLock, faUserCog } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithubAlt, faCuttlefish, faGitlab, faEarlybirds, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config } from "./wysiwyg.js";
 
library.add(faHome, faLinkedinIn, faGithubAlt, faEnvelope, faEarlybirds, faCuttlefish, faExternalLinkAlt, faArrowCircleRight, faGitlab, faGithub, faHandPointLeft, faHourglassEnd, faHourglassHalf, faUserLock, faUserCog)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(wysiwyg, config);

new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')

