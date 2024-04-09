import axios from 'axios';
const URL = 'https://dribble-d4az.onrender.com/';
export const authenticateSignup = async(data) => {
    try {
        return await axios.post(`${URL}/signup`,data)
    } catch (error) {
        console.log("Error while calling Signup api",error);
    }
}
export const authenticateLogin = async(data) => {
    try {
        return await axios.post(`${URL}/login`,data)
    } catch (error) {
        console.log("Error while calling login api",error.message);
        return error.response;
    }
}
export const uploadImage = async (data) => {
    try {
        const response = await axios.post(`${URL}/upload`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.log('Error while uploading image', error);
        throw error; 
    }
};

