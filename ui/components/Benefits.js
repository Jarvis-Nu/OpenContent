import { useState } from "react"
import ReactCardFlip from "react-card-flip"

export default function Benefits() {
    const [isFlipped1, setIsFlipped1] = useState(false)
    if (typeof document != "undefined") {
        document.getElementById("card_1").addEventListener("mouseover", function () {
            setIsFlipped1(!isFlipped1)
        })
    }
    return(
        <div className="py-10 text-center">
            <div className="w-full px-[25px] sm:px-[50px] lg:px-[100px] xl:px-0 py-4 sm:py-6 md:py-8 lg:py-10">
                <div>
                    <h3 className="text-dark">Benefits of using OpenContent</h3>
                </div>
                <div>
                    <div id="card_1">
                        <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
                            <div>HEHEHE</div>
                            <div>HOHOHOHO</div>
                        </ReactCardFlip>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}