
<template>
	<div>
		<h3>tabTitle</h3>
		<ul class="tab">
	        <li v-link="{path: '/tab/home', activeClass: 'hello'}">tab-home</li>
	        <li v-link="{path: '/tab/contact', activeClass: 'active'}">tab-contact</li>
	    </ul>
	    <a v-link="{path: '/home'}">进入首页</a>
		<router-view></router-view>
		<a v-link="{path: 'home', append: true, replace: true}">测试append属性，tab-home</a>
	</div>
</template>

<script type="text/ecmascript-6">
import tabHome from '../../components/tab-home.vue';
import tabContact from '../../components/tab-contact.vue';
import '../../assets/sass/test.scss';
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