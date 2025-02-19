const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

//REGISTER
router.post("/register", async (req, res) => {
  //GENERATE NEW PASSWORD
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.userPassword, salt);
    //NEW USER REGISTER
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      userPassword: hashPassword
    });

    //SAVE USER AND REPOND
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
