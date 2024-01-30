import React from "react";
import { companyLogo1, companyLogo2, companyLogo3, companyLogo4 } from "../assets";

export default function Companies() {
    return (
        <div className="w-full bg-white py-[50px]">
            <div className="md:max-w-[1480px] m-auto max-w-[600px]">
                <h1 className="text-[#536E96]  text-center text-2xl font-bold">Trusted by over 25,000 teams around the world. </h1>
                <p className="text-center text-[#536E96] text-xl ">Leading companies use the same courses to help employees keep their skills fresh.</p>
                <div className="flex justify-center py-8 md:gap-8 flex-wrap ">
                    <img src={companyLogo1} />
                    <img src={companyLogo2} />
                    <img src={companyLogo3} />
                    <img src={companyLogo4} />
                </div>
            </div>
        </div>
    )
}