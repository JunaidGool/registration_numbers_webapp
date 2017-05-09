const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create greetings Schema and model
const RegistrationSchema = new Schema({
  regNum:{
    type: String,
    required: [true, 'Name Field Is Required']
  },

  counter:{
    type: Number,
  }
});

//unique index
RegistrationSchema.index({regNum : 1}, {unique : true});

const Registration = mongoose.model('registration', RegistrationSchema);
module.exports = Registration;
