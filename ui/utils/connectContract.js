import contractAbi from "./OpenContent.json"
import { ethers } from "ethers"

function connectContract() {
    const contractAddress = "0xC7c2b3448150769802DA9D21f39a0934fDBbE386"
    let web3cmsContract
    try {
        const { ethereum } = window
        const { abi } = contractAbi
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum)
            const signer = provider.getSigner()
            web3cmsContract = new ethers.Contract(contractAddress, abi, signer)
        }
        else {
            console.log("Ethereum object does not exist")
        }
    } catch (error) {
        console.log("Error: ", error)
    }
    return web3cmsContract
}

export default connectContract