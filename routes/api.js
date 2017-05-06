const express = require('express');
const router = express.Router();
const Greeting = require('../models/registrations');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const assert = require('assert');

router.get('/', function(req,res){

  res.redirect('/home');
});

router.get('/home', function(req,res){

  res.render('home');
});

router.get('/reg_numbers', function(req,res){

  res.render('reg_numbers');
});

module.exports = router
