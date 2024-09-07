const { constant } = require ("../constant");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case 400:
      res.json({
        title: constant.VALIDATION_ERROR,
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constant.NOT_FOUND:
      res.json({
        title: "Not found",
        message: err.message,
        stackTrace: err.stack,
      });

    case constant.UNAUTHORIZED:
      res.json({
        title: "unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });

    case constant.FORBIDDEN:
      res.json({
        title: "forbidden",
        message: err.message,
        stackTrace: err.stack,
      });

    case constant.SERVER_ERROR:
      res.json({
        title: "server error",
        message: err.message,
        stackTrace: err.stack,
      });

    default:
      console.log("No Error all good");
      break;
  }
};

module.exports = errorHandler;
