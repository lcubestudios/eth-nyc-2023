
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {usePrivy} from '@privy-io/react-auth';

import { AppHeader } from '../../components/app/Header';
import { QuizForm } from '../../components/quiz/Form';

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
						<QuizForm />
					</div>
        </div>
      </main>
    </>
  );
}
