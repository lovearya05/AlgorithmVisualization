const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")

const userData = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Your name"],
        maxLength:[30,"Name cannot exceed 30 character"],
        minLength:[4,"Name Should have more than 4 Characters"]
    },
    email:{
        type:String,
        required:[true,"Please Enter Your Email"],
        unique:true,
        validator:[validator.isEmail,"Please Enter a valid Email"]
    },
    password:{
        type:String,
        required:[true,"Please Enter Your Password"],
        minLength:[8,"Password Should have more than 8 Characters"],
        select:false,
    },
    avatar:{

        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    active:[{
        type:Date,
    }],

    resetPasswordToken: String,
    resetPasswordExpire:Date,
})

userData.pre("save",async function(next){

    if(!this.isModified("password")){
        next();
    }

    this.password = await bcrypt.hash(this.password,10)
})

// JWT TOKEN
userData.methods.getJWTToken = function (){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRE,
    })
}


// compare password

userData.methods.comparePassword = async function(enteredPassword){
    console.log(enteredPassword,this.password)
    return await bcrypt.compare(enteredPassword,this.password)
}

//Generating Password Reset Token
userData.methods.getResetPasswordToken = function (){

    //Generating Token
    const resetToken = crypto.randomBytes(20).toString("hex")

    // Hashing and Adding resetPassword to userData
    this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex")

    this.resetPasswordExpire = Date.now()+15*60*1000

    return resetToken
}


module.exports = mongoose.model("User",userData)