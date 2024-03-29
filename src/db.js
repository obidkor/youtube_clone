import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(
  process.env.PRODUCTION ? process.env.MONGO_URL : process.env.MONGO_URL1,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

const db = mongoose.connection;

const handleOpen = () => {
  console.log("✅ connected to db");
};

const handleError = error => {
  console.log(`❌ Error on DB connection : ${error}`);
};

db.once("open", handleOpen);
db.on("error", handleError);
