import React, {useState} from 'react';
import logo from './Assets/wooden2.png'
import {FiMenu} from "react-icons/fi";

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className={"absolute w-full h-full border-b-2"}>
            <div className={"max-w-[1440px] flex justify-between items-center p-4"}>
                <ul className={"hidden sm:flex"}>
                    <li className={"pr-5"}>Wooden Furniture</li>
                    <li className={"pr-5"}>About</li>
                    <li className={"pr-5"}>Stories</li>
                </ul>
                <div onClick={handleNav}>
                    <img className={"w-[190px] h-[36px] font-bold"} src={logo} alt={""}/>
                </div>
                <div></div>
                <div></div>
                <div className={"cursor-pointer sm:hidden text-black z-10"}>
                    <FiMenu onClick={handleNav} size={25}/>
                </div>
                <div
                    className={nav ? "overflow-hidden sm:hidden ease-in duration-500 absolute w-full top-0 left-0 h-screen bg-black/90 flex px-4 py-7 text-white"
                        : "absolute top-0 h-screen left-[-100%] ease-in duration-500 text-white"}>
                    <ul className={"h-full w-full text-center flex flex-col justify-center text-white"}>
                        <li className={"p-5 text-white cursor-pointer"}>Wooden Furniture</li>
                        <li className={"p-5 text-white cursor-pointer"}>About</li>
                        <li className={"p-5 text-white cursor-pointer"}>Stories</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;