import Home from './components/Home.vue';
import Skills from './components/Skills.vue';
import Educations from './components/Educations.vue';
import Experiences from './components/Experiences.vue';

const Portfolio = resolve => {
    require.ensure(['./components/portfolio/Portfolio.vue'], () => {
        resolve(require('./components/portfolio/Portfolio.vue'));
    }, 'portfolio')
};

const Projects = resolve => {
    require.ensure(['./components/portfolio/Projects.vue'], () => {
        resolve(require('./components/portfolio/Projects.vue'));
    }, 'portfolio')
};

const Instruction = resolve => {
    require.ensure(['./components/portfolio/Instruction.vue'], () => {
        resolve(require('./components/portfolio/Instruction.vue'));
    }, 'portfolio')
};

const error404 = resolve => {
    require.ensure(['./components/errors/404.vue'], () => {
        resolve(require('./components/errors/404.vue'));
    })
};

export const routes = [
    { path: '', component: Home },
    { path: '/competences', component: Skills },
    { path: '/formations', component: Educations },
    { path: '/experiences', component: Experiences },
    { path: '/portfolio', component: Portfolio, children: [
        { path: '', component: Projects },
        { path: ':name', component: Instruction }
    ] },
    { path: '/404', component: error404 },
    { path: '*', redirect: '/404' }
]