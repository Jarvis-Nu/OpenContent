import { useState } from "react"
import ReactCardFlip from "react-card-flip"

export default function Benefits() {
    const [isFlipped1, setIsFlipped1] = useState(false)
    return(
        <div className="py-10 text-center">
            <div className="w-full px-[25px] sm:px-[50px] lg:px-[100px] xl:px-0 py-4 sm:py-6 md:py-8 lg:py-10">
                <div>
                    <h3 className="text-dark">Benefits of using OpenContent</h3>
                </div>
                <div>
                    <div id="card_1" className="w-40" onMouseEnter={() => setIsFlipped1(true)} onMouseLeave={() => setIsFlipped1(false)}>
                        <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal" flipSpeedBackToFront={1} flipSpeedFrontToBack={1}>
                            <div className="bg-white border-2 border-dark/50 w-40 h-40 rounded-md">HEHEHE</div>
                            <div className="bg-dark w-40 h-40 rounded-md">HOHOHOHO</div>
                        </ReactCardFlip>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}