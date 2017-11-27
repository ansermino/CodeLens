const express = require('express');
const router = express.Router();
const util = require('./util');
const models = require('../models');
const Assignments = models.assignment;
const Submissions = models.submission;
const Results = models.plagiarism_tuples;

router.get('/all', function(req, res) {
	Assignments.findAll({attributes: ['id', 'title']}).then(assignments => {
		res.json(assignments);
	});
});

router.get('/:id/results', function(req, res) {
	Results.findAll({
		where: {
			assignment_id: req.params.id,
		},
		attributes: ['submission_a', 'submission_b', 'plagiarism_score']
	}).then(results => {

		let compare = function(a,b) {
			if (a.plagiarism_score < b.plagiarism_score)
				return 1;
			if (a.plagiarism_score > b.plagiarism_score)
				return -1;
			return 0;
		}

		res.json(results.sort(compare));
	})
})

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
