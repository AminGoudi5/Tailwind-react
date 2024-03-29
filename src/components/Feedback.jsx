import React from "react";
import FeedbackCard from "./FeedbackCard";
import Slider from "react-slick";
import { courses } from "../data/Courses";
export default function Feedback() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div className="w-full bg-white py-32">
            <div className="md:max-w-[1480px] m-auto  max-w-[600px]">
                <h1 className="text-3xl py-3 font-bold ">
                    Student <span className="text-[#20B4B6]">Feedback</span>
                </h1>
                <p className="text-[#6D737A]">
                    Various versions have evolved over the years, sometimes by accident.
                </p>

                <Slider {...settings} >
                    <FeedbackCard />
                    <FeedbackCard />
                </Slider>

            </div>
        </div>
    )
}
