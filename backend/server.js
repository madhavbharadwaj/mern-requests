//const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
mongoose = require('./config/db');
const logger = require("morgan");
//const Data = require("./models/data");
const cors = require('cors')

const API_PORT = 3001;
const app = express();
//const router = express.Router();


const dataRoutes = require("./routes/data")

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));


app.use(cors())
// append /api for our http requests
app.use("/data",dataRoutes)


// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));