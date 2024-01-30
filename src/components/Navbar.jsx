import React, { useState } from "react";
import { close, logo, hamburgerMenu, lock } from '../assets'

export default function Navbar() {

    const [toggle, setToggle] = useState(false);
    function handleClick() {
        setToggle(!toggle)
    }
    return (
        <>
            <div className="nav">
                <div className="navItem">
                    <img src={logo} alt="logo" className="h-[25px] hover:cursor-pointer" />
                    <div className=" flex items-center">
                        <ul className={toggle ? 'mobileLists' : 'lists hidden  md:flex md:relative md:top-0  '}>
                            <li>Home</li>
                            <li>About</li>
                            <li>Support</li>
                            <li>Platform</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div className={toggle ? "entry" : "hidden md:flex"}>
                        <button className="login flex">
                            <img src={lock} alt="lock" className="w-[15px] mr-1" />
                            Login
                        </button>
                        <button className="signUp hover:text-black ">Sign Up For Free</button>
                    </div>
                    <div className="md:hidden w-[5%]" onClick={handleClick}>
                        <img src={!toggle ? hamburgerMenu : close} alt="menu" className="" />
                    </div>
                </div>
            </div>
        </>
    )
}