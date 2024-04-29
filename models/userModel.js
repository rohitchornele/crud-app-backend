import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    fName : {
        type: String,
        required: true
    },
    lName : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    }
})

export const User =  mongoose.model("User", userSchema);