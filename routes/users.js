var express = require('express');
var router = express.Router();

var crypto = require('crypto');



var cryList = crypto.getCiphers();

/* GET users listing. */
router.post('/', function(req, res, next) {
	
	next();
});

router.get('/', function(req, res, next) {
	next();
});

router.all('/', function(req, res, next) {
	var cryType = req.body.cryType || null;

	res.render('users', {
		title: "用户",
		cryList: cryList,
		cryType : cryType
	});
});

router.get('/login', function (req, res, next) {
	res.render('login', rederInfo);
});

router.post('/login', function (req, res, next) {
	res.render('login', rederInfo);
});

module.exports = router;
