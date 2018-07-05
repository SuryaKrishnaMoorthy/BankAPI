const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const uuid = require("uuid/v4");

app.disable('x-powered-by');
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(bodyParser.json());

const bankRoutes = require('./src/routes/routes');
app.use('/account', bankRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).send({
    error: err
  });
})

app.use((req, res, next) => {
  res.status(404).send({
    error: {
      message: 'Not found'
    }
  });
})

const listener = () => `Listening to ${port}!`
app.listen(port, listener);

module.exports = app
