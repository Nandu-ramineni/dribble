import Slides from "./Slides"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
    const getStarted = () => {
        navigate("/login")  
    }
    return (
        <div >
            <div className="flex justify-center mt-28">
                <p className="text-center text-sm py-2 px-6 mx-2 rounded-3xl bg-[#FFB3D5] md:text-lg">Over 3 million ready-to-work creatives!</p>
            </div>
            <h1 className="text-5xl text-center pt-10 font-serif md:text-7xl">The World{"'"}s destination <br /> for design</h1>
            <p className="py-6 px-3 text-center text-2xl font-sans">Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
            <div className="flex justify-center py-10">
                <button className="text-center text-md py-4 px-6 rounded-3xl bg-black text-white" onClick={getStarted}>Get Started</button>
            </div>
            <div>
                <Slides/>
            </div>
            <div className="bg-[#FFDA79] py-20 mt-6 flex justify-center items-center">
                <div>
                    <h2 className="text-4xl font-semibold font-mono text-center py-6 md:text-6xl">Find Your next <br /> desginer today</h2>
                    <p className="text-center px-4 pb-8">The world’s leading brands use Dribbble to hire creative talent. <br /> Browse millions of top-rated portfolios to find your perfect  <br />creative match.</p>
                    <div className="flex justify-center gap-4">
                        <button className="text-center text-md py-4 px-6 rounded-3xl bg-black text-white">Get Started</button>
                        <button className="text-center text-md py-4 px-6 rounded-3xl bg-white text-black font-medium">Learn  Hiring</button>
                    </div>
                    <p className="text-center pt-8">Are you designer? <a href="" className="underline">Join Dribble</a></p>
                </div>
            </div>
        </div>
    )
}

export default Home
