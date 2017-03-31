
import Vue from 'vue'
import Vuex from 'vuex'

// 注册Vuex
Vue.use(Vuex);

// 存储state和mutations
const state = {
	infos: {}
};

const mutations = {
	CHANGE_INFOS (state, infos) {
		state.infos = infos;
	}
};

export default new Vuex.Store({
	state,
	mutations
});