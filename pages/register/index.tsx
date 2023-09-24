
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {usePrivy} from '@privy-io/react-auth';

import { AppHeader } from '../../components/app/Header';
import { RegisterForm } from '../../components/register/Form';
import { checkUser } from '../../utils/user';

export default function RegisterPage() {
	const router = useRouter();
  const {
    ready,
    authenticated
	} = usePrivy();

	const handleAuthenticate = async () => {
		const checkUserStatus = await checkUser(user?.id)
		
		if (checkUserStatus) {
			router.push(`/${checkUserStatus}`);
		}
	}

  useEffect(() => {
    if (ready && !authenticated) {
      router.push('/');
    }

    if (ready && authenticated) {
      handleAuthenticate()
    }
  }, [ready, authenticated, router]);

  return (
    <>
      <main id="viewport" className="flex flex-col">
				<AppHeader />
        <div className="flex-1 relative">
					<div className="absolute inset-0">
						<RegisterForm />
					</div>
        </div>
      </main>
    </>
  );
}
