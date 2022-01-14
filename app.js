const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const listsRouter = require('./routes/lists');

const app = express();
const customPort = process.env.CUSTOM_PORT;
const PORT = process.env.PORT || customPort;
app.set('port', PORT);

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ROUTES
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use('/lists', listsRouter);

/*********************/
// ERROR HANDLER
// Error 404
app.use((req, res, next) => {
  const error = new Error("The requested resource doesn't exists.");
  error.status = 404;
  next(error);
});

// Error response & logger
app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error.'
    }
  });
  console.log('****************************************');
  console.log(error);
  console.log('****************************************');
});
/*********************/

module.exports = app;
