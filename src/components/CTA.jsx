import { cta } from "../assets";

export default function CTA() {
    return (
        <div className="w-full bg-[#E9F8F3] py-24">
            <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px] items-center">
                <img src={cta} className="w-[650px] mx-auto" />
                <div>
                    <h1 className="py-2 text-3xl font-semibold ">Join
                        <span className="text-[#20B486]"> Worlds largest </span>
                        learning platform today
                    </h1>
                    <p className="py-2  text-lg text-gray-600">
                        Start learrning by registering fo free                    </p>
                    <button className="max-[780px]:w-full my-4 signUp bg-[#20B486] hover:text-black  ">Sign Up For Free</button>

                </div>

            </div>
        </div>
    )
}