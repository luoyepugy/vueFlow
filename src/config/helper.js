
export const toast = function() {
	console.log('toast');
} 

export const helper = {
	/* 判断 obj 是否为 null,
	 * Usage:
	 *   var obj = null;
	 *   helper.isNull(null); // 输出true
	 */
	isNull: function(obj) {
		return obj === null;
	}
}