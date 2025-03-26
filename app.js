    //____________________authentcation mangement project ____________________//
    // initiation
// npm init -y => repo
// npm install body-parser express mongoose
// npm install nodemon
// npm install bcrypt
// npm start : direct to app.js because ثبتها في ملف package.json
// npm : node package manager in JSON

///////////////////////////////////////////////////////////////////////
// router : جهاز توجيه
// controller : متحكم
// module : نموذج

// login and register => JWT

// MVC => folder archerticture ( controller - models - routers - app)

//______________________________________________________________________________________//





//_____________________________________________- استدعاء المكاتب_____________________________________________//
const express = require('express') // framework
const bodyParser = require('body-parser') // for analysis requests
const mongoose = require('mongoose')  // mongoDB library
const userRouter = require('./routers/users.router')



const app = express() // express
app.use(bodyParser.json())

const port = 3300
const uri = "mongodb+srv://omar:123omar123@mag.bntsz.mongodb.net/?retryWrites=true&w=majority&appName=Mag"; // connection link from mongoDB


//_______________________________________________________ connect with mongoDB __________________________-//
const connectToDB = async () => // async : make program strat in more task, المده الزمنيه
    {
        try
        {
            mongoose.set('strictQuery', false)
            mongoose.connect(uri)
            console.log("Connected To mongo DB ")
        }

        catch(err)
        {
            console.log("connectToDB error", err)
            process.exit()
        }
    }
  
connectToDB()

// Handle router
app.use('/' , userRouter) // call router Api

// for any error
app.use(function(req,res)
{
    res.status(404).send( { url : req.originalUrl + 'not found'}) // message for error
}
)






app.listen(port, () => {
  console.log(` app listening on port ${port}`)
});  
    // to run on server => node folder

//______________________________________________________________________________//
// JWT => Json web token : زي كارنيه بعد ما اعمل login

// EX : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRy
//          dWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30
//  => solution : 
/*
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true,
  "iat": 1516239022
}
*/  // Encrption not hashing


// ahmed : 11111111
// omar :  22222222