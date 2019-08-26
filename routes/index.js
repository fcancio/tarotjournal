var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('users/index', { title: 'Tarot Journal', user: req.user });
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
 'google',
 { scope: ['profile', 'email'] }
));

module.exports = router;


 // Google OAuth callback route
 router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/entries',
    failureRedirect : '/users'
  }
));

 // OAuth logout route
 router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/users');
});