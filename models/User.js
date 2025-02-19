const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      min: 3,
      max: 15,
      unique: true
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true
    },
    userPassword: {
      type: String,
      required: true,
      min: 8,
      max: 12,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps:true
  },
);

module.exports = mongoose.model("User", userSchema); 