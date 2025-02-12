import { ThirdwebSDK } from "@thirdweb-dev/sdk"
import { ethers } from "ethers"

declare global {
  interface Window {
    ethereum: any
  }
}

export async function connectWallet() {
  try {
    if (!window.ethereum) {
      console.error("MetaMask is not installed!")
      return null
    }

    const sdk = new ThirdwebSDK("mainnet")
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    // Detect network
    const network = await provider.getNetwork()
    if (!network) {
      console.error("Failed to detect network")
      return null
    }

    await provider.send("eth_requestAccounts", [])
    const signer = provider.getSigner()
    sdk.updateSignerOrProvider(signer)
    const address = await signer.getAddress()
    return address
  } catch (error) {
    console.error("Failed to connect wallet:", error)
    return null
  }
}

export function disconnectWallet() {
  // Clear any stored wallet information
  console.log("Wallet disconnected")
}
