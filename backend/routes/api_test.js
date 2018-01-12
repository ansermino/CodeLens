const express = require('express');
const router = express.Router();
const util = require('./util');

router.get('/specialLandingPage', util.isLoggedIn, (req, res) => {
  res.render('specialLandingPage', {data: JSON.stringify(req.user)});
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;