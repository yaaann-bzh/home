const Project1 = resolve => {
    require.ensure(['./Projet1.vue'], () => {
        resolve(require('./Projet1.vue'));
    })
};
const Project2 = resolve => {
    require.ensure(['./Projet2.vue'], () => {
        resolve(require('./Projet2.vue'));
    })
};
const Project3 = resolve => {
    require.ensure(['./Projet3.vue'], () => {
        resolve(require('./Projet3.vue'));
    })
};
const Project4 = resolve => {
    require.ensure(['./Projet4.vue'], () => {
        resolve(require('./Projet4.vue'));
    })
};
const Project5 = resolve => {
    require.ensure(['./Projet5.vue'], () => {
        resolve(require('./Projet5.vue'));
    })
};
const Yaaann = resolve => {
    require.ensure(['./Yaaann.vue'], () => {
        resolve(require('./Yaaann.vue'));
    })
};



export default [
    { path:'' },
    { path: '/portfolio/projet-1', component: Project1, meta: { title: 'Projet 1 : HTML-CSS', list: 'oc'} },
    { path: '/portfolio/projet-2', component: Project2, meta: { title: 'Projet 2 : WordPress', list: 'oc'} },
    { path: '/portfolio/projet-3', component: Project3, meta: { title: 'Projet 3 : JavaScript', list: 'oc'} },
    { path: '/portfolio/projet-4', component: Project4, meta: { title: 'Projet 4 : PHP', list: 'oc'} },
    { path: '/portfolio/projet-5', component: Project5, meta: { title: 'Projet 5 : Projet final', list: 'oc'} },
    { path: '/portfolio/yaaann', component: Yaaann, meta: { title: 'Site personnel', list: 'others'} },
    { path: '/portfolio/*', redirect: '/404'}
] 