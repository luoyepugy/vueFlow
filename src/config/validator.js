
import Vue from 'vue'
import vueValidator from 'vue-validator'

Vue.use(vueValidator);

Vue.validator('tel', function(val) {
	return /^[0-9]{11}$/.test(val);
});

Vue.validator('tel2', {
	message: 'hello tel2',
	check: function(val) {
		return /^[0-9]{11}$/.test(val);
	}
})