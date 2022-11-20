const app = require("./app")

const dotenv = require('dotenv')
const connectDatabase = require("./config/database")

//handling Uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`)
    console.log(`Shutting Down the server due to Uncaught Exception`)
    process.exit(1)

})

// config
dotenv.config({path:"backend/config/config.env"})


//connecting to  database
connectDatabase()

const server = app.listen(process.env.PORT, ()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`)
})

// console.log(hiiii)

// unhandled Promise Rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Error:${err.message}`)
    console.log(`Shutting Down the server due to Unhandled Promise Rejection`)

    server.close(()=>{
        process.exit(1)
    })
})