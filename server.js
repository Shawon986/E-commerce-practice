const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require("dotenv").config()
const app = express()
app.use(bodyParser.json())


const port = process.env.PORT
app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
})

//! Connection check
app.get("/",(req,res)=>{
    res.json({message:"Welcome to E-Shopping"})
}) 
