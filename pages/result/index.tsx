
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {usePrivy} from '@privy-io/react-auth';

import { AppHeader } from '../../components/app/Header';
import { UiButton } from '../../components/ui/Button';

export default function RegisterPage() {
	const router = useRouter();
  const {
    ready,
    authenticated
	} = usePrivy();

  useEffect(() => {
    if (ready && !authenticated) {
      router.push('/');
    }
  }, [ready, authenticated, router]);

  return (
    <>
      <main id="viewport" className="flex flex-col">
				<AppHeader />
        <div className="flex-1 relative">
					<div className="absolute inset-0">
						<div className="w-full h-full flex flex-col gap-x3 py-x3">
							<div className="flex-1 relative">
								<div className="absolute inset-0 w-full h-full flex flex-col text-black">
									<div className="brick-edge bg-white"></div>
									<div className="brick flex-1 relative w-full bg-white">
										<div className="w-full h-full px-6 py-5">
											<div className="relative w-full h-full">
												<div className="absolute inset-0 w-full h-full flex flex-col text-white">
													<div className="brick-edge bg-black"></div>
													<div className="brick flex-1 relative w-full bg-black">
														<div className="w-full h-full flex flex-row justify-center items-center">
															<h1 className="text-[32px] text-main-primary">Congratulations!</h1>
														</div>
													</div>
													<div className="brick-edge bg-black"></div>
												</div>
											</div>
										</div>
									</div>
									<div className="brick-edge bg-white"></div>
								</div>
							</div>
							<UiButton
								label="Back to Dashboard"
								onClick={() => {router.push('/')}}
							/>
						</div>
					</div>
        </div>
      </main>
    </>
  );
}
