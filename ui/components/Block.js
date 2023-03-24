import Image from "next/image";
import Button from "./Button";

export default function Block() {
    return (
        <div className="w-full px-[25px] sm:px-[50px] lg:px-[100px] py-4 sm:py-6 md:py-8 lg:py-10 flex justify-center">
            <div className="max-w-6xl">
                <div className="w-full flex flex-col space-y-2.5 sm:space-y-20 md:items-center lg:space-y-0 lg:flex-row lg:space-x-16">
                    <div className="max-w-xl">
                        <div className="relative max-h-[250px] max-w-[500px]">
                            <Image src={"/pic_1.png"} alt="image" width={500} height={300} />
                        </div>
                    </div>
                    <div className="text-start space-y-2.5 lg:max-w-md">
                        <p className="text-red font-[500]">Blog templates</p>
                        <h3 className="font-semibold">Professional Blog Templates</h3>
                        <p>
                            With OpenContent{"'"}s blog templates, you can easily create a stunning and functional blog. 
                            Whether you{"'"}re a professional blogger or just starting out, our templates provide 
                            a variety of options to suit your needs.
                            From classic blog layouts to modern designs, our templates make it easy to create a blog that stands out.
                        </p>
                        <Button text={"Get started"} />
                    </div>
                </div>
            </div>
        </div>
    )
}