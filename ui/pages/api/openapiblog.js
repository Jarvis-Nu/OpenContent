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
                    blogPosts(where: { owner: "${address}"}) {
                        id
                        postId
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
            return JSON.stringify(result)
        }
        else {
            return "{}"
        }
    }
}

export default async function openapiblog(req, res) {
    const { address, query } = req.query
    res.end(await getPosts(address, query))
}