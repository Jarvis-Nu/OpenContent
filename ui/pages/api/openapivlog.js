import { gql } from "@apollo/client"
import client from "../../apollo-client"

async function getPosts(address) {
    const result = await client.query({
        query: gql`
            query Posts {
                vlogPosts(where: { owner: "${address}"}) {
                    blockNumber
                    blockTimestamp
                    date
                    id
                    nameOfPost
                    owner
                    postContent
                    postDescription
                    thumbnailUrl
                    transactionHash
                    videoThumbnail
                    videoTitle
                    videoUrl
                }
            }
        `
    }).catch(e => console.log(e))
    if (result){
        return JSON.stringify(result.data.vlogPosts)
    }
    else {
        return "{}"
    }
}

export default async function openapivlog(req, res) {
    const { address } = req.query
    res.end(await getPosts(address))
}