// Initialize  objects
const functions = {};

//Handle request promise
functions.handleRequest = async (promise, statusCode, req, res, next) => {
    try {
      const data = await promise;
      res.status(statusCode);
      res.json({
        data,
        statusCode: res.statusCode
      });
    } catch (e) {
      next(e);
    }
  }

// Export objects
module.exports = functions;