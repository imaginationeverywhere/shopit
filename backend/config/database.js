const mongoose = require("mongoose");

const connectDatabase = () => {
  const uri =
    "mongodb+srv://develop:VhUR5azEqckE8H4Y@develop.1i8ll.mongodb.net/shopit?retryWrites=true&w=majority";
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    })
    .then((con) => {
      console.log(`MongoDB Database connect with HOST: ${con.connection.host}`);
    });
};

module.exports = connectDatabase;
