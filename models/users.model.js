const mongoose = require('mongoose')
const Schema = mongoose.Schema

// DB user
const userSchema = Schema
({
    name: String,
    email:String,
    age: Number,
    password: String,
})

// بعد ما تلاقي اليوزر , قارن بكلمه السر بتاعتو لو هي تمام
userSchema.methods.comparePassword ,async function (password) {
    return await bcrypt.compare(password, this.password) // compare password
}
module.exports = mongoose.model('users', userSchema)