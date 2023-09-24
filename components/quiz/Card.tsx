import { useRouter } from "next/router";
import { UiButton } from "../ui/Button";

interface QuizCardPropsType {
	isReady: boolean;
	title: string;
	description: string;
}

export function QuizCard(props: QuizCardPropsType) {
	const router = useRouter()
	const isReady = props.isReady || false;
	const title = props.title;
	const description = props.description;

	const handleQuizStart = () => {
		router.push('/quiz');
	}

	return <div
		className="w-full flex flex-col text-black"
	>
		<div className="brick-edge bg-white"></div>
		<div className="brick flex-1 relative w-full bg-white">
			<div className="flex flex-col gap-x4 px-x7 py-x6">
					{
						isReady
						? <UiButton
								label="Start"
								fontStyle="default"
								bgColor="black"
								textColor="main-primary"
								fontSize="20px"
								paddingX="x5"
								paddingY="x4"
								onClick={handleQuizStart}
							/>
						:	<div className="pointer-events-none"><UiButton
								label="Not Ready"
								fontStyle="default"
								bgColor="black"
								textColor="white"
								fontSize="20px"
								paddingX="x5"
								paddingY="x4"
								onClick={() => {}}
							/></div>
					}
				<div className="flex flex-col gap-x2">
					<h2 className="text-[20px]">{title}</h2>
					<p className="text-[12px]">{description}</p>
				</div>
			</div>
		</div>
		<div className="brick-edge bg-white"></div>
	</div>
}
