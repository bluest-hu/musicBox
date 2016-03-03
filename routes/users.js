var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('users', {
		title: "用户"
	});
});

router.get('/login', function (req, res, next) {
	res.render('login', {
		title: '登录'
	});
})

router.post('/login', function (req, res, next) {
	res.render('login', {
		title: '登录'
	});
});

module.exports = router;
