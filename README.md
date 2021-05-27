# BasicExpressServer
Basic express server setup

This basic server was made with the purpose of making easier a quick deployment of a Node-based application.

## Features

- Basic component-oriented architecture template.
- Eslint setup with Airbnb standard and security plugin.
- Jest as default testing framework.
- OpenAPI 3.0.0 documentation setup.
- MongoDB and Sequelize ready-to-go configuration files.

## How to use
A ``.env`` file can be provided in order to load environment variables. The environment variables used in this template are listed below.

- **DEV** Can be set to ``true`` if you are in a development environment, it allows the use of [``nodemon``](https://www.npmjs.com/package/nodemon).
- **PORT** Default port if you are not in a development environment. Allows a quick deploy to Heroku.
- **DB_DIALECT** Database dialect, must be set to ``mongo`` if you are using a Mongo database. If you are using a relational database, check the [Sequelize documentation](https://sequelize.readthedocs.io/en/1.7.0/docs/usage/#dialects) to see more about the supported dialects.
- **DB_HOST** Database host.
- **DB_NAME** Database name.
- **DB_USER** Database username.
- **DB_PASS** Database password.

Install dependencies

`` npm install ``

Run tests

`` npm run test ``

Run development application

`` npm run dev ``

Run application

`` node app.js ``