var express = require('express');
var router = express.Router();


router.get('/', function (req,res) {
	res.render('album', { 
		title: 'Express',
		// username : req.session.username
	});
});


module.exports = router