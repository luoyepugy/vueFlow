
<template>
	<h4 id="el">detail</h4>
	<div>hello: {{res.id}}</div>

	<div>========= vue过滤器开始 ==========</div>
	<p>首字母大写-capitalize: {{res.test | capitalize}}</p>
	<p>字母大写-uppercase: {{res.test  | uppercase}}</p>
	<p>货币格式-currency: {{100 | currency}}</p>
	<p>json格式转字符串-json：{{obj | json}}</p>
	<ul>
		<p>限制过滤-limitBy，结合v-for数组使用</p>
		<li v-for="item in array">{{item | limitBy 2 1}}</li>
	</ul>
	<div>
		<p>filerBy过滤数据，结合input使用，热搜索</p>
		<input type="text" name="search" val="" v-model="query" debounce="500" >
		<table>
			<thead>
				<th>姓名</th>
				<th>年龄</th>
			</thead>
			<tbody v-for="item in array2 
						| filterBy query in 'name'
						| orderBy 'age' -1">
				<td>{{item.name}}</td>
				<td>{{item.age}}</td>
			</tbody>
		</table>
	</div>
	<p>自定义过滤器字符限制-characterLimit：{{res.charater | characterLimit '10'}}</p>
	<a @click="getList()">改变test的值</a>

	<div>========= vue指令开始 ==========</div>
	<p v-if="res.id>2">v-if指令块</p>
	<p v-else>v-else指令块</p>
	<p v-text="res.test"></p>
	<p v-html="res.html"></p>
	<p v-bind:text-content.prop="text"></p>
	<p v-pre>{{this will not be compiled}}</p>
	<p>v-model指令.number修饰符将字符串转为数字：<input type="text" v-model="number" number val="">a{{number}}b</p>
	<p v-cloak>v-cloak指令：{{res.charater}}</p>
	<p v-once>v-once指令：只渲染一次{{res.test}}</p>
	<p v-once>v-once第二次：{{res.test}}</p>
	<p><select v-model="selected" options="myOptions"></select></p>
	<p v-bg="red">ewfaaaaaaaaaaafwawawawawawawawawawa</p>
	<p v-test:red data-color="red" data-el="test">自定义指令：v-test</p>
</template>

<style>
	[v-clock] {
		display: none;
	}
</style>

<script type="text/ecmascript-6">

	export default {
		data() {
			return {
				red: 'orange',
				selected: 'b',
				res: {
					test: 'dfMew',
					charater: '的点点滴滴多多空荡荡的多多多多多绿',
					html: '<b>加粗字体</b>'
				},
				array: ['apple', 'red', 'orange', 'yellow'],
				obj: {
					name: 'zh',
					age: 25
				},
				array2: [
					{
						name: 'jamme',
						age: 16
					},
					{
						name: 'daf',
						age: 20
					},
					{
						name: 'ewt',
						age: 25
					},
					{
						name: 'yu6ty',
						age: 17
					}
				] ,
				myOptions: [{
					text: '红色',
					value: 'red'
				}, {
					text: '橘色',
					value: 'orange'
				}],
				myOptions2: [{
					label: 'AB',
					options: ['a', 'b']
				}, {
					label: 'CD',
					options: ['c', 'd']
				}],
				myOptions3: ['a','b','c']
			}
		},
		// 。。。生命周期开始。。。
		init() {
			console.log('init..');
			
		},
		created() {
			console.log('created..');
			this.res.id = this.$route.params.id;
			this.res.test = 'wef';

			console.log(this.res.test);
		},
		beforeCompile() {
			console.log('beforeCompile..');
			
			console.log(this.res.test);
		},
		compiled() {
			console.log('compiled..');
			
			console.log(this.res.test);
		},
		attached() {
			console.log('attached..');
			
			console.log(this.res.test);
		},		
		ready() {
			console.log('ready..');
			
			console.log(this.res.test);
			
		},
		beforeDestroy() {
			console.log('beforeDestroy..');
			
			console.log(this.res.test);
		},
		detached() {
			console.log('detached..');
			
			console.log(this.res.id);
		},
		destroyed() {
			console.log('destroyed..');
			
			console.log(this.res.id);
		},
		// 。。。生命周期结束。。。
		methods: {
			getList() {
				console.log('=============getList============');
				this.res.test="1245";
				console.log(typeof this.number);
			}
		},
		computed: {

		},
		filters: {

		},
		watch: {

		},
		components: {

        }
	}
</script>