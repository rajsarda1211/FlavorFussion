const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://sardaraj1211:mern1234@cluster0.aeycik4.mongodb.net/GoFood_Data?retryWrites=true&w=majority&appName=Cluster0";

const connectToDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db.collection("food_items");
    const fetched_data1 = await mongoose.connection.db.collection(
      "foodCategory"
    );

    const data = await fetched_data.find({}).toArray();
    const data1 = await fetched_data1.find({}).toArray();

    global.food_items = data;
    global.foodCategory = data1;
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = connectToDB;
