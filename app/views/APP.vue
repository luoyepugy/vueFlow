<template>
	<div>
		<!-- main view -->
		<div className="view-container">
			<router-view class="view"></router-view>
		</div>

		<!-- side nav -->
		<side-nav></side-nav>
	</div>
</template>
<script type="text/ecmascript-6"> 
	import Vue from 'vue';
    import sideNav from '../components/sideNav.vue';

    export default {
    	data() {
            return {
                
            }
    	},
    	computed: {

    	},
    	ready() {

    	},
    	methods: {

    	},
    	components: {
    		sideNav
    	},
    	compiled() {

    	},
    	vuex: {
    		
    	}
    }
</script>