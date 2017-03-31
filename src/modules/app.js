
import Vue from 'vue'
import vueRouter from 'vue-router'

import routerConfig from '../config/routes'
import validator from '../config/validator'

import component from '../components'
import filters from '../filters'
import directives from '../directives'

//======入口====
import App from './App.vue'

//======================global config=====================
Vue.config.debug = true

Vue.mixin({
	
})


Vue.use(vueRouter);

const router = new vueRouter({
  hashbang: false
});

// var App = Vue.extend({});

router.map(routerConfig);


router.redirect({
  '*': '/home'
});

router.start(App, '#app');
