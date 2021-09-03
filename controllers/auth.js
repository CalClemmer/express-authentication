const express = require('express');
var router = express.Router();
const passport = require('../config/ppConfig');

router.get('/signup', (req, res) => {
    res.render('auth/signup');
  });
  
  router.get('/login', (req, res) => {
    res.render('auth/login');
  });

module.exports = router; 