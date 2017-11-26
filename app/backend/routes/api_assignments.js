const express = require('express');
const router = express.Router();
const util = require('./util');
const models = require('../models');
const Assignments = models.assignment;
const Submissions = models.submission;

router.get('/all', function(req, res) {
	Assignments.findAll({attributes: ['id', 'title']}).then(assignments => {
		res.json(assignments);
	});
});

router.get('/submissions/:id', function(req, res) {
	Submissions.findAll({
		where: {
			assignment_id: req.params.id,
		},
		attributes: ['id', 'student_id']
	}).then(submissions => {
		res.json(submissions);
	})
});

module.exports = router;
