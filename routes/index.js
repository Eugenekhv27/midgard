var express = require('express');
var router = express.Router();
var mainPageInfo = require('../bin/controllers/MainPageController')

/* GET home page. */
router.get('/', function(req, res, next) {
	mainPageInfo.MainPageController(function(result){

		res.render('index', { title: result });
	})
  
});

module.exports = router;
