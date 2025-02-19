const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const nodemon = require("nodemon");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
   // useNewUrlParser: true,
    // useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB !");
})
.catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
});

//Middileware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


//Use App
app.get("/", (req,res)=>{
    res.send("Welcome to Homepage !");
    
});


app.listen(8800, () => {
  console.log("Backend Server is Running !");
});
