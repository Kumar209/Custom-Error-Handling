const errorMiddleware = (err, req, res ,next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    if(err.code === 11000){
        err.message = "Duplicate key error";
        err.statusCode = 400;
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    })
}

export default errorMiddleware;


//Some of the Error Code
// wrong mongodb id error
//   if (err.name === "CastError") {
//     const message = `Resources not found with this id.. Invalid ${err.path}`;
//     err = new ErrorHandler(message, 400);
//   }

  // Duplicate key error or Like we have same email in database(email should be unqiue)
//   if (err.code === 11000) {
//     const message = `Duplicate key ${Object.keys(err.keyValue)} Entered`;
//     err = new ErrorHandler(message, 400);
//   }

  // wrong jwt error
//   if (err.name === "JsonWebTokenError") {
//     const message = `Your url is invalid please try again letter`;
//     err = new ErrorHandler(message, 400);
//   }

  // jwt expired
//   if (err.name === "TokenExpiredError") {
//     const message = `Your Url is expired please try again letter!`;
//     err = new ErrorHandler(message, 400);
//   }