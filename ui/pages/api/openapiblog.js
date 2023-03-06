import { gql } from "@apollo/client"
import client from "../../apollo-client"

async function getPosts(address) {
    const result = await client.query({
        query: gql`
            query Posts {
                blogPosts(where: { owner: "${address}"}) {
                    id
                    nameOfPost
                    postDescription
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
        return JSON.stringify(result.data.blogPosts)
    }
    else {
        return "{}"
    }
}

export default async function openapiblog(req, res) {
    const { address } = req.query
    res.end(await getPosts(address))
}