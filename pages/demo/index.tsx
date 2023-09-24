import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {usePrivy} from '@privy-io/react-auth';
import Head from 'next/head';

export default function DemoPage() {
  const router = useRouter();
  const {
    ready,
    authenticated,
    user,
    logout,
    linkEmail,
    linkWallet,
    unlinkEmail,
    linkPhone,
    unlinkPhone,
    unlinkWallet,
    linkGoogle,
    unlinkGoogle,
    linkTwitter,
    unlinkTwitter,
    linkDiscord,
    unlinkDiscord,
  } = usePrivy();

  useEffect(() => {
    if (ready && !authenticated) {
      router.push('/');
    }
  }, [ready, authenticated, router]);

  const numAccounts = user?.linkedAccounts?.length || 0;
  const canRemoveAccount = numAccounts > 1;

  const email = user?.email;
  const phone = user?.phone;
  const wallet = user?.wallet;

  const googleSubject = user?.google?.subject || null;
  const twitterSubject = user?.twitter?.subject || null;
  const discordSubject = user?.discord?.subject || null;

  return (
    <>
      <Head>
        <title>Privy Auth Demo</title>
      </Head>

      <main id="viewport">
        {ready && authenticated ? (
          <>
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl font-semibold">Privy Auth Demo</h1>
              <button
                onClick={logout}
                className="text-sm bg-accent-primary hover:bg-accent-secondary py-2 px-4 rounded-md text-white"
              >
                Logout
              </button>
            </div>
            <div className="mt-12 flex gap-4 flex-wrap">
              {googleSubject ? (
                <button
                  onClick={() => {
                    unlinkGoogle(googleSubject);
                  }}
                  className="text-sm border border-main-tertiary hover:border-tertiary-secondary py-2 px-4 rounded-md text-main-tertiary hover:text-tertiary-secondary disabled:border-gray-500 disabled:text-gray-500 hover:disabled:text-gray-500"
                  disabled={!canRemoveAccount}
                >
                  Unlink Google
                </button>
              ) : (
                <button
                  onClick={() => {
                    linkGoogle();
                  }}
                  className="text-sm bg-main-tertiary hover:bg-tertiary-secondary py-2 px-4 rounded-md text-black"
                >
                  Link Google
                </button>
              )}

              {twitterSubject ? (
                <button
                  onClick={() => {
                    unlinkTwitter(twitterSubject);
                  }}
                  className="text-sm border border-main-tertiary hover:border-tertiary-secondary py-2 px-4 rounded-md text-main-tertiary hover:text-tertiary-secondary disabled:border-gray-500 disabled:text-gray-500 hover:disabled:text-gray-500"
                  disabled={!canRemoveAccount}
                >
                  Unlink Twitter
                </button>
              ) : (
                <button
                  className="text-sm bg-main-tertiary hover:bg-tertiary-secondary py-2 px-4 rounded-md text-black"
                  onClick={() => {
                    linkTwitter();
                  }}
                >
                  Link Twitter
                </button>
              )}

              {discordSubject ? (
                <button
                  onClick={() => {
                    unlinkDiscord(discordSubject);
                  }}
                  className="text-sm border border-main-tertiary hover:border-tertiary-secondary py-2 px-4 rounded-md text-main-tertiary hover:text-tertiary-secondary disabled:border-gray-500 disabled:text-gray-500 hover:disabled:text-gray-500"
                  disabled={!canRemoveAccount}
                >
                  Unlink Discord
                </button>
              ) : (
                <button
                  className="text-sm bg-main-tertiary hover:bg-tertiary-secondary py-2 px-4 rounded-md text-black"
                  onClick={() => {
                    linkDiscord();
                  }}
                >
                  Link Discord
                </button>
              )}

              {email ? (
                <button
                  onClick={() => {
                    unlinkEmail(email.address);
                  }}
                  className="text-sm border border-main-tertiary hover:border-tertiary-secondary py-2 px-4 rounded-md text-main-tertiary hover:text-tertiary-secondary disabled:border-gray-500 disabled:text-gray-500 hover:disabled:text-gray-500"
                  disabled={!canRemoveAccount}
                >
                  Unlink email
                </button>
              ) : (
                <button
                  onClick={linkEmail}
                  className="text-sm bg-main-tertiary hover:bg-tertiary-secondary py-2 px-4 rounded-md text-black"
                >
                  Connect email
                </button>
              )}
              {wallet ? (
                <button
                  onClick={() => {
                    unlinkWallet(wallet.address);
                  }}
                  className="text-sm border border-main-tertiary hover:border-tertiary-secondary py-2 px-4 rounded-md text-main-tertiary hover:text-tertiary-secondary disabled:border-gray-500 disabled:text-gray-500 hover:disabled:text-gray-500"
                  disabled={!canRemoveAccount}
                >
                  Unlink wallet
                </button>
              ) : (
                <button
                  onClick={linkWallet}
                  className="text-sm bg-main-tertiary hover:bg-tertiary-secondary py-2 px-4 rounded-md text-white border-none"
                >
                  Connect wallet
                </button>
              )}
              {phone ? (
                <button
                  onClick={() => {
                    unlinkPhone(phone.number);
                  }}
                  className="text-sm border border-main-tertiary hover:border-tertiary-secondary py-2 px-4 rounded-md text-main-tertiary hover:text-tertiary-secondary disabled:border-gray-500 disabled:text-gray-500 hover:disabled:text-gray-500"
                  disabled={!canRemoveAccount}
                >
                  Unlink phone
                </button>
              ) : (
                <button
                  onClick={linkPhone}
                  className="text-sm bg-main-tertiary hover:bg-tertiary-secondary py-2 px-4 rounded-md text-white border-none"
                >
                  Connect phone
                </button>
              )}
            </div>

            <p className="mt-6 font-bold uppercase text-sm text-gray-600">User object</p>
            <textarea
              value={JSON.stringify(user, null, 2)}
              className="max-w-4xl bg-slate-700 text-slate-50 font-mono p-4 text-xs sm:text-sm rounded-md mt-2"
              rows={20}
              disabled
            />
          </>
        ) : null}
      </main>
    </>
  );
}
