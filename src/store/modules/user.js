import router from '../../router'

const state = {
	idToken: null,
	userid: null
}

const mutations = {
	'AUTH_USER' (state) {
		state.idToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDE5OTQxNjAsImV4cCI6MTYwMTk5NDc2MCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoieS50YWNoaWVyQGdtYWlsLmNvbSJ9.RJuhk2yxQ4o6S0kY3fZ6WlB-9NpH5RZJnIYsa7qsCiyeLYlX_qBFkEOo_7D8-5u_HLftJ__1mn2q3ulhyfb61A"
		state.userid = 1;
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
	},
	idToken (state) {
		return state.idToken;
	},
	userId (state) {
		return state.userid;
	}
}

export default{
	state,
	mutations,
	actions,
	getters
}