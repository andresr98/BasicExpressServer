const Express = require('express');
const server = require('./config/server');
const mongoose = require('mongoose');

// Database configuration values
const {
  MONGO_URI,
  MONGODB_OPTIONS,
} = require('./configdb/mongo');

const {
  DB_DIALECT,
} = require('./config/environment');

const {
  sequelize
} = require('./config/db/sequelize');

const app = new Express();
server(app);

app.listen(app.get('port'), () => {
  console.log(`The app is listening on the port ${app.get('port')}`);
  
   if (DB_DIALECT === 'mongo') {
    mongoose.connect(MONGO_URI, MONGODB_OPTIONS)
      .then(value => {
        console.log('Succesfull Mongo database connection!');
      })
      .catch(err => {
        console.log('Error while connecting to Mongo database', err);
      });
  } else {
    sequelize.authenticate()
      .then(value => {
        console.log('Succesfull Sequelize database connection!');
      })
      .catch(err => {
        console.log('Error while connecting to Sequelize database', err);
      })
  }
});
