import { useRouter } from "next/router"

export default function Button({ type, text, href }) {
    const router = useRouter()
    return(
        <button className={type == "filled" ? "text-dark bg-white py-2.5 px-5 rounded-lg leading-[20px] font-[500] min-w-[180px]" : 
        "text-white bg-dark border-2 border-white py-2.5 px-5 rounded-lg leading-[20px] font-[500] min-w-[180px]"} 
            onClick={() => router.push(href)}>{text}</button>
    )
}