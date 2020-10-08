import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from "./store/store";
import wysiwyg from 'vue-wysiwyg'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faExternalLinkAlt, faArrowCircleRight, faHandPointLeft, faHourglassHalf, faHourglassEnd, faUserLock, faUserCog, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithubAlt, faCuttlefish, faGitlab, faEarlybirds, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config } from "./wysiwyg.js";
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faTrash, faPen, faHome, faLinkedinIn, faGithubAlt, faEnvelope, faEarlybirds, faCuttlefish, faExternalLinkAlt, faArrowCircleRight, faGitlab, faGithub, faHandPointLeft, faHourglassEnd, faHourglassHalf, faUserLock, faUserCog)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(wysiwyg, config);

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')

