const mongoose = require("mongoose");

const ConnectDB = () => {
  return mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("DB Connected"))
    .catch(console.error);
};

module.exports = ConnectDB;
