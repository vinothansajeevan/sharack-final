import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const PostSchema = new Schema({
  product: {
    type: String,
    required: true
  },
    shopCategory: {
    type: String,
    required: true
  },
    quantity: {
    type: String,
    required: true
  },
  author: {
      type: String,
      required: true,
  },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order"
    }
  ]
});

export default mongoose.model("Post", PostSchema);
