import { useState } from 'react';
import { UiButton } from '../../components/ui/Button';
import { usePrivy } from '@privy-io/react-auth';

import { registerUser } from '../../utils/user';
import { useRouter } from 'next/router';

interface QuizFormPropsType {
}

export function QuizForm(props: QuizFormPropsType) {
	const router = useRouter()
	const { user } = usePrivy()
	const [formData, setFormData] = useState({
		age: '',
		gender: '',
		region: '',
		occupation: '',
		web3_experience: 0,
	});

	const handleInputChange = (evt) => {
		setFormData({
      ...formData,
      [evt.target.name]: evt.target.name === 'web3_experience' 
				? parseInt(evt.target.value) 
				: evt.target.value
		})
	};
	

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		const status = await registerUser({
			...formData,
			wallet_address: user?.wallet?.address,
			privy_id: user?.id
		})

		if (status) {
			router.push('/dashboard')
		}
		else {
			location.reload()
		}
	}

	return <form className="w-full h-full flex flex-col py-x3" onSubmit={handleSubmit}>
			<div className="flex-1 relative">
				<div
					className="absolute inset-0 w-full h-full flex flex-col text-black"
				>
					<div className="brick-edge bg-white"></div>
					<div className="brick flex-1 relative w-full bg-white">
						<div className="flex flex-col gap-x6 px-x6 py-x5">
							<section
								className="flex flex-col text-white"
							>
								<div className="brick-edge bg-black"></div>
								<div className="brick flex-1 relative w-full bg-black">
									<div className="flex flex-col gap-x4 px-5 pt-x4 py-x8 text-center">
										<h2>Welcome</h2>	
										<p>Learn Crypto, Earn Crypto</p>
									</div>
								</div>
								<div className="brick-edge bg-black"></div>
							</section>
							<section className="text-center">
								<h1 className="text-[40px]">Registration</h1>
							</section>
							<section>
								<div className="flex flex-col gap-x3">
									<div>
										<div>
											<input 
												name="age"
												type="text"
												placeholder="How old are you?"
												value={formData.age}
												onChange={handleInputChange}
											/>
										</div>
									</div>
									<div>
										<div>
											<select 
												name="gender"
												value={formData.gender}
												onChange={handleInputChange}
											>
												<option value="" disabled>Select you gender</option>
												<option value="male">Male</option>
												<option value="female">Female</option>
												<option value="other">Female</option>
												<option value="prefer not to say">Prefer not to say</option>
											</select>
										</div>
									</div>
									<div>
										<div>
											<select 
												name="region"
												value={formData.region}
												onChange={handleInputChange}
											>
												<option value="" disabled>Where are you from?</option>
												<option value="country">Country</option>
											</select>
										</div>
									</div>
									<div>
										<div>
											<input 
												name="occupation"
												type="text"
												placeholder="What do you do?"
												value={formData.occupation}
												onChange={handleInputChange}
											/>
										</div>
									</div>
									<div className="flex flex-col gap-x3 px-x3">
										<label>What's your Web3 experience</label>
										<div>
											<input 
												name="web3_experience"
												type="range"
												min="0"
												max="10"
												value={formData.web3_experience}
												onChange={handleInputChange}
											/>
										</div>
									</div>
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
