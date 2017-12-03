// set up ======================================================================
const  express  = require('express');
const  app      = express();
const  port     = process.env.PORT || 2009;
const  mongoose = require('mongoose');
const  passport = require('passport');

const  morgan       = require('morgan');
const  cookieParser = require('cookie-parser');
const  bodyParser   = require('body-parser');
const  session      = require('express-session');

const  configDB = require('./config/database.js');
const  serverConfig = require('./config/server.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database
//require('./config/passport')(passport); // pass passport for configuration
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms
app.use(session({ secret: serverConfig.secret })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('Starting on port ' + port);

