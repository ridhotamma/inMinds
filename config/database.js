const mongoose = require("mongoose");

const uri = process.env.MONGO_URI_LOCAL;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_LOCAL, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useNewUrlParser: true,
    });

    const database = await conn.connection.collection("notes");
    const note = await database.findOne({
      title: "travelling around the world",
    });
    console.log(note);
    console.log(`database connected succesfully at ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
