import React from 'react';
import AppWrapper from 'components/common/AppWrapper';
import {WithYearn} from '@yearn-finance/web-lib/contexts/WithYearn';

import type {AppProps} from 'next/app';
import type {ReactElement} from 'react';

import	'../style.css';

function	MyApp(props: AppProps): ReactElement {
	return (
		<WithYearn
			options={{
				web3: {
					shouldUseWallets: true,
					defaultChainID: 1,
					supportedChainID: [1, 10, 250, 42161, 1337, 31337]
				}
			}}>
			<AppWrapper {...props} />
		</WithYearn>
	);
}

export default MyApp;
