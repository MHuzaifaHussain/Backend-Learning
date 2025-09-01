const mongoose = require("mongoose");
require("dotenv").config();

exports.dbConnect = ()=>{
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
.then(console.log("DB connection Successful"))
.catch((e)=>{
    console.log("Error in DB connection");
    console.error(e);
    process.exit(1);
})
}