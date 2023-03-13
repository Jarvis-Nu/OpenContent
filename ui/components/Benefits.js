import Image from "next/image"
import { useState } from "react"
import ReactCardFlip from "react-card-flip"

export default function Benefits() {
    const [isFlipped1, setIsFlipped1] = useState(false)
    return(
        <div className="text-center px-[25px] sm:px-[50px] lg:px-[100px] xl:px-0 py-4 sm:py-6 md:py-8 lg:py-10 flex justify-center">
            <div className="w-full max-w-6xl space-y-6">
                <div>
                    <h3 className="text-dark">Benefits of using OpenContent</h3>
                </div>
                <div>
                    <div id="card_1" className="w-40" onMouseEnter={() => setIsFlipped1(true)} onMouseLeave={() => setIsFlipped1(false)}>
                        <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal" flipSpeedBackToFront={1} flipSpeedFrontToBack={1}>
                            <div className="bg-white border-2 border-dark/50 w-[275px] md:w-[300px] lg:w-[350px] min-h-[300px] rounded-md text-center hover:cursor-pointer">
                                <div className="w-full h-full p-4 space-y-2">
                                    <div className="flex justify-start">
                                        <div className="relative">
                                            <div>
                                                <Image src={"/log_1.png"} width={80} height={80} alt="logo" />
                                            </div>
                                            <div className="absolute top-6 inset-x-6">
                                                <Image src={"/log_2.png"} width={35} height={35} alt="logo" />
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="font-semibold">Free and Open-Source Content Management System</h6>
                                    <p className="text-base">
                                        OpenContent is a free and open-source content management system. 
                                        You don't need to pay any licensing fees to use it, and it's completely 
                                        customizable to suit your needs. With OpenContent, you can save money 
                                        while still getting a powerful and secure CMS.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-dark w-[275px] md:w-[300px] h-[300px] lg:w-[350px] rounded-md hover:cursor-pointer">{
                                //back design
                            }</div>
                        </ReactCardFlip>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}