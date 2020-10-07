import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store.js'

import Home from './components/Home.vue';
import Skills from './components/Skills.vue';
import Educations from './components/Educations.vue';
import Experiences from './components/Experiences.vue';
import Contact from './components/Contact.vue';

const Portfolio = resolve => {
    require.ensure(['./components/portfolio/Portfolio.vue'], () => {
        resolve(require('./components/portfolio/Portfolio.vue'));
    })
};

const Login = resolve => {
    require.ensure(['./components/admin/Login.vue'], () => {
        resolve(require('./components/admin/Login.vue'));
    })
}

const Admin = resolve => {
    require.ensure(['./components/admin/Admin.vue'], () => {
        resolve(require('./components/admin/Admin.vue'));
    }, 'administration')
}

const ProjectAdd = resolve => {
    require.ensure(['./components/admin/ProjectAdd.vue'], () => {
        resolve(require('./components/admin/ProjectAdd.vue'));
    }, 'administration')
}

const error404 = resolve => {
    require.ensure(['./components/errors/404.vue'], () => {
        resolve(require('./components/errors/404.vue'));
    })
};

import Projects from './components/portfolio/projects/projects.js'

Vue.use(VueRouter)

const routes = [
    { path: '', component: Home, name: 'home' },
    { path: '/competences', component: Skills, name: 'skills' },
    { path: '/formations', component: Educations, name: 'educations' },
    { path: '/experiences', component: Experiences, name: 'experiences' },
    { path: '/portfolio/', component: Portfolio, name: 'portfolio', children: Projects},
    { path: '/contact', component: Contact, name: 'contact' },
    { path: '/login', component: Login , name: 'login' },
    { path: '/admin/', component: Admin, name: 'admin', children: [
        { path: 'projects/list', component: null , name: 'projectsList' },
        { path: 'projects/add', component: ProjectAdd , name: 'projectsAdd' },
        { path: 'projects/edit', component: null, name: 'projectsToEdit', children: [
            { path: '/:id', component: null, name: 'projectEdit' }
        ]},
        { path: 'projects/delete', component: null, name: 'projectsToDelete', children: [
            { path: '/:id', component: null, name: 'projectsDelete' }
        ]}
    ], beforeEnter: (to, from, next) => {
        if (!store.getters.isAuthenticated) {
            next({ name: 'login' });
        }
        next();
    }},
    { path: '/404', component: error404 },
    { path: '*', redirect: '/404' }
]

export default new VueRouter({
	//mode: 'history',
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
				return savedPosition;
		}
		if (to.hash) {
				return { selector: to.hash };
			}
	}
})