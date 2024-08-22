//This is root of my project

const express = require("express");//import the express framework
const mongoose = require("mongoose");//import the Object Data Modeling (OMD) library from MongoDB
const cors = require("cors");//import the midleware ,(Cross - Origin Resource Sharing)
const dotenv = require("dotenv");//import dotenv (load the environment varible from .env file)

dotenv.config();// Load the environment variables from .env file


const app = express();//create the express application
const PORT = process.env.PORT || 8070;//set the port
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/drivermanagement";//environment varible not ssset ,it defaults connecting to the local mongoDB instance

//Middleware
app.use(cors());//anable the cors in my application
app.use(express.json());//parses the incoming JSON requests(Put/post)
app.use(express.urlencoded({ extended: true}));//parses the url in to the application


//Database connection
mongoose.connect(MONGODB_URI,{
    useNewUrlParseruseNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connect to DB")
    app.listen(PORT, () => {
        console.log(`Server is running on: ${PORT}`);
    });

})
.catch((err) => {
        console.error("Failed to connect to MongoDB", err);
    });


const RiderRouter = require("./routes/Riders.js");//import module

app.use("/riders", RiderRouter );//line the express app to use the riderrouter

