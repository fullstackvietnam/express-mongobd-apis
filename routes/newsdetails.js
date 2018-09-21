var express = require('express');
var router = express.Router();
var News = require("../models/news.model")

/* GET users listing. */
router.get('/:id', function (req, res, next) {

	News.find({ key: req.params.id }, function (err, item) {
		if (err) {
			return next(err);
		}
		res.render('newsdetails', {
			data: item[0]
		});
		// res.json(items); // Dòng này chỉ bật khi viết API
	});

});

module.exports = router;
