import React, {ReactElement} from 'react';
import {AppProps} from 'next/app';
import KBar from 'components/common/Kbar';
import Meta from 'components/common/Meta';
import Footer from 'components/common/StandardFooter';
import Header from '@yearn-finance/web-lib/layouts/Header.next';
import {KBarProvider} from 'kbar';
import Link from 'next/link';
import LogoYearn from 'components/icons/LogoYearn';

function	WithLayout(props: AppProps): ReactElement {
	const	{Component, pageProps, router} = props;

	return (
		<div id={'app'} className={'mx-auto mb-0 flex max-w-6xl font-aeonik'}>
			<div className={'block min-h-[100vh] w-full'}>
				<Header
					linkComponent={<Link href={''} />}
					currentPathName={router.pathname}
					onOpenMenuMobile={() => {}}
					nav={[
						{path: '/', label: 'Home'},
						{path: '/foo', label: 'Foo'},
						{path: '/bar', label: 'Bar'},
					]}
					logo={<LogoYearn className={'h-8 w-8'} />}/>
				<Component
					key={router.route}
					router={props.router}
					{...pageProps} />
				<Footer />
			</div>
		</div>
	);
}

function	AppWrapper(props: AppProps): ReactElement {
	const	{router} = props;
	const	initialActions = [
		{
			id: 'homeAction',
			name: 'Home',
			shortcut: ['h'],
			keywords: 'home',
			section: 'Navigation',
			perform: async (): Promise<boolean> => router.push('/')
		}, {
			id: 'settingsActions',
			name: 'Settings',
			shortcut: ['s'],
			keywords: 'settings configuration config',
			section: 'Navigation',
			perform: async (): Promise<boolean> => router.push('/settings')
		}
	];

	return (
		<>
			<Meta />
			<KBarProvider actions={initialActions}>
				<div className={'z-[9999]'}>
					<KBar />
				</div>
				<WithLayout {...props} />
			</KBarProvider>
		</>
	);
}

export default AppWrapper;