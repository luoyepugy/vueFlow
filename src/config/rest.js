
function Rest() {};

Rest.prototype = {	
	// 增---POST
	post: function() {

	},
	// 删---DELETE
	delete: function() {

	},
	// 改---PUT
	put: function() {

	},
	// 查---GET
	get: function(path, params) {
		// if(params) parse(path, params);
		return doAjax('GET', path, params);
	},
	// 上传---POST
	upload: function() {

	}
}

function parse(path, params) {

}

function doAjax(type, path, data) {
  var setting = apiSetting(type, path, data);
  if(data) {
  	setting['data'] = data;
  }
  return $.ajax(setting);
}

function apiSetting(type, path, data) {
	var baseUrl = '_API_';
	var setting = {
		url: baseUrl + path,
		type: type,
		dataType: 'json',
		contentType: 'application/json',
		success: function(res) {
			console.log(res);
		},		
		error: function(xhr) {
			console.log(xhr);
		}
	};	
	return setting;
}


const rest = new Rest;

export default rest;