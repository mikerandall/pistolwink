import Vue from 'vue';
import VueResource from 'vue-resource';
import Router from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import Start from '@/components/Start';
import Narratives from '@/components/Narratives';
import Characters from '@/components/Characters';
import Timelines from '@/components/Timelines';
import mainNavigation from '@/components/main-navigation';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Router)
    .use(BootstrapVue)
    .use(VueResource)
    .component('main-navigation', mainNavigation);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Start',
            component: Start
        },
        {
            path: '/narratives',
            name: 'Narratives',
            component: Narratives
        },
        {
            path: '/characters',
            name: 'Characters',
            component: Characters
        },
        {
            path: '/timelines',
            name: 'Timelines',
            component: Timelines
        }
    ]
});
