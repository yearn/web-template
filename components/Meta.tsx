import	React, {ReactElement}				from	'react';
import	Head								from	'next/head';
import	{DefaultSeo}						from	'next-seo';
import	meta								from	'public/manifest.json';

function	Meta(): ReactElement {
	return (
		<>
			<Head>
				<title>{meta.name}</title>
				<meta httpEquiv={'X-UA-Compatible'} content={'IE=edge'} />
				<meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
				<meta name={'description'} content={meta.name} />
				<meta name={'msapplication-TileColor'} content={'#000000'} />
				<meta name={'theme-color'} content={meta.mainColor} />

				<link rel={'shortcut icon'} type={'image/x-icon'} href={'/favicons/favicon.ico'} />
				<link rel={'apple-touch-icon'} sizes={'180x180'} href={'/favicons/apple-touch-icon.png'} />
				<link rel={'icon'} type={'image/png'} sizes={'32x32'} href={'/favicons/favicon-32x32.png'} />
				<link rel={'icon'} type={'image/png'} sizes={'16x16'} href={'/favicons/favicon-16x16.png'} />
				<link rel={'icon'} type={'image/png'} sizes={'192x192'} href={'/favicons/android-chrome-192x192.png'} />
				<link rel={'icon'} type={'image/png'} sizes={'512x512'} href={'/favicons/android-chrome-512x512.png'} />

				<meta name={'robots'} content={'index,nofollow'} />
				<meta name={'googlebot'} content={'index,nofollow'} />
				<meta charSet={'utf-8'} />
			</Head>
			<DefaultSeo
				title={meta.name}
				defaultTitle={meta.name}
				description={meta.description}
				openGraph={{
					type: 'website',
					locale: meta.locale,
					url: meta.uri,
					site_name: meta.name,
					title: meta.name,
					description: meta.description,
					images: [
						{
							url: meta.og,
							width: 1200,
							height: 675,
							alt: meta.name
						}
					]
				}}
				twitter={{
					handle: meta.twitter,
					site: meta.twitter,
					cardType: 'summary_large_image'
				}} />
		</>
	);
}

export default Meta;