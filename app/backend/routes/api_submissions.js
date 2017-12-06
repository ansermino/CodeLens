const express = require('express');
const router = express.Router();
const util = require('./util');
const models = require('../models');
const Assignments = models.assignment;
const Submissions = models.submission;
const Results = models.plagiarism_tuples;

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
