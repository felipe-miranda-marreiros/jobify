const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    msg: 'There was a error'
  });
};

export default errorHandlerMiddleware;
