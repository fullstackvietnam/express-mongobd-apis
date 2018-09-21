var express = require('express');
var router = express.Router();
var User = require("../models/user.model")

/* GET users listing. */
router.get('/:id', function (req, res, next) {

	User.find({ key: req.params.id }, function (err, item) {
		if (err) {
			return next(err);
		}
		res.render('usersdetails', {
			data: item[0]
		});
		// res.json(items); // Dòng này chỉ bật khi viết API
	});

});

module.exports = router;
