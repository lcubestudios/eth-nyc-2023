import '../styles/main.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {PrivyProvider} from '@privy-io/react-auth';
import { useRouter } from 'next/router';

function MyApp({Component, pageProps}: AppProps) {
	const router = useRouter()

	const handleAuth = () => {
		router.push('/register')
	}

  return (
    <>
      <Head>
        <link rel="icon" href={process.env.NEXT_PUBLIC_SITE_FAVICON} sizes="any" />
        <link rel="icon" href={process.env.NEXT_PUBLIC_SITE_ICON} type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/favicons/manifest.json" />

        <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
        <meta name="description" content={process.env.NEXT_PUBLIC_SITE_TITLE} />
      </Head>
      <PrivyProvider
        appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ''}
				onSuccess={handleAuth}
				config={{
					// Configure your app's branding and UIs
					appearance: {
						theme: "#ABF131",
						accentColor: "#1F1D29",
						logo: "#",
						showWalletLoginFirst: true
					},
				}}
      >
        <Component {...pageProps} />
      </PrivyProvider>
    </>
  );
}

export default MyApp;
