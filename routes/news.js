var express = require('express');
var router = express.Router();
var News = require("../models/news.model")

/* GET users listing. */
router.get('/', function (req, res, next) {

	News.find(function (err, items) {
		if (err) {
			return next(err);
		}
		res.render('news', {
			title: 'News List',
			data: items
		});
		// res.json(items); // Dòng này chỉ bật khi viết API
	});

});

module.exports = router;
