//import router from '../../router';

const state = {
    projectCathegories: [],
    projectList: [],
    projects: {}
}

const mutations = {
    setCathegories(state, payload) {
        state.projectCathegories = payload;
    },
    setProjectList(state, payload) {
        state.projectList = payload;
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
            throw new Error('Vous devez être authentifié pour faire cela.')
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
    },
    async fetchProjectList(context) {
/*         if (context.getters.projectList.lentgh > 0) {
            return;
        } */
        const url = context.getters.baseUrl + 'api/cathegories-detail';

        const response = await fetch(url);
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }

        context.commit('setProjectList', responseData);
    }
}

const getters = {
    projectCathegories(state) {
        return state.projectCathegories;
    },
    projectList(state) {
        return state.projectList;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
};