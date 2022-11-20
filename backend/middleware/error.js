const ErrorHander = require("../utils/errorhander")

module.exports = (err,req,res,next) =>{
    // console.log("error handler is called")
    // console.log(req.path)

    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server Error"

    // Wrong Mongodb Id error
    if(err.name==="CastError"){
        const message = `Resource not found. Invalid: ${err.path}`
        err = new ErrorHander(message,400)
    }
    
    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`
        err = new ErrorHander(message, 400)
    }
    
    // Wrong JWT Error
    if(err.name==="JsonWebTokenError"){
        const message = `Json web token is invalid, try again`
        err = new ErrorHander(message,400)

    }

    // JWT Expire Error
    if(err.name==="TokenExpiredError"){
        const message = `Json web token is Expired, try again`
        err = new ErrorHander(message,400)

    }

    res.status(err.statusCode).json({
        success:false,
        error: err.message,
    })

}