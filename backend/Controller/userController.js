import User from '../Model/userSchema.js';
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import dotenv from 'dotenv';
dotenv.config();
export const userSignup = async (req, res) => {
    try {
        const exist =await User.findOne({userName: req.body.userName});
        if(exist) return res.status(401).json({message: "User already exists"})
        const user = req.body;
        const newUser=new User(user);
        await newUser.save();
        res.status(200).json({message: user});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export const userLogin = async (req, res) => {
    try {
        const username = req.body.userName;
        const password = req.body.password;
        let user =await User.findOne({userName: username, password: password});
        if(user){
            return res.status(200).json(`Welcome ${user.userName} ${user}`);
        } else {
            return res.status(401).json({message: "Invalid Credentials"});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadImage = async (req, res) => {
    const upload = multer({ dest: 'uploads/' }).single('file');

    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        try {
            const result = await cloudinary.uploader.upload(req.file.path, { folder: 'dribble', format: 'png' });
            res.status(200).json({ url: result.secure_url });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
}
