import { Schema, model } from "mongoose";
const userSchema = new Schema({
    fullName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profession: {
        type: String,
        required: true,
    },
   
}, {
    timestamps: true,
});
const User = model("User", userSchema);
export default User;


