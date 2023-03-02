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
                    audioPosts(where: { owner: "${address}"}) {
                        id
                        postId
                        nameOfPost
                        postDescription
                        audioThumbnail
                        audioTitle
                        audioUrl
                        blockNumber
                        blockTimestamp
                        date
                        owner
                        postContent
                        thumbnailUrl
                        transactionHash
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

export default async function openapiaudio(req, res) {
    const { address, query } = req.query
    res.end(await getPosts(address, query))
}