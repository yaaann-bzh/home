//import router from '../../router';

const state = {
    projectCathegories: [],
    projectList: [],
    projects: {}
}

const mutations = {
    'SET_CATHEGORIES'(state, payload) {
        state.projectCathegories = payload;
    },
    'SET_PROJECT_LIST'(state, payload) {
        state.projectList = payload;
    },
    'ADD_PROJECT'(state, payload) {
        state.projects[payload.id] = payload;
        //Object.defineProperty(state.projects, payload.id, payload);
    }
}

const actions = {
    async fetchProjectCathegories(context) {
        if (context.state.projectCathegories.length) {
            return;
        }

        const url = context.getters.baseUrl + 'api/cathegories-simple';

        const response = await fetch(url);
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }

        context.commit('SET_CATHEGORIES', responseData);
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

        context.commit('ADD_PROJECT', responseData);
        return responseData.id;
    },
    async updateProject(context, project) {
        const idToken = context.getters.idToken
        if (!idToken) {
            throw new Error('Vous devez être authentifié pour faire cela.')
        }
        
        const url = context.getters.baseUrl + 'api/admin/projects/' + project.id;

        project.author_id = context.getters.userId;
        const updatedAt = new Date();
        project.updated_at = updatedAt.toISOString();

        const response = await fetch(url, {
            method: 'PUT',
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

        context.commit('ADD_PROJECT', responseData);
        context.dispatch('fetchProjectList', true);
    },
    async fetchProjectList(context, force = false) {
        if (context.state.projectList.length && !force) {
            return;
        }
        const url = context.getters.baseUrl + 'api/cathegories-detail';

        const response = await fetch(url);
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }

        context.commit('SET_PROJECT_LIST', responseData);
    },
    async fetchProject(context, id) {
        if (context.state.projects[id]) {
            return context.state.projects[id];
        }
        
        const url = context.getters.baseUrl + 'api/projects/' + id;

        const response = await fetch(url);
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }

        context.commit('ADD_PROJECT', responseData);

        return responseData;
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