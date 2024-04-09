import express from 'express';
import {  uploadImage, userLogin, userSignup } from '../Controller/userController.js';
const router = express.Router();
router.post('/signup',userSignup)
router.post('/login',userLogin)
router.post('/upload',uploadImage)

export default router;