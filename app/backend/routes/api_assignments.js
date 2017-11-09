const express = require('express');
const router = express.Router();
const util = require('./util');
var models = require('../models');
var Assignment = models.assignments;

router.get('/test', function(req, res) {
	res.json({});
});



module.exports = router;