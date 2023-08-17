const mongoose = require("mongoose")
const uri = process.env.DB_URI

const connect_db = ()=>{
    try {
        mongoose.connect(uri,{useNewUrlParser:true})
        console.log("DB is connected")
    } catch (error) {
        console.log("DB is not conneccted")
    }
}
module.exports=connect_db