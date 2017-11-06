const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const models = require('./models');

models.sequelize.sync().then(() => {
  console.log("Database connection successfully established.");
}).catch((err) => {
  console.log(err, "Something went wrong connecting to the database!");
});

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.listen(port, function () {
  console.log('Example app listening on port %d!', port)
});
