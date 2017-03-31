
<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import store from './vuex/store'
import {setInfos} from './vuex/actions'
import {infos} from './vuex/getters'

	export default {
		data() {
			return {
				
			}
		},
		created() {
			
		},
		compiled() {
			var that = this;
			this.$router.beforeEach(function(transition) {
				console.log(transition);
				transition.next();
			});
			this.$router.afterEach(function(transition) {

			});
		},
		methods: {

		},
		store: store,
		vuex: {
			actions: { 
				setInfos
			},
			getters: {
				infos
			}
		}
	}

</script>