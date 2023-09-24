import { useEffect, useState } from "react";
import { loadWalletAddress } from "../../utils/ethers";

export default function EthersPage() {
	const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    const fetchAddress = async () => {
      const address = await loadWalletAddress();
      setWalletAddress(address);
    };
    fetchAddress();
  }, []);

	if (walletAddress) {
		return <div>Wallet Address: {walletAddress}</div>;
	}
	else {
		return <div>No Wallet Found</div>
	}
}
