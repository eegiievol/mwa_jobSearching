const mongoose = require("mongoose")
require("./model")
mongoose.connect(process.env.DB_URL)

mongoose.connection.on("connected", function(){
    console.log("connected to mongoose")
})

mongoose.connection.on("disconnected", function(){
    console.log("disconnected from mongoose")
})

mongoose.connection.on("error", function(){
    console.log("error connecting to mongoose")
})

