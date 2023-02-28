import contractAbi from "./OpenContent.json"
import { ethers } from "ethers"

function connectContract() {
    const contractAddress = "0x934C58569974Ea91FFa62cCB0634FdD37faF991D"
    let web3cmsContract
    try {
        const { ethereum } = window
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum)
            const signer = provider.getSigner()
            web3cmsContract = new ethers.Contract(contractAddress, contractAbi, signer)
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