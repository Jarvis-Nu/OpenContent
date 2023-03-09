import { useRouter } from "next/router"

export default function Button({ type, text, href }) {
    const router = useRouter()
    return(
        <button className={type == "filled" ? "text-dark bg-white py-2.5 px-5 rounded-lg leading-[20px] font-[500]" : ""} 
            onClick={() => router.push(href)}>{text}</button>
    )
}