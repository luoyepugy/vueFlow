
<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import vueRouter from 'vue-router'

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

		}
	}

</script>