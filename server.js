// Load the express packages
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');

// Load files
const config = require('./utilities/serverConfig');

// Create app
const app = express();

// App configuration
// use body parser to grab information from POST requests
// method override lets you use HTTP verbs in places where the client doesn't support it.
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride());

// Configure the app to handle CORS requests
const corsOptions = config.getCorsOptions();
app.use(cors(corsOptions));
app.options('*', cors());

//Log requests to the console
app.use(morgan('dev'));

// Detect language and remove from url
app.use((req, res, next) => {
    const country = req.get('country');

    if (country) {
        req.country = country;
        next();
    } else if (app.get('env') !== 'production') {
        req.country = 'dk';
        next();
    } else {
        next({
            message: 'Country header not provided',
            status: 400,
        });
    }
});

app.use((req, res, next) => {
    res.freetrailer = {};
    req.freetrailer = {};
    next();
});

// Add context to our freetrailer object
app.use('/*', (req, res, next) => {
    req.freetrailer.context = req.query.context;
    next();
});

//Routes

// Error handler
app.use((err, req, res) => {
    const errObj = {
        message: err.message,
        error: err,
    };
    if (app.get('env') === 'production') {
        errObj.error = {};
    }
    res.status(err.status || 500);
    res.json(errObj);
});

// Set the port
const port = config.getPort();

// Start the server
app.listen(port);
console.log('Listening on port: ' + port);