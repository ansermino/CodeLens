const express = require('express');
const router = express.Router();
const util = require('./util');
const models = require('../models');
const Assignments = models.assignment;
const Submissions = models.submission;
const Results = models.plagiarism_tuples;
const fs = require('fs');


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
	// Find the folder hash of the assignments.

	diff_object = {};

	// Find where the assignment is stored.
	Assignments.findAll({
		where: {
			id: req.params.assignment_id,
		},
		attributes: ['folder_hash']
	}).then ((folder_hash) => {

		// Get the lines of submission a and submission b.
		Results.findAll({
			where: {
				assignment_id: req.params.assignment_id,
				submission_a: req.params.submission_a,
				submission_b: req.params.submission_b,
			},
			attributes: ['lines_1', 'lines_2']
		}).then((lines) => {

			diff_object[lines_1] = lines.lines_1;
			diff_object[lines_2] = lines.lines_2;

			// Read the files so you can pass them in.
			fs.readFile("PATH HERE", "utf8", function(err, data){
				if (err) {
					console.log(err);
				}

				// Add file contents to diff object.
				diff_object[file_1] = data;

			}).then (

				fs.readFile("PATH HERE", "utf8", function(err, data){
					if (err) {
						console.log(err);
					}

					diff_object[file_2] = data;

				});
			);
		});
	});
}


module.exports = router;
