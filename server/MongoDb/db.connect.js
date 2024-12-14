const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const username = process.env.USER_NAME;
const password = process.env.PASSWORD;
const uri = `mongodb+srv://${username}:${password}@cluster0.l3epn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const MongoConnection = async () => {
  try {
    const mongooseConnect = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log({ sucess: true, message: "Connected to DB" });
  } catch (error) {
    console.log({ sucess: false, message: error.message });
  }
};

module.exports = { MongoConnection };
