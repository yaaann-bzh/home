const state = {
    activeTab: '',
/*     description: 'Yann Tachier, développeur applications web et sites intenet PHP, Symfony, JavaScript, Vuejs et WordPress, à la Roche sur Yon en Vendée.',
    picture: '/turtle.png' */
}

const getters = {
    activeTab: state => {
        return state.activeTab;
    },
/*     description: state => {
        return state.description;
    },
    picture: state => {
        return state.picture;
    } */
}

const mutations = {
    'SET_ACTIVE_TAB' (state, path) {
        let activeTab = path.charAt(1).toUpperCase() + path.substring(2)
        state.activeTab = activeTab.indexOf('/') > 0 ? activeTab.substring(0, activeTab.indexOf('/')) : activeTab;
    }
}

const actions = {
    setActiveTab: ({commit}, path) => {
        commit('SET_ACTIVE_TAB', path);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}