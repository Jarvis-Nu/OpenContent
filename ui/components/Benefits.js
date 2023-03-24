export default function Benefits() {
    return(
        <div className="text-center px-[25px] sm:px-[50px] lg:px-[100px] xl:px-0 py-4 sm:py-6 md:py-8 lg:py-10 flex justify-center">
            <div className="w-full max-w-6xl space-y-14">
                <div>
                    <h3 className="text-dark">Benefits of using OpenContent</h3>
                </div>
                <div className="grid justify-center md:grid-cols-2 xl:grid-cols-3 gap-y-4 md:gap-x-4 lg:gap-y-8 xl:gap-y-0">
                <div className="bg-white border-2 border-dark/50 w-[275px] sm:w-[350px] md:w-[325px] lg:w-[350px]
                                h-[350px] sm:h-[300px] rounded-md text-center hover:cursor-pointer">
                                <div className="w-full h-full p-4">
                                    <h6 className="font-[450]">Free and Open-Source Content Management System</h6>
                                    <p className="text-base">
                                        OpenContent is a free and open-source content management system. 
                                        You don{`'`}t need to pay any licensing fees to use it, and it{`'`}s completely 
                                        customizable to suit your needs. With OpenContent, you can save money 
                                        while still getting a powerful and secure CMS.
                                    </p>
                                </div>
                        </div>
                    <div className="bg-white border-2 border-dark/50 w-[275px] sm:w-[350px] md:w-[325px] lg:w-[350px]
                             h-[400px] sm:h-[300px] rounded-md text-center hover:cursor-pointer">
                                <div className="w-full h-full p-4">
                                    <h6 className="font-[450]">Decentralized Data Backed by Blockchain Technology</h6>
                                    <p className="text-base">
                                        OpenContent uses blockchain technology to store and protect your data. 
                                        This ensures that your content is tamper-proof and secure, and eliminates 
                                        the risk of centralized data breaches. You can enjoy the freedom and security 
                                        of decentralization, with the added assurance of blockchain-backed data.
                                    </p>
                                </div>
                    </div>
                    <div className="bg-white border-2 border-dark/50 w-[275px] sm:w-[350px] md:w-[325px] lg:w-[350px]
                             h-[350px] sm:h-[300px] rounded-md text-center hover:cursor-pointer">
                                <div className="w-full h-full p-4">
                                    <h6 className="font-[450]">Prebuilt and Customizable Templates</h6>
                                    <p className="text-base">
                                        OpenContent comes with a variety of prebuilt templates that you can 
                                        use to get started quickly. Whether you{`'`}re building a blog, vlog, 
                                        podcast, or any other type of content platform, you can choose 
                                        from a range of templates that suit your needs. 
                                    </p>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}