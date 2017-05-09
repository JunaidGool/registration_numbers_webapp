const express = require('express');
const router = express.Router();
const Registration = require('../models/registrations');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const assert = require('assert');

router.get('/', function(req,res){

  res.redirect('/home');
});

router.get('/home', function(req,res){

  res.render('home');
});


router.get('/reg_num', function(req,res){


    res.render('reg_num');
});

var manageRegistrationNumber = function(regNumEntered, cb){
  Registration.findOne({regNum: regNumEntered}, function(err, reg){
    if (err){
      console.log("manageRegistration Error")
      return cb(err);
    }
    if (reg){
      Registration.update({regNum: regNumEntered}, {counter : reg.counter + 1}, cb);
    }
    else{
         if (regNumEntered.startsWith('CA') || regNumEntered.startsWith('CY') || regNumEntered.startsWith('CL') || regNumEntered.startsWith('CJ'))
         Registration.create({regNum: regNumEntered, counter : 1},  cb);
         else {
           Registration.update({regNum: "Invalid"}, {counter : 1}, cb);
           return "oops, invalid"
            console.log("INVALID")
         }
    }
  });
};

var getRegistration = function(location, registration){

  if (registration.startsWith ('CA')){
    return registration;
  }
  else if (registration.startsWith ('CY')){
    return  registration;
  }
  else if (registration.startsWith ('CL')){
    return  registration;
  }
  else if (registration.startsWith ('CJ')){
    return  registration;
  } else {

    return "Invalid"

  }
};

router.post('/reg_num', urlencodedParser, function(req, res, next){
  var inputRegNum = req.body.inputRegNum ;
  var locationInput = req.body.location ;
  var message = getRegistration(locationInput, inputRegNum);

    manageRegistrationNumber(inputRegNum, function(err, result){
      console.log(err);
      if (err){
        console.log("ERROR");
        return next(err);
      }
      Registration.find({}, function(err, regNumEntered){
      if (err){
        return next(err);
      }
        res.render('reg_num', {registrationOutput: message, regNumEntered});
      });
  });
});

var filter = function(location, registration){

    if (location === ("CA")){
      return registration.startsWith("CA");
  }
};

router.get('/reg_num_CA', function(req,res){
    res.render('reg_num_CA');
});

router.post('/reg_num_CA', urlencodedParser, function(req, res, next){
  var locationInput = req.body.location;
  var locationValue = locationInput.value;

 Registration.distinct('regNum', function(err, result){
    if (err){
      return next(err);
    }
    filter(locationValue, result)

      console.log(err);
      if (err){
        console.log("ERROR");
        return next(err);
      }

    console.log(result);
    res.render('reg_num_CA', {result});
  });

});


module.exports = router
