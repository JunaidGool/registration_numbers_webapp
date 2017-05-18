const express = require('express');
const router = express.Router();
const Registration = require('../models/registrations');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const mongoose = require ('mongoose');

router.get('/', function(req,res){

  res.redirect('/reg_num');
});

router.get('/home', function(req,res){

    res.redirect('/reg_num');
});


router.get('/reg_num', function(req,res){
  Registration.find({}, function(err, result){
     if (err){
       return next(err);
     }

  res.render('reg_num', {regNumEntered: result, registrationOutput: 'Reg Num'});
});
});

// var duplicateRegistration = function(registration){
//   var dupReg = Registration.findOne({regNum: registration}, function(err,reg){
//     if (err){
//       console.log("duplicateRegistrationError")
//       return cb(err);
//     }
//     if (reg){
//       console.log(reg)
//       return "This registration has been added already"
//     }
//   });
//   //  if (!dupReg){
//   //    return ""
//   //  } else {
//   //   return "This registration has been added already"
//   //  }
//
// };

var manageRegistrationNumber = function(regNumEntered, cb){
  dupArray = [];

  Registration.findOne({regNum: regNumEntered}, function(err, registration){
    if (err){
      console.log("manageRegistration Error")
      return cb(err);
    }
    if (registration){
      Registration.update({name: regNumEntered}, {counter : registration.counter + 1}, cb);
    }
    else{
      //  if (registration.startsWith ('CA') || registration.startsWith ('CY') || registration.startsWith ('CL') || registration.startsWith ('CJ')){
        Registration.create({regNum: regNumEntered, counter : 1},  cb);
      // } else {
      //   dupArray.push(Registration);
      //   console.log(dupArray);
      }
    // }
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
  // var duplicateMessage = duplicateRegistration(inputRegNum);

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
      if (regNumEntered)
        res.render('reg_num', {registrationOutput: message, regNumEntered});
        // res.render('reg_num', {registrationOutput: message, regNumEntered, duplicationOutput: duplicateMessage });

      });
  });
});

router.get('/filterReg', function(req,res){
    res.render('filterReg');
});

router.post('/filterReg', urlencodedParser, function(req, res, next){
  var locationInput = req.body.location;
  regex = new RegExp(locationInput)
  console.log(locationInput);

 Registration.find({regNum: regex }, function(err, result){
    if (err){
      return next(err);
    }

    res.render('filterReg', {result, regex});
  });

});


module.exports = router
