import { useRouter } from "next/router"
import { usePrivy } from "@privy-io/react-auth"

import { UiLogo } from "../ui/Logo"
import { UiButton } from "../ui/Button"

export function AppHeader() {
	const router = useRouter()
	const { logout } = usePrivy()

	return <header className="w-full h-x12 text">
		<div className="relative w-full h-full flex flex-row justify-between items-center">
			<div>
				<button 
					className="w-[180px]"
					onClick={() => {router.push('/')}}
				>
					<UiLogo />
				</button>
			</div>
			<div>
				<div className="w-[120px]">
					<UiButton 
						label='Log Out'
						onClick={logout}
					/>
				</div>
			</div>
		</div>
	</header>
}
