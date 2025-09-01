const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>console.log("DB Connection Successful"))
    .catch((e)=>{
        console.log("Error in DataBase Connection");
        console.error(e);
        
        process.exit(1);
    })
}

module.exports = dbConnect;