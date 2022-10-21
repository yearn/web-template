import React, {ReactElement} from 'react';
import {AppProps} from 'next/app';
import {AnimatePresence, motion} from 'framer-motion';
import KBar from 'components/common/Kbar';
import Meta from 'components/common/Meta';
import Footer from 'components/common/StandardFooter';
import Header from 'components/common/StandardHeader';
import {KBarProvider} from 'kbar';

const transition = {duration: 0.3, ease: [0.17, 0.67, 0.83, 0.67]};
const thumbnailVariants = {
	initial: {y: 20, opacity: 0, transition},
	enter: {y: 0, opacity: 1, transition},
	exit: {y: -20, opacity: 0, transition}
};

function	WithLayout(props: AppProps): ReactElement {
	const	{Component, pageProps, router} = props;

	return (
		<React.Fragment>
			<Header
				shouldUseNetworks={true}
				shouldUseWallets={true} />
			<div id={'app'} className={'mx-auto mb-0 flex w-full max-w-6xl flex-col pt-6 md:pt-0'}>
				<AnimatePresence mode={'wait'}>
					<motion.div
						key={router.asPath}
						initial={'initial'}
						animate={'enter'}
						exit={'exit'}
						variants={thumbnailVariants}>
						<Component
							key={router.route}
							router={props.router}
							{...pageProps} />
					</motion.div>
				</AnimatePresence>
			</div>
			<Footer />
		</React.Fragment>
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