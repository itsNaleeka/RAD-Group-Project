const express = require("express");
const mongoose = require("mongoose");
const bodyPaser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;


app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;


mongoose.connect(URL, {
    useNewUrlParser:true
});

const connection = mongoose.connection;
connection.once("open" , () => {
    console.log("Mongodb Connection success!");
})

const RiderRouter = require("./routes/Riders");

//http://localhost 8070/rider

app.use("/rider",RiderRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
});