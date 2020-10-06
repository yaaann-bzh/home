import Vue from 'vue';
import Vuex from 'vuex';
//import axios from 'axios';

import secretKeys from "./modules/secret_keys.js";
import user from "./modules/user.js"
import projects from "./modules/projects.js"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        activeTab: '',
        baseUrl: 'https://back.yaaann.fr/index.php/'
/*         baseUrl: 'http://yaaannback.localhost/index.php/'
 */    },
    mutations: {
        'SET_ACTIVE_TAB' (state, path) {
            let activeTab = path.charAt(1).toUpperCase() + path.substring(2)
            state.activeTab = activeTab.indexOf('/') > 0 ? activeTab.substring(0, activeTab.indexOf('/')) : activeTab;
        }
    },
    actions: {
        setActiveTab: ({commit}, path) => {
            commit('SET_ACTIVE_TAB', path);
        }
    },
    modules: {
        secretKeys,
        user,
        projects
    },
    getters: {
        activeTab: state => {
            return state.activeTab;
        },
        baseUrl(state) {
            return state.baseUrl;
        }
    }
})
