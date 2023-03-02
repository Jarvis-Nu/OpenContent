import { gql } from "@apollo/client"
import client from "../../apollo-client"

async function getPosts(address, query) {
    if (query) {
        const result = await client.query({
            query: gql`${query}`
        }).catch(e => console.log(e))
        if (result){
            return JSON.stringify(result)
        }
        else {
            return "{}"
        }
    }
    else {
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
                        postId
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
            return JSON.stringify(result)
        }
        else {
            return "{}"
        }
    }
}

export default async function openapivlog(req, res) {
    const { address, query } = req.query
    res.end(await getPosts(address, query))
}