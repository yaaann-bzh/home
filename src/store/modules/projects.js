//import router from '../../router';

const state = {
    projectCathegories: [],
    projectsList: {},
    projects: {}
}

const mutations = {
    setCathegories(state, payload) {
        state.projectCathegories = payload;
    }
}

const actions = {
    async fetchProjectCathegories(context) {
        if (context.getters.projectCathegories.lentgh > 0) {
            return;
        }
        const url = context.getters.baseUrl + 'api/cathegories-simple';

        const response = await fetch(url);
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }

        context.commit('setCathegories', responseData);
    },
    async addProject(context, project) {
        const idToken = context.getters.idToken
        if (!idToken) {
            return;
        }
        
        const url = context.getters.baseUrl + 'api/admin/projects';

        project.author_id = context.getters.userId;
        const createdAt = new Date();
        project.created_at = createdAt.toISOString();

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + idToken
            },
            body: JSON.stringify(project)
        })

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed!');
            throw error;
        }

        return responseData.id;
    }
}

const getters = {
    projectCathegories(state) {
        return state.projectCathegories;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
};