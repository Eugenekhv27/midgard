var c = require('../model/MainPageModel');

exports.MainPageController = function(result){

		model = new c.MainPageModel();
		result(model.getName());	
}