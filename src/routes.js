import Home from './components/Home.vue';
import Skills from './components/Skills.vue';
import Educations from './components/Educations.vue';
import Experiences from './components/Experiences.vue';

const Portfolio = resolve => {
    require.ensure(['./components/portfolio/Portfolio.vue'], () => {
        resolve(require('./components/portfolio/Portfolio.vue'));
    })
};

const error404 = resolve => {
    require.ensure(['./components/errors/404.vue'], () => {
        resolve(require('./components/errors/404.vue'));
    })
};

import Projects from './components/portfolio/projects/projects.js'

export const routes = [
    { path: '', component: Home },
    { path: '/competences', component: Skills },
    { path: '/formations', component: Educations },
    { path: '/experiences', component: Experiences },
    { path: '/portfolio/', component: Portfolio, children: Projects},
    { path: '/404', component: error404 },
    { path: '*', redirect: '/404' }
]