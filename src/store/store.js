import Vue from 'vue';
import Vuex from 'vuex';

import metaData from "./modules/meta.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        metaData: metaData
    }
})