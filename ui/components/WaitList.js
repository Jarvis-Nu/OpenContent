import Image from "next/image";
import Button from "./Button";

export default function WaitList() {
    return(
        <div className="w-full px-[25px] sm:px-[50px] lg:px-[100px] py-4 sm:py-6 md:py-8 lg:py-10 flex justify-center">
            <div className="w-full max-w-6xl px-5 py-10 bg-black rounded-md md:pl-10">
                <div className="flex flex-col items-center w-full md:flex-row ">
                    <div className="w-full h-full max-w-xl space-y-3 xl:space-y-5">
                        <h2 className="text-xl font-semibold text-center text-white md:text-3xl xl:text-5xl md:text-start">Join the <span className="text-red">OpenContent</span> waitlist today and be the first to know.</h2>
                        <div className="text-center md:text-start">
                            <Button text={"Join Waitlist"} type={"filled"} href={"/"} />
                        </div>
                    </div>
                    <div className="hidden w-full h-64 md:block">
                        <Image src={"/wait.png"} alt="image" layout="fill" />
                    </div>
                </div>
            </div>
        </div>
    )
}