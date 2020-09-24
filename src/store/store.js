import Vue from 'vue';
import Vuex from 'vuex';
//import axios from 'axios';

import secretKeys from "./modules/secret_keys.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        baseUrl: 'https://back.yaaann.fr/index.php/'
    },
    actions: {
    },
    modules: {
        secretKeys
    },
    getters: {
        baseUrl(state) {
            return state.baseUrl;
        }
    }
})