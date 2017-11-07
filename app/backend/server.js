const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const models = require('./models');
const authentication = require('./routes/api_authentication');
const assignments = require('./routes/api_assignments');

app.use(authentication);
app.use(assignments);

app.listen(port, function () {
  console.log('Example app listening on port %d!', port)
});


models.sequelize.sync().then(() => {
  console.log("Database connection successfully established.");
}).catch((err) => {
  console.log(err, "Something went wrong connecting to the database!");
});

app.get('/', function (req, res) {
  res.send('Hello World!')
});

