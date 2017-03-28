
<template>
	<div>
		<h3>tabTitle</h3>
		<ul class="tab">
	        <li v-link="{path: '/tab/home'}">tab-home</li>
	        <li v-link="{path: '/tab/contact'}">tab-contact</li>
	    </ul>
	    <a v-link="{path: '/home'}">进入首页</a>
		<router-view></router-view>
	</div>
</template>

<script type="text/ecmascript-6">
import tabHome from '../components/tab-home.vue';
import tabContact from '../components/tab-contact.vue';

	export default {
		data() {
			return {}
		},
		methods: {

		},
		components: {
			tabHome, 
            tabContact
		}
	}
</script>