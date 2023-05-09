import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(

    {
        firstName: {
            type: String,
            required:[true,"please add a name"]
        },
        lastName: {
            type: String,
            required:[true,"please add a second name"]
        },
        email: {
            type: String,
            required:[true,"please add a email"]
        },
        password: {
            type:String
        },
        isGoogleUser: {
            type: Boolean,
            default:false
        }
    }
)

const User = model("User", userSchema, "user")

export default User