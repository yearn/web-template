import React, {ReactElement} from 'react';
import {AppProps} from 'next/app';
import {WithYearn} from '@yearn-finance/web-lib/contexts';
import AppWrapper from 'components/common/AppWrapper';

import	'../style.css';

function	MyApp(props: AppProps): ReactElement {
	return (
		<WithYearn
			options={{
				web3: {
					shouldUseWallets: true,
					shouldUseStrictChainMode: false,
					defaultChainID: 1,
					supportedChainID: [1, 10, 250, 42161, 1337, 31337]
				}
			}}>
			<AppWrapper {...props} />
		</WithYearn>
	);
}

export default MyApp;
