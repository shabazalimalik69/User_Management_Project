const mongoose = require("mongoose");

const user_detailsSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirm_password: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);

const User_Detail = mongoose.model("userdetail", user_detailsSchema);

module.exports = User_Detail;
