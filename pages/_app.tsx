import '../styles/main.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {PrivyProvider} from '@privy-io/react-auth';
import {useRouter} from 'next/router';

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();

	const handleAuthenticate = () => {
		const isUser = false
		if (isUser) {
			router.push('/dashboard');
		}
		else {
			router.push('/register');
		}
	}

  return (
    <>
      <Head>
        <link rel="preload" href="/fonts/AdelleSans-Regular.woff" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/AdelleSans-Regular.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/AdelleSans-Semibold.woff" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/AdelleSans-Semibold.woff2" as="font" crossOrigin="" />

        <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicons/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/favicons/manifest.json" />

        <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
        <meta name="description" content={process.env.NEXT_PUBLIC_SITE_TITLE} />
      </Head>
      <PrivyProvider
        appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ''}
        onSuccess={handleAuthenticate}
				config={{
					// Configure your app's branding and UIs
					appearance: {
						theme: "#A3EFD0",
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
