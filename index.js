const express = require('express');
const exphbs  = require('express-handlebars');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');

//setup express app
const app = express();

//connect to MongoDB
// mongoose.connect('mongodb://localhost/greetingsdatabase');

const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/regDatabase";
mongoose.connect(mongoURL);
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// static files
app.use(express.static('assets'));

//initialise routes
app.use(routes);

// set the view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var port = process.env.PORT || 3000;
///listen to port
app.listen(port, function(){
  console.log('LISTENING ON PORT ' + port);
});
