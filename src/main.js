import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueRouter from 'vue-router';
import { routes } from "./routes.js";

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
