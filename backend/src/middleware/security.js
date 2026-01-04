const helmet = require('helmet');
const morgan = require('morgan');

function applySecurity(app) {
  app.use(helmet());
  app.use(morgan('dev'));
  app.disable('x-powered-by');
}

module.exports = { applySecurity };
