const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncError")
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail")
const crypto = require("crypto")

// Registe a User
exports.registerUser = catchAsyncErrors(async(req,res,next)=>{
    const {name, email, password } = req.body

    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:"this is a sample id",
            url:"ProfilePicUrl",
        }
    })

    sendToken(user,201,res)

})

// Login User

exports.loginUser = catchAsyncErrors(async(req,res,next)=>{
    const {email,password} = req.body

    // console.log(password)
    //checking if user has given password and email both

    if(!email || !password){
        return next(new ErrorHander("Please Enter Email & Password",400))
    }

    const user = await User.findOne({email}).select("+password")  

    if(!user){
        return next(new ErrorHander("Invalid email or Password"),401)
    }
    // console.log(user)

    const isPasswordMathched = await user.comparePassword(password)
        
     
    if(!isPasswordMathched){
        return next(new ErrorHander("Invalid email or Password"),401)
    }

    sendToken(user,200,res)
})


// Logout User
exports.logout = catchAsyncErrors(async(req,res,next)=>{
    res.cookie("token",null,{
        expires: new Date(Date.now()),
        httpOnly: true,
    })

    res.status(200).json({
        success:true,
        message: "Logged Out",
    })
})

// Forgot Password 

exports.forgotPassword = catchAsyncErrors(async(req,res,next)=>{

    const user = await User.findOne({email:req.body.email})

    if(!user){
        return next(new ErrorHander("User not found",404))
    }

    // Get ResetPassword Token
    const resetToken = user.getResetPasswordToken()

    await user.save({validateBeforeSave:false})

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`

    const message = `Your Password reset token is :- \n\n ${resetPasswordUrl} \n\n If You have not requested this email then, please ignore it `


    try{
        await sendEmail({
            email: user.email,
            subject: `Ecommerce Password Recovery`,
            message,
        })

        res.status(200).json({
            success:true
        })

    }catch(error){
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined

        await user.save({validateBeforeSave:false})

        return next(new ErrorHander(error.message,500))
    }
})


// Reset Password

exports.resetPassword = catchAsyncErrors(async (req,res,next)=>{
    //creating token hash

    const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex")

    const user = await User.findOne({
        resetPasswordToken, resetPasswordExpire: {$gt:Date.now()},
    })

    if(!user){
        return next(new ErrorHander("Reset Password Token is invalid or has been expired",400))
    }

    if(req.body.password !== req.body.confirnPassword){
        return next(new ErrorHander("Password does not password",400))
        
    }

    user.password = req.body.password
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined

    await user.save();

    sendToken(user,200,res);

})




// Get User Details 

exports.getUserDetails = catchAsyncErrors(async (req,res,next)=>{
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success:true,
        user,
    })
})


// update user password 

exports.updatePassword = catchAsyncErrors(async(req,res,next)=>{
    const user = await User.findById(req.user.id).select("+password")

    const isPasswordMathched = await user.comparePassword(req.body.oldPassword)
        
     
    if(!isPasswordMathched){
        return next(new ErrorHander("old Password is incorrect "),400)
    }
    
    if(req.body.newPassword != req.body.confirnPassword){
        return next(new ErrorHander("Password does not match"),400)
    }

    user.password = req.body.newPassword

    await user.save()
 
    sendToken(user,200,res)
})


// update user profile

exports.updateProfile = catchAsyncErrors(async(req,res,next)=>{
    
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
    }

    // we will add cloudinary later

    const user = await User.findByIdAndUpdate(req.user.id,newUserData,{
        new:true,
        runValidators:true,
        useFindAndModify:false,
    })

    res.status(200).json({
        success:true,
    })
})

