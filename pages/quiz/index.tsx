
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {usePrivy} from '@privy-io/react-auth';

export default function QuizPage() {
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
							<h2>Questions</h2>
            </div>
            <div className="mt-6 flex justify-center text-center">
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
