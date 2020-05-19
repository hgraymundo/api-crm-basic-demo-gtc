const
  express     =   require('express'),
  app         =   express(),
  bodyParser  = require('body-parser'),
  morgan      = require('morgan'),
  cors        = require('cors'),
  validation    = require('express-validator'),
  env         = require('./configuration/config'),
  passport   = require('passport'),
  session    = require('express-session'), //basic configuration for variables
  // cookieParser = require('cookie-parser'),
  Sequelize = require('sequelize');

// CONFIGURATIONS
//CORS Cross-origin resource sharing
// allows restricted resources on a web page to be requested from another domain
// app.use(cors({ origin: [
//   "http://localhost:4200"
// ], credentials: true})); // Enable for angular client
app.use(cors());
// setup bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//HTTP request logger middleware for node.js
app.use(morgan('dev'));
//add validation support
app.use(validation());
//route base
app.get("/", (req, res) => {
  res.json({ message: "Welcome to API BASIC TEMPLATE" });
});
// setup Sequelize
var models = require("./models");
//Sync Database
models.sequelize.sync({force: false }).then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});

// setup storage session
var SequelizeStore = require('connect-session-sequelize')(session.Store);
var sequelize = new Sequelize(
"session",
"root",
"root", {
  "dialect": "mysql"
});

var myStore = new SequelizeStore({
    db: sequelize,
    checkExpirationInterval: 6 * 10000,
    expiration: 30*10000
})

//
// app.use(cookieParser())
// setup session
app.use(session({
  name: 'site-cookie',
  secret: 'keyboard cat',
  store: myStore,
  resave: false,
  saveUninitialized: false
  // saveUninitialized: false,
  // cookie: {
  //   maxAge: 30*10000
  // }
}))

myStore.sync();

// require('./configuration/passport')(passport); // pass passport for configuration
app.use(passport.initialize());
app.use(passport.session());

// ROUTES
const BASE_API = "/api/v1"
require('./routes/signup.route')(app, BASE_API)
require('./routes/customer.route')(app, BASE_API)
require('./routes/status.route')(app, BASE_API)
require('./routes/process_type.route')(app, BASE_API)
require('./routes/process.route')(app, BASE_API)
require('./routes/personal.route')(app, BASE_API)
require('./routes/advice.route')(app, BASE_API)
require('./routes/sms.route')(app, BASE_API)
require('./routes/email.route')(app, BASE_API)
require('./routes/publication.route')(app, BASE_API)
require('./routes/fb_comment.route')(app, BASE_API)

//run server
app.listen(env.PORT, ()=> {
  console.log(`Server is running on ${env.PORT} port`);
});
