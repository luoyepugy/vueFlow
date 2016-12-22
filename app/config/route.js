
// =================================== views ================================
// 首页
import home from '../views/home/home.vue';

// 应用中心
import appCenterList from '../views/appCenter/appCenterList.vue';
import appCenterAdd from '../views/appCenter/appCenterAdd.vue';


// =================================== routes ================================
export default {
	// 首页
	'/home': { // 页面url
        name: 'home', // 该路由名称
        component: home, // 该页面对应的view
        title: '首页' // 页面title
    },
    // 应用中心
    '/appcenter/list': {
    	name: 'appCenterList',
    	component: appCenterList,
    	title: '应用中心列表'
    },
    '/appcenter/add': {
    	name: 'appCenterAdd',
    	component: appCenterAdd,
    	title: '应用中心设置'
    }
}