import mongoose from "mongoose";
import {ObjectID} from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function () {
    return this.toString();
};

const UserSchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    product:{
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    registerNumber: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
});

export default mongoose.model("User", UserSchema);
