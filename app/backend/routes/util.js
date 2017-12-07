const PythonShell = require('python-shell');


/**
 * Middleware for authentication. And utilities for running the plagiarism
 * algorithm.
 */

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login');
  }
}

function initPlagiarismChecks(submissions, starterCode, assignmentId) {

  const base = "local/assignments/";

  const opts = {
    pythonPath: 'python3',
    args: [base + submissions, base + starterCode, assignmentId]
  };

  PythonShell.run('algorithm/main.py', opts, (err, results) => {
    if(err) {
      console.log(err);
    } else {
      console.log(results);
    }
  });
}

module.exports = {
  isLoggedIn: isLoggedIn,
  initPlagiarismChecks : initPlagiarismChecks
};