import React from "react"
import { BsArrowUpRight } from "react-icons/bs";
export default function CategoryCard({ icons, title }) {
    return (
        <div className="border  p-4 shadow-lg  flex items-center bg-white rounded-md  hover:border-[#20B486] justify-between hover:cursor-pointer group/edit">
            <div className="flex gap-4 ">
                <div className="text-gray-600 group-hover/edit:text-black">
                    {icons}
                </div>

                <h1 className="text-2xl ">{title}</h1>
            </div>
            <div className="p-3 rounded-lg hover:bg-[#20B486] arrow-icon">
                <BsArrowUpRight
                    className="arrow "
                    size={22}
                    style={{ color: '#20B486' }}
                />

            </div>
        </div>



    )
}