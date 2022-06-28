errorHandler = (err, req, res, next) => {
    res.status(err.statusCode)
    res.send({ errors: err.message });
  };
  
module.exports = errorHandler;
