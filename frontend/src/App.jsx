import  {  useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import CompleteProfile from "./Components/Navbar/CompleteProfile";
import Login from "./Components/Login/Login";

const App = () => {
    const [imageURL, setImageURL] = useState(null);
    return (
        <BrowserRouter>
            <Navbar imageURL={imageURL} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/login" element={<Login />}/>
                <Route path='/completeProfile' element={<CompleteProfile setImageURL={setImageURL} />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
