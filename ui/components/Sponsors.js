import Image from "next/image";

export default function Sponsors() {
    return(
        <div className="bg-dark/20 py-5 space-y-5 w-full">
            <div className="w-full text-center">
                <h3>Our Sponsors</h3>
            </div>
            <div className="w-full h-full flex space-x-[40px] justify-center items-center">
                <div className="w-[100px] h-[100px] relative">
                    <Image src={"/polygon.png"} layout="fill" alt="sponsor logo" />
                </div>
                <div className="w-[100px] h-[100px] relative">
                    <Image src={"/fil.png"} layout="fill" alt="sponsor logo" />
                </div>
            </div>
        </div>
    )
}