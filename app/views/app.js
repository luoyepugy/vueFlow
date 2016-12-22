import Vue from 'vue'
import vueRouter from 'vue-router'

import routerConfig from '../config/route'

//=================================================

//======入口====
import App from './App.vue'

//======================global config=====================
Vue.config.debug = true

Vue.mixin({

})

//========================install=========================
// install router
Vue.use(vueRouter)


//======================routing===========================
const router = new vueRouter({
  hashbang: false
})

router.map(routerConfig)


router.redirect({
  '*': '/home'
})


//启动路由 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app')