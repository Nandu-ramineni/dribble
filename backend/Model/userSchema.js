import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true,
    },
})
const user = mongoose.model('dribbleUsers', userSchema);
export default user;