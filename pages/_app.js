import Head from 'next/head'
import '../styles/globals.css'
// import Footer from './footer'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Coffee Connoisseur</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Component {...pageProps} />
		</>
	)
}

export default MyApp