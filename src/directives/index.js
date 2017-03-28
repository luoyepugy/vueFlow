
import Vue from 'vue';

Vue.directive('test', {
	bind: function (el, binding) {
		this.el.style.color = this.el.dataset.color;
	},
	unbind: function () {
		
	}
});

Vue.directive('bg', function (cl) {
	this.el.style.background = cl;
	this.el.style.color = 'white';
})