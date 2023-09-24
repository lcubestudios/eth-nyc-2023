import { UiLogo } from "../ui/Logo"

export function AppHeader() {
	return <header className="w-full h-x12 text">
		<div className="relative w-full h-full flex flex-row justify-between items-center">
			<div>
				<div className="w-[180px]">
					<UiLogo />
				</div>
			</div>
		</div>
	</header>
}
