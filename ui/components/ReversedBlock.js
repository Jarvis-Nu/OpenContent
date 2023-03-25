import Image from "next/image";
import Button from "./Button";

export default function ReversedBlock({ subtitle, title, description, image }) {
    return(
        <div className="w-full px-[25px] sm:px-[50px] lg:px-[100px] py-4 sm:py-6 md:py-8 lg:py-10 flex justify-center">
            <div className="max-w-6xl">
                <div className="w-full flex flex-col space-y-2.5 sm:space-y-20 md:items-center lg:space-y-0 lg:flex-row lg:space-x-16">
                    <div className="text-start space-y-2.5 lg:max-w-md">
                        <p className="text-red font-[500]">{subtitle}</p>
                        <h3 className="font-semibold">{title}</h3>
                        <p>
                            {description}
                        </p>
                        <Button text={"Get started"} />
                    </div>
                    <div className="relative max-h-[250px] max-w-[500px]">
                        <Image src={image} alt="image" width={500} height={300} />
                    </div>
                </div>
            </div>
        </div>
    )
}