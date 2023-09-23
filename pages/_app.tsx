import '../styles/main.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {PrivyProvider} from '@privy-io/react-auth';
import {useRouter} from 'next/router';

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();

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

        <title>{ process.env.NEXT_PUBLIC_SITE_TITLE }</title>
        <meta name="description" content={ process.env.NEXT_PUBLIC_SITE_TITLE } />
      </Head>
      <PrivyProvider
        appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ''}
        onSuccess={() => router.push('/dashboard')}
				config={{
					// Configure your app's branding and UIs
					appearance: {
						theme: "#A3EFD0",
						accentColor: "#1F1D29",
						logo: "https://your-logo-url",
						showWalletLoginFirst: true
					},
					// Configure your app's legal policies
					legal: {
						termsAndConditionsUrl: 'https://your-terms-and-conditions-url',
						privacyPolicyUrl: 'https://your-privacy-policy-url'
					}
				}}
      >
        <Component {...pageProps} />
      </PrivyProvider>
    </>
  );
}

export default MyApp;
