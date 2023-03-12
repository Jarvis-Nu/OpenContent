import Link from "next/link";
import Button from "./Button";
import { motion } from "framer-motion";
import { MenuAlt3Icon } from "@heroicons/react/solid"

export default function Header() {
    return(
        <div>
            <div className="w-full text-white relative bg-dark lg:flex lg:items-center lg:justify-center">
                <div className="z-20 relative w-full max-w-6xl">
                    <div className="w-full px-[25px] sm:px-[50px] lg:px-[100px] xl:px-0 py-4 sm:py-6 md:py-8 lg:py-10 flex justify-between items-center bg-dark">
                        <motion.div
                            initial={{
                                x: -500,
                                opacity: 0,
                                scale: 0.5
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                scale: 1
                            }}
                            transition={{
                                duration: 1.5
                            }}
                            className="z-20 bg-dark"
                        >
                            <h5>OPENCONTENT</h5>
                        </motion.div>
                        <motion.div
                            initial={{
                                x: -500,
                                opacity: 0,
                                scale: 0.5
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                scale: 1
                            }}
                            transition={{
                                duration: 1
                            }}
                        className="lg:flex space-x-[50px] hidden">
                            <Link href={"/"}>Blogs</Link>
                            <Link href={"/"}>Vlogs</Link>
                            <Link href={"/"}>Audio</Link>
                            <Link href={"/"}>Customize</Link>
                        </motion.div>
                        <motion.div
                            initial={{
                                x: 500,
                                opacity: 0,
                                scale: 0.5
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                scale: 1
                            }}
                            transition={{
                                duration: 1.5
                            }}
                        >
                            <div className="hidden lg:block">
                                <Button href="/" text="Get Started" type="filled" />
                            </div>
                        </motion.div>
                        <div className="lg:hidden bg-dark z-20">
                            <button onClick={() => document.querySelector(".menu").classList.toggle("-translate-y-[400px]")}>
                                <MenuAlt3Icon className="h-10 w-10" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative lg:hidden">
                    <div className="bg-dark absolute inset-x-0 top-0 h-40 -translate-y-[400px] duration-1000 ease-in-out transition transform menu">
                        <div className="w-full h-full flex flex-col items-center space-y-2.5">
                            <Link href={"/"}>Blogs</Link>
                            <Link href={"/"}>Vlogs</Link>
                            <Link href={"/"}>Audio</Link>
                            <Link href={"/"}>Customize</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}