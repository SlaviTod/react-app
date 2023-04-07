require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); 
const mongoSanitize = require('express-mongo-sanitize');


const { port, dbConnectionString } = require('./config/config');

const app = express();

const errorHandler = require('./utils/errors/errorHandler');
const db = require('./db/db');

const startServer = async () => {
    try {
        await db(dbConnectionString);
        console.log("DB is connected!");

        require('./server/express')(app, express);
        require('./server/cors')(app);
        
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(bodyParser.json());

        app.use(morgan('dev'));

        app.use(mongoSanitize());

        require('./router/router')(app);
        // TODO add rate-limit
        
        app.get('*', (req, res) => {
            throw Error('URL not found');
        });

        // app.use(errorHandler.logError);
        // app.use(errorHandler.errorHandler);

        app.listen(port, () => console.log(`The Server listen on port ${port}`));
    } catch (err) {
        console.log("DB is NOT connected! server.js:12 ~ startServer ~ err:", err);
    }
}

startServer();