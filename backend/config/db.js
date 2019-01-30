const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const dbRoute = "mongodb://maddy:madhav123@ds011495.mlab.com:11495/fsmern";

mongoose.connect(dbRoute,{useNewUrlParser:true});


//for connection test (optional)
let db = mongoose.connection;
db.once("open", () => console.log("Connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = mongoose;