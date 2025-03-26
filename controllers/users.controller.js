const usersModel = require('../models/users.model')
const bcrypt = require('bcrypt') // password-hashing function
const jwt = require('jsonwebtoken');

// register
exports.register = async function (req,res) {
    try
    {
        let newUser = new userModel(req.body) // create new user with API
        const hashedpassword = await bcrypt.hash(req.body.password, 10)
        newUser.password = hashedpassword
        let user = await newUser.save()
        return res.json( {message:"User Registerd successfuly" , user: {email: user.email, name:user.name} })
    }
            catch(err)
            {
                console.log("🚀 ~  exports.register-function err:", err)
                res.status(400).send(
                    {
                        message:err
                    }
                )
            }
  
        } 



    // login
    // email and password
exports.login = async function (req,res) {
    try
    {
        let user = await usersModel.findOne({email: req.body.email}) // find email to login
        let comparePassword = await user.comparePassword(req.body.password)
        if(!user || !await user.comparePassword(req.body.password))
        {
            res.status(400).send({message: "Invalid email or password"})      
            // "or" : because hacker can't know where the error
        }
        else
        {
            const token = jwt.sign({email: user.email , _id: user._id}, 'secretkey')  
            return res.json( {message:"User Logged in successfuly" , user: {email: user.email, name:user.name, jwt: token}})
        }
    

        // when login : 1.email and password dor checking
    }
    catch(err)
    {
        console.log("exports.login =function ~ err:", err)
        res.status(400).send(
            {
                message:err
            }
        )
    }
}


// ahmed : 11111111
// omar : 