const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require("dotenv").config()
const app = express()
app.use(bodyParser.json())
const mongoose = require("mongoose")
const connect_db = require("./config/db")

connect_db()
 
const port = process.env.PORT
app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
})

//! Connection check
app.get("/",(req,res)=>{
    res.json({message:"Welcome to E-Shopping"})
}) 


const userSchema = new mongoose.Schema({
        name :String,
        email: String,
        age: Number,
        password: String,

})

const User = mongoose.model("User",userSchema)

//! Create a user API
app.post("/create",async(req,res)=>{
    try {
        const userObj={
            name:req.body.name,
            email:req.body.email,
            age:req.body.age,
            password:req.body.password
        }
        const user = new User(userObj)
        res.status(201).json(user)
        await user.save()
    } catch (error) {
       res.status(400).json({message:"Something went wrong in this server" })
    }
   
})

