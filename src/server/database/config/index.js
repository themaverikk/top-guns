const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://mongodb_container:27017/topguns-db").then(() => {
    console.log("Connected to Database");
    }).catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });;

module.exports = mongoose;
