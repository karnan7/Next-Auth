import mongoose from "mongoose";

export const ConnectToDb = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("mongodb connected");
    });

    connection.on("error", (err) => {
      console.log("mongodb connection error", err);
      process.exit();
    });
  } catch (error) {
    console.log("something went wrong !", error);
  }
};
