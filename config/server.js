/**
 * NPM required packages
 */
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

/**
 * OpenAPI documentation
 */
const swaggerDocument = YAML.load(`${__dirname}/swagger/v1.yml`);

/**
 * Routes to the different resources
 */
const routes = require('../app/routes');

/**
 * Importing configuration variables
 */
const {
  port,
  morganMode,
} = require('./config');

/**
 * Sets up the server configuration to an Express app
 * @param {*} app Basic Express app
 */
const server = (app) => {
  app.disable('x-powered-by');
  app.set('port', port);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan(morganMode));
  app.use(cors());
  app.use('/', routes);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

module.exports = server;
