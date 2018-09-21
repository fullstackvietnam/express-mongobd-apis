var express = require('express');
var router = express.Router();
var News = require("../models/news.model")
var User = require("../models/user.model")

router.get('/news', function (req, res, next) {

	News.find(function (err, items) {
		if (err) {
			res.json({
				success: false,
				message: 'Erorr load data'
			});
		} else {
			res.json({
				success: true,
				data: items
			});
		}
	});
});
router.get('/news/:id', function (req, res, next) {

	News.find({ key: req.params.id }, function (err, items) {
		if (err) {
			res.json({
				success: false,
				message: 'Erorr load data'
			});
		} else {
			res.json({
				success: true,
				data: items
			});
		}
	});
});
router.get('/users', function (req, res, next) {

	User.find(function (err, items) {
		if (err) {
			res.json({
				success: false,
				message: 'Erorr load data'
			});
		} else {
			res.json({
				success: true,
				data: items
			});
		}
	});
});
router.get('/users/:id', function (req, res, next) {

	User.find({ key: req.params.id }, function (err, items) {
		if (err) {
			res.json({
				success: false,
				message: 'Erorr load data'
			});
		} else {
			res.json({
				success: true,
				data: items
			});
		}
	});
});

module.exports = router;
