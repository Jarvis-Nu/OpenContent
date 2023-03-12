import Button from "./Button";
import Image from "next/image"

export default function Hero() {
    return(
        <div className="w-full bg-dark h-full px-[25px] sm:px-[50px] lg:px-[100px] space-y-5 text-center pb-5 sm:pb-24 flex flex-col items-center">
            <div className="space-y-5 flex flex-col lg:flex-row lg:items-center lg:space-y-0 lg:space-x-5 xl:space-x-16">
                <div className="text-center lg:text-start space-y-5 lg:max-w-md xl:max-w-xl">
                    <p className="text-red text-sm sm:text-base tracking-wide pt-5">The Decentralized Solution</p>
                    <h3 className="text-white">Secure Your Content with OpenContent</h3>
                    <p className="text-ash text-[14px]">
                        OpenContent is powered by blockchain technology, which means that every change you make to your content 
                        is recorded in an immutable ledger. This provides unparalleled transparency and accountability, giving 
                        you complete control over your content.
                    </p>
                    <div className="space-y-5 sm:flex sm:space-x-5 sm:space-y-0 sm:justify-center sm:items-center lg:justify-start">
                        <div>
                            <Button type="filled" text="Get Started" href="/" />
                        </div>
                        <div>
                            <Button type="outlined" text="Request Demo" href="/" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="relative max-h-[250px] max-w-[500px]">
                        <Image src={"/pic_1.png"} alt="image" width={500} height={300} />
                    </div>
                </div>
            </div>
        </div>
    )
}