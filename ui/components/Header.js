import Link from "next/link";
import Button from "./Button";
import { motion } from "framer-motion";

export default function Header() {
    return(
        <div className="w-full bg-dark text-white">
            <div className="w-full px-[100px] py-10 flex justify-between items-center">
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
                className="flex space-x-[50px]">
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
                    <Button href="/" text="Get Started" type="filled" />
                </motion.div>
            </div>
        </div>
    )
}