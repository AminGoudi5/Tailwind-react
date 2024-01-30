import React from "react"
import CategoryCard from "./CategoryCard";
import { LiaPenNibSolid } from "react-icons/lia";
import { BsFiletypeHtml,BsHeartPulse  } from "react-icons/bs";
import { PiMicrophoneStageLight,PiChalkboardTeacherThin , PiSunHorizonLight,PiMusicNoteThin,PiBagSimpleThin ,PiDatabaseThin  } from "react-icons/pi";
import { HiOutlineCamera } from "react-icons/hi";
import { MdOutlineLightbulb } from "react-icons/md";
import { SiMoleculer } from "react-icons/si";




export default function Categories() {
    return (
        <div className="w-full bg-[#F0FBF7] py-24">
            <div className="md:max-w-[1480px] m-auto max-w-[600px]">
                <h1 className="text-3xl font-bold md:leading-[72px]"> Most <span className="text-[#20B486]"> Popular Categories </span>
                </h1>
                <p className=" text-lg text-gray-600">
                    Various versions have evolved over the years, sometimes by accident.
                </p>
                <div className="grid lg:grid-cols-4  grid-cols-2 py-12 gap-6">
                    <CategoryCard
                        icons={<LiaPenNibSolid size={30} />}
                        title={"Design"}
                    />
                    <CategoryCard
                        icons={<BsFiletypeHtml size={30} />}
                        title={"Development"}
                    />
                    <CategoryCard
                        icons={<PiMicrophoneStageLight size={30} />}
                        title={"Marketing"}
                    />
                    <CategoryCard
                        icons={<PiBagSimpleThin size={30} />}
                        title={"Business"}
                    />
                    <CategoryCard
                        icons={<PiSunHorizonLight size={30} />}
                        title={"Lifestyle"}
                    />
                    <CategoryCard
                        icons={<HiOutlineCamera  size={30} />}
                        title={"Photography"}
                    />
                    <CategoryCard
                        icons={<PiMusicNoteThin  size={30} />}
                        title={"Music"}
                    />
                    <CategoryCard
                        icons={<PiDatabaseThin  size={30} />}
                        title={"Data Science"}
                    />
                    <CategoryCard
                        icons={<MdOutlineLightbulb  size={30} />}
                        title={"Personal Develop"}
                    />
                    <CategoryCard
                        icons={<BsHeartPulse  size={30} />}
                        title={"Helth & Fitness"}
                    />
                     <CategoryCard
                        icons={<SiMoleculer  size={30} />}
                        title={"Finance"}
                    />
                    <CategoryCard
                        icons={<PiChalkboardTeacherThin   size={30} />}
                        title={"Teaching"}
                    />

                </div>
            </div>

        </div>
    )
}