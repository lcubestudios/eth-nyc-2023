import {useRouter} from 'next/router';
import {usePrivy} from '@privy-io/react-auth';
import {useEffect} from 'react';

import {checkUser} from '../utils/user'

import {UiLogo} from '../components/ui/Logo';
import {UiButton} from '../components/ui/Button';

export default function LoginPage() {
	const router = useRouter();
  const {
    ready,
    authenticated,
		user,
		login,
		logout
	} = usePrivy();

	const handleAuthenticate = async () => {
		console.log('home')
		const checkUserStatus = await checkUser(user?.id)
		
		if (checkUserStatus) {
			router.push(`/${checkUserStatus}`);
		}
	}

  useEffect(() => {
    if (ready && authenticated) {
      handleAuthenticate()
    }
  }, [ready, authenticated, router]);

  return (
    <>
      <main id="viewport">
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <div className="flex flex-col items-center gap-x8 pt-[133px]">
							<div className="w-[187px]">
								<UiLogo type="icon" />
							</div>
							<div className="w-[160px]">
								<UiLogo 
									type="text" 
									color="white"
								/>
							</div>
            </div>
            <div className="mt-[200px] flex justify-center text-center">
							<UiButton 
								label='Earn Hearts'
								onClick={login}
							/>
            </div>
          </div>
					<footer className="text-center px-x3">
						<label className="text-[10px]">Team Quiztopia / ETHNewYork 2023</label>
					</footer>
        </div>
      </main>
    </>
  );
}
