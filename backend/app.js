const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const { HttpError } = require('./helpers');

const agendaRouter = require('./routes/agendaRouter');

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('../public/swagger.json');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(logger(formatsLogger));

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/agenda', agendaRouter);

app.use((req, res, next) => {
  next(new HttpError(404));
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
