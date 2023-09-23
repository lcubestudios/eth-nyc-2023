import {usePrivy} from '@privy-io/react-auth';

export default function LoginPage() {
  const {login} = usePrivy();

  return (
    <>
      <main className="flex min-h-screen min-w-full">
        <div className="flex flex-1 p-6 justify-center items-center">
          <div>
            <div className="text-center">
							<h2>Welcome to</h2>
              <h1 className="text-jumbo">Quiztopia</h1>
            </div>
            <div className="mt-6 flex justify-center text-center">
              <button
                className="bg-violet-600 hover:bg-violet-700 py-3 px-6 text-white rounded-lg"
                onClick={login}
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
