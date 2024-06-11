// Middleware for handling 404 errors
function notFoundError(req, res, next) {
    res.status(404).json({ message: "Not Found" });
  }
  
 
  function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
  }
  
  module.exports = { notFoundError, errorHandler };
  