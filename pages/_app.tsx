import	React, {ReactElement}				from	'react';
import	Link								from	'next/link';
import	{AppProps}							from	'next/app';
import	{Card, Dropdown, ModalMobileMenu}	from	'@yearn-finance/web-lib/components';
import	{WithYearn, useWeb3}				from	'@yearn-finance/web-lib/contexts';
import	{useBalance}						from	'@yearn-finance/web-lib/hooks';
import	{truncateHex}						from	'@yearn-finance/web-lib/utils';
import	{NetworkEthereum, NetworkFantom, NetworkOptimism,
	NetworkArbitrum, Hamburger}				from	'@yearn-finance/web-lib/icons';
import	LogoYearn							from	'components/icons/LogoYearn';
import	Footer								from	'components/StandardFooter';
import	Meta								from	'components/Meta';

import	'../style.css';

const	options: any[] = [
	{icon: <NetworkEthereum />, label: 'Ethereum', value: 1},
	{icon: <NetworkOptimism />, label: 'Optimism', value: 10},
	{icon: <NetworkFantom />, label: 'Fantom', value: 250},
	{icon: <NetworkArbitrum />, label: 'Arbitrum', value: 42161}
];

type		THeader = {
	shouldUseWallets?: boolean,
	shouldUseNetworks?: boolean,
	children: ReactElement
}
function	Header({
	shouldUseWallets = true,
	shouldUseNetworks = true,
	children
}: THeader): ReactElement {
	const	{chainID, onSwitchChain, isActive, address, ens, openLoginModal, onDesactivate} = useWeb3();
	const	[walletIdentity, set_walletIdentity] = React.useState('Connect wallet');
	const	[selectedOption, set_selectedOption] = React.useState(options[0]);
	const	[hasMobileMenu, set_hasMobileMenu] = React.useState(false);

	React.useEffect((): void => {
		if (!isActive) {
			set_walletIdentity('Connect wallet');
		} else if (ens) {
			set_walletIdentity(ens);
		} else if (address) {
			set_walletIdentity(truncateHex(address, 4));
		} else {
			set_walletIdentity('Connect wallet');
		}
	}, [ens, address, isActive]);

	React.useEffect((): void => {
		const	_selectedOption = options.find((e): boolean => e.value === Number(chainID)) || options[0];
		set_selectedOption(_selectedOption);
	}, [chainID, isActive]);

	function	onOpenMobileMenu(): void {
		set_hasMobileMenu(true);
	}

	return (
		<header className={'z-30 mx-auto w-full py-4'}>
			<Card className={'flex h-auto items-center justify-between md:h-20'}>
				<div className={'flex w-full flex-row items-center'}>
					{children}
				</div>
				<div className={'flex flex-row items-center space-x-4 md:hidden'}>
					<button onClick={onOpenMobileMenu}>
						<Hamburger />
					</button>
				</div>
				<div className={'hidden flex-row items-center space-x-4 md:flex'}>
					{shouldUseNetworks ? (
						<div className={'hidden flex-row items-center space-x-4 md:flex'}>
							<Dropdown
								defaultOption={options[0]}
								options={options}
								selected={selectedOption}
								onSelect={(option: any): void => onSwitchChain(option.value as number, true)} />
						</div>
					) : null}
					{shouldUseWallets ? (
						<button
							onClick={(): void => {
								if (isActive)
									onDesactivate();
								else
									openLoginModal();
							}}
							data-variant={'light'}
							className={'yearn--button truncate'}>
							{walletIdentity}
						</button>
					) : null}
				</div>
			</Card>
			<ModalMobileMenu
				shouldUseWallets={shouldUseWallets}
				isOpen={hasMobileMenu}
				onClose={(): void => set_hasMobileMenu(false)}
				menu={[
					<Link key={'/'} href={'/'}>{'Home'}</Link>,
					<Link key={'/app'} href={'/app'}>{'App'}</Link>
				]}/>
		</header>
	);
}



function	AppHeader(): ReactElement {
	const	[shouldDisplayPrice, set_shouldDisplayPrice] = React.useState(true);
	const	{data: YFIBalance} = useBalance({
		for: '0x7a1057e6e9093da9c1d4c1d049609b6889fc4c67',
		token: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e'
	});

	return (
		<Header>
			<div className={'flex-row-center w-full justify-between pr-4'}>
				<Link href={'/'}>
					<div className={'flex cursor-pointer flex-row items-center space-x-4'}>
						<LogoYearn />
						<h1 className={'font-bold'}>{'Yearn'}</h1>
					</div>
				</Link>
				<div className={'hidden flex-row items-center space-x-6 md:flex'}>
					<div
						className={'cursor-pointer'}
						onClick={(): void => set_shouldDisplayPrice(!shouldDisplayPrice)}>
						{shouldDisplayPrice ? (
							<p className={'text-primary-500'}>
								{`YFI $ ${YFIBalance.normalizedPrice}`}
							</p>
						) : (
							<p className={'text-primary-500'}>
								{`Balance: ${YFIBalance.normalized} YFI`}
							</p>
						)}
					</div>
				</div>
			</div>
		</Header>
	);
}

function	MyApp(props: AppProps): ReactElement {
	const	{Component, router, pageProps} = props;
	
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
			<React.Fragment>
				<Meta />
				<div id={'app'} className={'mx-auto mb-0 grid max-w-6xl grid-cols-12 flex-col gap-x-4 md:flex-row'}>
					<div className={'col-span-12 flex min-h-[100vh] w-full flex-col px-4'}>
						<AppHeader />
						<Component
							key={router.route}
							router={router}
							{...pageProps} />
						<Footer />
					</div>
				</div>
			</React.Fragment>
		</WithYearn>
	);
}

export default MyApp;
