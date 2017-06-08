// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import Router from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import router from './router';
import mainNavigation from '@/components/main-navigation';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(Router)
    .use(BootstrapVue)
    .use(VueResource)
    .component('main-navigation', mainNavigation);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    router,
    components: {
        App
    }
});
