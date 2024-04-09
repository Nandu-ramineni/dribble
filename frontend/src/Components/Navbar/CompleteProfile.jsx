import { useRef, useState } from "react";
import { uploadImage } from "../../Services/api";
import TextField from '@mui/material/TextField';
import { RiArrowLeftSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const CompleteProfile = ({ setImageURL }) => {
    const imageInput = useRef();
    const logoURL = "https://cdn.freebiesupply.com/logos/large/2x/dribbble-icon-1-logo-png-transparent.png";
    const imageURL = "https://assets-global.website-files.com/61f1d93f0f31a2ee1518903a/61f1d93f0f31a22bff1890a8_Group%202.svg";
    const [image, setImage] = useState(null);
    const [next, setNext] = useState(false);
    const navigate = useNavigate();

    const handleAvatarChange = (e) => {
        setImage(e.target.files[0]); 
    };

    const onUpload = () => {
        imageInput.current.click();
    };

    const handleNext = () => {
        setNext(true);
    };

    const handleBack = () => {
        setNext(false);
    };

    const handleFinish = async () => {
        try {
            const formData = new FormData();
            formData.append('file', image);
            const response = await uploadImage(formData);
            console.log('Uploaded image URL:', response.data.url);
            setImageURL(response.data.url);
            navigate('/');
        } catch (error) {
            console.error('Error uploading:', error);
        }
    };

    return (
        <div className="block justify-center m-auto h-[90vh] px-6">
            <div className="w-[50px] h-[auto]">
                <img src={logoURL} alt="logo" className="w-full h-full"/>
            </div>
            <div className="flex justify-center py-6">
                {!next ? (
                    <div>
                        <h2 className="text-4xl font-semibold py-4">Welcome Let{"'"}s create your Profile</h2>
                        <p className="text-[#747264] pb-6 text-lg">Let others get to know you better! You can do these later</p>
                        <h1 className="text-2xl font-semibold">Add an Avatar</h1>
                        <div className="flex justify-around items-center py-6">
                            <img src={imageURL} alt="img" className="w-[150px] cursor-pointer"/>
                            <div className="block justify-center">
                                <input type="file" ref={imageInput} name="image" onChange={handleAvatarChange} placeholder="none" className="hidden"/>
                                <button onClick={onUpload} className="py-2 px-6 rounded-md border">Choose image</button>
                                <p className="py-6">{">"} Or Choose one of our defaults.</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold py-2">Add your Location</h1>
                            <TextField id="standard-basic" label="Enter a location" variant="standard" className="w-full"/>
                        </div>
                        <button onClick={handleNext} className="my-8 bg-[#EB528D] text-white py-2 px-6 w-1/4 rounded-md">Next</button>
                    </div>
                ) : (
                    <div>
                        <button className="py-2 px-4 bg-slate-300 text-black rounded-md" onClick={handleBack}><RiArrowLeftSLine className="text-2xl"/></button>
                        <h2 className="text-2xl font-semibold py-4 text-center md:text4xl">What Brings to you Dribble</h2>
                        <p className="text-[#747264] pb-6 text-lg">Select the options that best describe you. Don{"'"}t worry, you can explore these options later.</p>
                        <div className="flex flex-col md:flex-row justify-around gap-6 mb-10 md:mb-0">
                            <div className="border rounded-2xl pb-4">
                                <img src="https://cdn.dribbble.com/users/255/screenshots/7801277/media/904ae0e3f3995c9ce33758dd06928406.png" alt="img" className="w-[250px] pb-4 hidden md:flex"/>
                                <p className="text-center pb-4 pt-2 font-medium">I{"'"}m a Designer looking to <br /> share my work</p>
                                <input type="radio" name="" id="" className="flex justify-center m-auto"/>
                            </div>
                            <div className="border rounded-2xl pb-4">
                                <img src="https://cdn.dribbble.com/users/255/screenshots/7861779/media/5a6246e56604072b551ac01ad2ae675f.png?resize=1000x750&vertical=center" alt="img" className="w-[250px] pb-4 hidden md:flex"/>
                                <p className="text-center pb-4  pt-2 font-medium">I{"'"}m looking to hire a <br /> Designer</p>
                                <input type="radio" name="" id="" className="flex justify-center m-auto"/>
                            </div>
                            <div className="border rounded-2xl pb-4">
                                <img src="https://cdn.dribbble.com/users/255/screenshots/7887117/media/c94f2a58d7da974404a5122872bb93b0.png?resize=1000x750&vertical=center" alt="img" className="w-[250px] pb-4 hidden md:flex"/>
                                <p className="text-center pb-4 pt-2 font-medium">I{"'"}m looking for Design <br /> Inspiration</p>
                                <input type="radio" name="" id="" className="flex justify-center m-auto"/>
                            </div>
                        </div>
                        <button onClick={handleFinish} className="my-8 bg-[#EB528D] text-white py-2 px-6 w-1/4 rounded-md">Finish</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CompleteProfile;
