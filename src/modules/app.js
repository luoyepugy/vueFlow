
import Vue from 'vue'
import vueRouter from 'vue-router'

import routerConfig from '../config/routes'

import component from '../components'
import filters from '../filters'
import directives from '../directives'

import '../assets/sass/app.scss';

Vue.config.debug = true;
Vue.use(vueRouter);

const router = new vueRouter({
  hashbang: false
});

var App = Vue.extend({});

router.map(routerConfig);
router.start(App, '#app');

router.redirect({
  '*': '/home'
})
