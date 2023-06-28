import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link
						rel='preload'
						href='/fonts/Raleway-Bold.ttf'
						as='font'
						crossOrigin='anonymous'
					/>
					<link
						rel='preload'
						href='/fonts/Raleway-regular.ttf'
						as='font'
						crossOrigin='anonymous'
					/>
					<link
						rel='preload'
						href='/fonts/Raleway-SemiBold.ttf'
						as='font'
						crossOrigin='anonymous'
					/>
				</Head>
				<body>
					<Main></Main>
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
