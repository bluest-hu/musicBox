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
	var cryInput = req.body.cryInput || null;
	var cipher = null;
	var cryResult = null;

	if ( cryList.indexOf(cryType) !== -1 && cryType !== null ) {
		cipher = crypto.createCipher(cryType, cryType);
		cryResult = cipher.final('hex');
	}

	res.render('users', {
		title: "用户",
		cryList: cryList,
		cryType : cryType,
		cryInput : cryInput,
		cryResult: cryResult
	});
});




router.post('/login', function (req, res, next) {
	var username = req.body.username;
	var password = req.body.password;

	console.log("snd user Name is" + username);
	next();
});


router.all('/login', function (req, res, next) {
	res.render('login', {
		title: "dd"
	})
});

module.exports = router;
