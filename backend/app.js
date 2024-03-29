const express = require("express")
const app = express()
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser")

app.use(express.json())
app.use(cookieParser())

// routes imports
const user = require("./routes/userRoute")

app.use("/api/v1",user)

//Middleware for Errors
app.use(errorMiddleware)


module.exports = app