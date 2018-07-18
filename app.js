const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const uuid = require("uuid/v4");

app.disable('x-powered-by');
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(bodyParser.json());

const accountRoutes = require('./src/routes/accounts');
app.use('/accounts', accountRoutes);

const transactionRoutes = require('./src/routes/transactions');
app.use('/accounts/:account_id/transactions', transactionRoutes);

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
