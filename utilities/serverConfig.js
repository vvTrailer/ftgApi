// Initialize  objects
const functions = {};

// Returns port number
functions.getPort = function () {
    const port = process.env.PORT || 1337;

    return port;
};

// Returns cross origin options
functions.getCorsOptions = function () {
    const corsOptions = {
        origin: '*',
        methods: ['POST', 'GET', 'OPTIONS', 'PUT', 'DELETE', 'HEAD'],
        allowedHeaders: ['country', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'x-access-token', 'Access-Control-Allow-Origin'],
    };

    return corsOptions;
}

// Export objects
module.exports = functions;