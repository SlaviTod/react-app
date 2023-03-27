const mongoose = require('mongoose');

const { appName, dbConnectionString } = require('./../config/config');

const options = { useNewUrlParser: true, useUnifiedTopology: true, autoCreate: true };

module.exports = (connectionString) => mongoose.connect(connectionString, options);
