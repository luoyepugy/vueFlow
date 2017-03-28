
import Vue from 'vue';

Vue.filter('characterLimit', function (value, len) {
	return (value.length > len) ? (value.slice(0, len) + '...') : value;
})