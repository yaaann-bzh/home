import router from '../../router'

const state = {
    idToken: null,
    userid: null
}

const mutations = {
	'AUTH_USER' (state) {
		state.idToken = true;
		state.userid = true;
	},
	'CLEAR_AUTH_USER' (state) {
		state.idToken = null;
		state.userid = null;
	}
}

const actions = {
	login({commit}) {
		commit('AUTH_USER');
	},
	logout({commit}) {
		commit('CLEAR_AUTH_USER');
		router.push({ name: 'home' });
	}
}

const getters = {
    isAuthenticated (state) {
    return state.idToken !== null
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}