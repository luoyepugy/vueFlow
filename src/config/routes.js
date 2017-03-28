
const home = resolve => require(['../modules/index.vue'], resolve);
const detail = resolve => require(['../modules/detail.vue'], resolve);

const tab = resolve => require(['../modules/tab.vue'], resolve);
const tabHome = resolve => require(['../components/tab-home.vue'], resolve);
const tabContact = resolve => require(['../components/tab-contact.vue'], resolve);

export default {
	'/home': {
		name: 'home',
		component: home
	},
	'/detail/:id': {
		name: 'detail',
		component: detail
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