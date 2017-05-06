const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create greetings Schema and model
const RegistrationSchema = new Schema({
  number:{
    type: String,
    required: [true, 'Name Field Is Required']
  },

  area:{
    type: String,
  }
});

//unique index
RegistrationSchema.index({number : 1}, {unique : true});

const Registration = mongoose.model('registration', RegistrationSchema);
module.exports = Registration;
