
const home = resolve => require(['../modules/index/index.vue'], resolve);
const detail = resolve => require(['../modules/index/detail.vue'], resolve);

const tab = resolve => require(['../modules/index/tab.vue'], resolve);
const tabHome = resolve => require(['../components/tab-home.vue'], resolve);
const tabContact = resolve => require(['../components/tab-contact.vue'], resolve);

export default {
	'/home': {
		name: 'home',
		component: home
	},
	'/detail/:id': {
		name: 'detail',
		component: detail,
		auth: false
	},
	'/tab': {
		name: 'tab',
		component: tab,
		subRoutes: {
			'/home': {
				component: tabHome
			}, 
			'/contact': {
				component: tabContact
			}
		}
	}

}