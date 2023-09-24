
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {usePrivy} from '@privy-io/react-auth';

import { AppHeader } from '../../components/app/Header';
import { QuizCard } from '../../components/quiz/Card';

export default function DashboardPage() {
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
					<div className="absolute inset-0 py-x3">
						<QuizCard 
							isReady={true}
							title="Lorem ipsum dolor sit amet"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate fermentum urna, vel hendrerit lectus venenatis a."
						/>
					</div>
        </div>
      </main>
    </>
  );
}
