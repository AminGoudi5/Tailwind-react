import React from "react"
import { logo } from "../assets"
import { FaFacebookF, FaDribbble, FaLinkedinIn, FaInstagram, FaBehance } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="w-full bg-white py-24">
            <div className="md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2 gap-8 max-w-[600px]">
                <div className="col-span-2 ">
                    <img src={logo} className="h-[25px]" />
                    <h3 className="text-2xl font-bold mt-10">Contact Us</h3>
                    <h3 className="py-2 text-[#6D737A]">Call : +123 400 123</h3>
                    <h3 className="py-2 text-[#6D737A]">Praesent null massa,hendrerit <br /> vesibulum gravida in , feugiat auctor felis</h3>
                    <h3 className="py-2 text-[#363A3D]">Email: exampel@mail.com </h3>
                    <div className="flex gap-4 py-4 ">
                        <div className="p-4 bg-[#E9F8F3] rounded-xl hover:cursor-pointer">
                            <FaFacebookF
                                size={25} style={{ color: '#4DC39E' }} />
                        </div>
                        <div className="p-4 bg-[#E9F8F3] rounded-xl hover:cursor-pointer">
                            <FaDribbble
                                size={25} style={{ color: '#4DC39E' }} />
                        </div>
                        <div className="p-4 bg-[#E9F8F3] rounded-xl hover:cursor-pointer">
                            <FaLinkedinIn
                                size={25} style={{ color: '#4DC39E' }} />
                        </div>
                        <div className="p-4 bg-[#E9F8F3] rounded-xl hover:cursor-pointer">
                            <FaInstagram
                                size={25} style={{ color: '#4DC39E' }} />
                        </div>
                        <div className="p-4 bg-[#E9F8F3] rounded-xl hover:cursor-pointer">
                            <FaBehance
                                size={25} style={{ color: '#4DC39E' }} />
                        </div>
                    </div>

                </div>
                <div>
                    <h3 className="text-2xl font-bold">Explore</h3>
                    <ul className="py-6 text-[#6D737A] footerList">
                        <li >Home</li>
                        <li>About</li>
                        <li>Course</li>
                        <li >Blog</li>
                        <li>Contact</li>

                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-bold">Category</h3>
                    <ul className="py-6 text-[#6D737A] footerList">
                        <li>Design</li>
                        <li>Development</li>
                        <li>Marketing</li>
                        <li>Business</li>
                        <li>LifeStyle</li>
                        <li>Photography</li>
                        <li>Music</li>
                    </ul>
                </div>
                <div className="max-[780px]:col-span-2 ">
                <h3 className="text-2xl font-bold">Subscribe</h3>
                <h3 className="py2 text-[#6D737A]">Praesent null massa,hendrerit <br /> vesibulum gravida in , feugiat auctor felis</h3>
                 <form className="py-4">
                    <input className="bg-[#F2F3F4] p-4 w-full rounded" placeholder="Email here" type="text" />
                    <button className="max-[780px]:w-full px-5 py-3 my-4 signUp bg-[#20B486] hover:text-black font-medium ">Subscribe Now</button>

                    </form>   
                     
                </div>
            </div>
        </div>
    )
}