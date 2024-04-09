import { useContext, useState } from "react";
import { DataContext } from "../../Context/DataProvider";
import Profile from "./Profile";
import { FcMenu } from 'react-icons/fc';
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
const Navbar = ({imageURL}) => {
    //const [open, setOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const { account, setAccount } = useContext(DataContext);
    const logoURL = "https://logos-world.net/wp-content/uploads/2023/09/Dribbble-Logo-2009.png";
    //const toggleButton = () => {
        //setOpen(true);
    //};
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
        <nav className=" border-gray-200 dark:bg-gray-900 z-10">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between px-6 py-2 ">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logoURL} alt="logo" className="w-[100px] h-[50px] flex justify-center"/>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        
                        <div>
                            {account ? (
                                <div>
                                    <Profile account={account} setAccount={setAccount} imageURL={imageURL}/>
                                    
                                </div>
                            ) : (
                                <Link to="/login"><button className="px-4 py-2 bg-[#EB528D] text-white rounded-2xl">
                                Login
                            </button></Link>
                            )}
                        </div>
                        <button
                            onClick={toggleNav}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-xl text-black-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-cta"
                            aria-expanded={isNavOpen}
                        >
                            {isNavOpen? <IoMdClose /> : <FcMenu />}
                        </button>
                        
                    </div>
                    
                    <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isNavOpen ? 'block' : 'hidden'}`} id="navbar-cta">
                        <ul className="flex flex-col   font-semibold p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="" className="block py-2 px-3 md:p-0 text-lg text-center text-gray-900 rounded font-medium hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#EB528D] d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Inspiration
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="block py-2 px-3 md:p-0 text-lg text-center text-gray-900 rounded font-medium hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#EB528D] d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Find Work
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="block py-2 px-3 md:p-0 text-lg text-center text-gray-900 rounded font-medium hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#EB528D] d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Learn Design
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="block py-2 px-3 md:p-0 text-lg text-center text-gray-900 rounded font-medium hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#EB528D] md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >
                                Go Pro
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="block py-2 px-3 md:p-0 text-lg text-center text-gray-900 rounded font-medium hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#EB528D] md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >
                                Hire Designers 
                                </Link>
                            </li>
                        </ul>
                        <div className="flex justify-center items-center ml-0 md:ml-96 bg-white rounded-xl">
                            <IoSearch />
                            <input type="text" placeholder="Search..." className="focus:outline-none rounded-md w-3/4 px-2 py-2"/>
                        </div>
                    </div>
                </div>
                
            </nav>
    );
};

export default Navbar;
