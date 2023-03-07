import ContentItem from "./ContentItem";
import { useEffect, useState } from "react";
import { useSigner } from 'wagmi';
import Loader from "./Loader";
import axios from "axios"

export default function ContentList() {
    const [address, setAddress] = useState(null)
    const [posts, setPosts] = useState([{}])
    const { data: signer } = useSigner()

    async function fetchData() {
        const result = await axios.get(`/api/openapiblog?address=${address}`)
        return result
    }

    async function getPosts() {
        const res = await fetchData()
        console.log(res)
        setPosts(res.data)
    }
  
    async function getLoggedIn() {
      let userAddress = (await signer?.getAddress())?.toString()
      if (userAddress != null) {
        setAddress(userAddress)
        await getPosts()
      }
    }

    useEffect(() => {
      async() => getLoggedIn()
    }, [address])

    getLoggedIn()
    return (
        <div className="w-32 min-h-screen border-r-2 sm:w-72">
            <div>
                <h3 className="text-xl font-semibold p-2.5 border-b-2">Content List</h3>
            </div>
            <div className="flex flex-col space-y-1.5 max-h-screen overflow-y-scroll scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-[#DCD9CD] pb-5">
                {
                    address && posts.length > 0 ? posts.map(post => <ContentItem key={post?.id} title={post?.nameOfPost} id={post?.id} />) :
                    <div className="flex flex-col items-center space-y-1.5">
                        <Loader />
                    </div> 
                }
            </div>
        </div>
    )
}