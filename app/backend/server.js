const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const models = require('./models');
const authentication = require('./routes/api_authentication');
const assignments = require('./routes/api_assignments');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

// Specifically for test. Should have a check for environment variables, dev or prod.
const testViews = require('./routes/api_test');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(session({
  secret: '301 is fun',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Initialize the strategies for local authentication.
require('./config/passport')(passport, models.user);

// Templating engine, embeddedjs.
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(authentication);
app.use('/api/assignments', assignments);
app.use(testViews);

models.sequelize.sync().then(() => {
  console.log("Database connection successfully established.");
  app.listen(port, function () {
    console.log('Example app listening on port %d!', port)
  });
}).catch((err) => {
  console.log(err, "Something went wrong connecting to the database!");
});

app.get('/', function (req, res) {
  res.send('Hello World!')
});
