const mongoose = require("mongoose");

require("dotenv").config();

exports.dbConnect = ()=>{
    mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(console.log("DB Connection Successful"))
.catch((e)=>{
    console.error("Error in DB Connection", e);
    process.exit(1);
})
};