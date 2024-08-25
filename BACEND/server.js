//This is root of my project

const express = require("express");//import the express framework
const mongoose = require("mongoose");//import the Object Data Modeling (OMD) library from MongoDB
const cors = require("cors");//import the midleware ,(Cross - Origin Resource Sharing)

const app = express();//create the express application

//Middleware
app.use(cors());//anable the cors in my application
app.use(express.json());//parses the incoming JSON requests(Put/post)

const PORT = process.env.PORT || 8070;//set the port

const RiderRouter = require("./routes/Riders");//import module
app.use("/riders", RiderRouter );//line the express app to use the riderrouter


//Database connection
mongoose.connect("mongodb://localhost:27017/drivermanagement")
  .then(() => {
    console.log("Connected to the DB");
    app.listen(PORT, () => console.log("Server is running"));
  })
  .catch((err) => console.log(err));



