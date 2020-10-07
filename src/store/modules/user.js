import router from '../../router'

const state = {
	idToken: null,
	userId: null,
	expirationDate: null
}

const mutations = {
	'AUTH_USER' (state, payload) {
		state.idToken = payload.idToken;
		state.userId = payload.userId;
		state.expirationDate = payload.expirationDate;
	},
	'CLEAR_AUTH_USER' (state) {
		state.idToken = null;
		state.userId = null;
	}
}

const actions = {
	setLogoutTimer(context, expirationDate) {
		const expirationTime = expirationDate - new Date();
		let timeLeft = expirationTime / 1000;

		let countDown = setInterval(() => {
			timeLeft = timeLeft - 1;
		}, 1000);

		/* let autoLogout =  */setTimeout(() => {
			clearInterval(countDown);
			context.dispatch('logout');
		}, expirationTime)

		setTimeout(() => {
			if (confirm('Vous allez être déconnecté.e dans ' + timeLeft + ' secondes.\nRafraîchir la connection ?')) {
				clearInterval(countDown);
				/* clearTimeout(autoLogout);
				context.dispatch.refreshToken(); */
				alert('Cette fonction n\'est pas encore implémentée...\nDésolé, vous allez être déconnecté.e')
			}
		}, expirationTime * 0.5);
	},
	async login(context, authData) {
		const url = context.getters.baseUrl + 'api/login_check';

		const response = await fetch(url, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(authData)
		})

		const responseData = await response.json()

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed!');
            throw error;
		}

		const expirationDate = new Date(responseData.expirationDate)

		context.commit('AUTH_USER', {
			idToken: responseData.token,
			userId: responseData.userId,
			expirationDate: expirationDate
		});

		localStorage.setItem('token', responseData.token);
		localStorage.setItem('userId', responseData.userId);
		localStorage.setItem('expirationDate', expirationDate);
		context.dispatch('setLogoutTimer', expirationDate)
		
		router.replace({ name: 'admin' });
	},
	logout(context) {
		context.commit('CLEAR_AUTH_USER');
		localStorage.removeItem('expirationDate');
		localStorage.removeItem('token');
		localStorage.removeItem('userId');
		router.push({ name: 'login' });
	}
}

const getters = {
	isAuthenticated (state) {
		return state.idToken !== null && state.expirationDate > Date.now();
	},
	idToken (state) {
		return state.idToken;
	},
	userId (state) {
		return state.userId;
	}
}

export default{
	state,
	mutations,
	actions,
	getters
}