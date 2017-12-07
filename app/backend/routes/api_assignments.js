const express = require('express');
const multer = require('multer');
const util = require('./util');
const router = express.Router();
const upload = multer({dest: 'local/assignments/'});
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
		attributes: ['id', 'submission_a', 'submission_b', 'plagiarism_score']
	}).then(results => {
    let compare = function(a,b) {
			if (a.plagiarism_score < b.plagiarism_score)
				return 1;
			if (a.plagiarism_score > b.plagiarism_score)
				return -1;
			return 0;
		};
		res.json(results.sort(compare));
	})
});

const assignmentFiles = upload.fields([
  {name: 'assignments', maxCount: 1},
  {name: 'starter', maxCount: 1}]
);
router.post('/create', assignmentFiles, function (req, res, next) {

	console.log(req.files);
	console.log(req.body);

  if (!req.files['assignments'] || !req.files['starter'] ||
      !req.body.plagiarism_threshold || req.body.plagiarism_threshold < 0 ||
      req.body.plagiarism_threshold > 100) {
    return res.sendStatus(400);
  }

  Assignments.create({
    title: req.body.title,
    plagiarism_threshold: req.body.plagiarism_threshold,
    folder_hash: req.files['assignments'][0].filename,
    starter_hash: req.files['starter'][0].filename,
    instructor_id: 2
  }).then((assignment) => {
    util.initPlagiarismChecks(req.files['assignments'][0].filename, req.files['starter'][0].filename, assignment.id);
    res.json({id: assignment.id});
  }, (error) => {
  	console.log(error);
  });
});

router.get('/create', function (req, res) {
  res.render('create-assignments');
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

router.get('/diff/:assignment_id/:submission_a/:submission_b', function(req, res) {
	// Find the similar lines and files of submission a and submission b.
	Results.findAll({
		where: {
			assignment_id: req.params.assignment_id,
			submission_a: req.params.submission_a,
			submission_b: req.params.submission_b,
		},
		attributes: ['lines_1', 'lines_2', 'file_1', 'file_2']
	}).then(diff_info => {
		res.json(diff_info);
	});

}

module.exports = router;
