
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {usePrivy} from '@privy-io/react-auth';

export default function RegisterPage() {
	const router = useRouter();
  const {
    ready,
    authenticated
	} =  usePrivy();

  useEffect(() => {
    if (ready && !authenticated) {
      router.push('/');
    }
  }, [ready, authenticated, router]);

  return (
    <>
      <main className="flex min-h-screen min-w-full">
        <div className="flex flex-1 p-6 justify-center items-center">
          <div>
            <div className="text-center">
							<h2>Registration Form</h2>
            </div>
            <div className="mt-6 flex justify-center text-center">
              <button
                className="bg-accent-primary hover:bg-accent-secondary py-3 px-6 text-white rounded-lg"
                onClick={() => router.push('/dashboard')}
              >
								Submit
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
