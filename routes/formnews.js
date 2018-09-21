var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.render('formnews', {
		title: 'FormNewsData'
	});
});

module.exports = router;
