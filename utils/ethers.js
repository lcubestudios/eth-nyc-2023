import { ethers } from "ethers";

export const loadWalletAddress = async () => {
	const getProvider = () => {
    if (typeof window !== "undefined" && window.ethereum) {
      return new ethers.BrowserProvider(window.ethereum);
    }
    return null; // Handle the case where window or ethereum is not available
  };
  try {
		const provider = getProvider();

		if (provider) {
			// Handle the case where a valid provider couldn't be obtained
			await provider.send("eth_requestAccounts", []);
			const signer = await provider.getSigner();
			const address = await signer.getAddress();
			return address;
		}
  } catch (error) {
    console.error("Error loading wallet address:", error);
    return null;
  }
};