import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is requried"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
  // video:{
  //     type:mongoose.Schema.Types.ObjectId,
  //     ref:"Video"
  // }
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
