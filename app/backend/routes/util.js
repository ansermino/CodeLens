/**
 * Middleware for authentication.
 */

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login');
  }
}

module.exports = {
  isLoggedIn: isLoggedIn
};