import { useState } from 'react';
import { UiButton } from '../../components/ui/Button';
import { useRouter } from 'next/router';
// import { usePrivy } from '@privy-io/react-auth';

// import { registerUser } from '../../utils/user';

export function QuizForm() {
	const router = useRouter()
	// const { user } = usePrivy()
	const [selectedOption, setSelectedOption] = useState();

	const handleChoiceSelection = (evt) => {
		setSelectedOption(evt.target.value)
	};

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		console.log(selectedOption)
		router.push('/result')
	}

	const testData =['A','B','C','D']

	return <form className="w-full h-full flex flex-col py-x3" onSubmit={handleSubmit}>
			<div className="flex-1 relative">
				<div className="absolute inset-0 w-full h-full flex flex-col text-black">
					<div className="brick-edge bg-white"></div>
					<div className="brick flex-1 relative w-full bg-white">
						<div className="flex flex-col gap-x6 px-x6 py-x5">
							<section className="h-[260px] flex flex-col text-white">
								<div className="brick-edge bg-black"></div>
								<div className="brick flex-1 relative w-full bg-black">
									<div className="flex flex-col gap-x3 px-5 pt-x4 py-x8">
										<h2 className="text-main-primary font-default text-[18px]">Question #</h2>	
										<p className="text-[18px]">Learn Crypto, Earn Crypto</p>
									</div>
								</div>
								<div className="brick-edge bg-black"></div>
							</section>
							<section className="text-center">
								<h1 className="text-[24px]">01:00:00</h1>
							</section>
							<section>
								<div className="flex flex-col gap-x3">
									{
										testData.map((order, ndx) => {
											const color = selectedOption === order
												? 'main-primary'
												: 'white'

											return <div 
												className={`flex flex-col text-black`}
												key={ndx}
											>
												<div className={`brick-edge bg-${color}`}></div>
												<div className={`brick flex-1 relative w-full bg-${color}`}>
													<div className={`flex flex-row gap-x5 py-x0.5 px-x3`}>
														<p className={`text-[24px] leading-[38px]`}>{order}</p>
														<div>
															<input 
																id={`choice_${order}`}
																className="hidden"
																name={`choice`}
																type="radio"
																value={order}
																placeholder="How old are you?"
																onChange={handleChoiceSelection}
															/>
															<label htmlFor={`choice_${order}`} className="text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </label>
														</div>
													</div>
												</div>
												<div className={`brick-edge bg-${color}`}></div>
											</div>
										})
									}
								</div>
							</section>
						</div>
					</div>
					<div className="brick-edge bg-white"></div>
				</div>
			</div>
			<div className="mt-6 flex justify-center text-center">
				<UiButton
					label="Submit"
					onClick={handleSubmit}
				/>
			</div>
				
	</form>
}
