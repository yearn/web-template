import React from 'react';
import Link from 'next/link';
import Meta from 'components/common/Meta';
import Footer from 'components/common/StandardFooter';
import LogoYearn from 'components/icons/LogoYearn';
import Header from '@yearn-finance/web-lib/layouts/Header.next';

import type {AppLayoutProps, AppProps} from 'next/app';
import type {ReactElement, ReactNode} from 'react';

function	WithLayout(props: AppLayoutProps): ReactElement {
	const	{Component, pageProps, router} = props;
	const	getLayout = Component.getLayout || ((page: ReactNode): ReactNode => page);

	return (
		<div id={'app'} className={'mx-auto mb-0 flex max-w-6xl font-aeonik'}>
			<div className={'block min-h-[100vh] w-full'}>
				<Header
					linkComponent={<Link href={''} />}
					currentPathName={router.pathname}
					onOpenMenuMobile={(): void => undefined}
					nav={[
						{path: '/', label: 'Home'},
						{path: '/foo', label: 'Foo'},
						{path: '/bar', label: 'Bar'}
					]}
					logo={<LogoYearn className={'h-8 w-8'} />}/>
				{getLayout(<Component
					key={router.route}
					router={props.router}
					{...pageProps} />, router)}
				<Footer />
			</div>
		</div>
	);
}

function	AppWrapper(props: AppProps): ReactElement {
	return (
		<>
			<Meta />
			<WithLayout {...props} />
		</>
	);
}

export default AppWrapper;
