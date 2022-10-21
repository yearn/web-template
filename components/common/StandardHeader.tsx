import	React, {ReactElement, useEffect, useState}				from	'react';
import	Link								from	'next/link';
import	{Card, Dropdown, ModalMobileMenu}	from	'@yearn-finance/web-lib/components';
import	{useWeb3}							from	'@yearn-finance/web-lib/contexts';
import	{Hamburger, NetworkArbitrum, NetworkEthereum,
	NetworkFantom, NetworkOptimism}				from	'@yearn-finance/web-lib/icons';
import	{truncateHex}						from	'@yearn-finance/web-lib/utils';
import	KBarButton							from	'components/common/KBarButton';
import	LogoYearn							from	'components/icons/LogoYearn';

type	TOptions = {
	icon: ReactElement;
	label: string;
	value: number;
}

const	options: TOptions[] = [
	{icon: <NetworkEthereum />, label: 'Ethereum', value: 1},
	{icon: <NetworkOptimism />, label: 'Optimism', value: 10},
	{icon: <NetworkFantom />, label: 'Fantom', value: 250},
	{icon: <NetworkArbitrum />, label: 'Arbitrum', value: 42161}
];

function	StandardHeader({
	shouldUseWallets = true,
	shouldUseNetworks = true
}): ReactElement {
	const	{chainID, onSwitchChain, isActive, address, ens, openLoginModal, onDesactivate} = useWeb3();
	const	[walletIdentity, set_walletIdentity] = useState('Connect wallet');
	const	[selectedOption, set_selectedOption] = useState(options[0]);
	const	[hasMobileMenu, set_hasMobileMenu] = useState(false);

	useEffect((): void => {
		if (!isActive && address) {
			set_walletIdentity('Invalid network');
		} else if (ens) {
			set_walletIdentity(ens);
		} else if (address) {
			set_walletIdentity(truncateHex(address, 4));
		} else {
			set_walletIdentity('Connect wallet');
		}
	}, [ens, address, isActive]);

	useEffect((): void => {
		const	_selectedOption = options.find((e): boolean => e.value === Number(chainID)) || options[0];
		set_selectedOption(_selectedOption);
	}, [chainID, isActive]);

	function	onOpenMobileMenu(): void {
		set_hasMobileMenu(true);
	}

	return (
		<header className={'sticky top-0 z-30 mx-auto mb-0 flex w-full max-w-6xl flex-col !p-0 md:relative md:!p-4'}>
			<Card className={'flex h-auto items-center justify-between md:h-20'}>
				<div className={'flex w-full flex-row items-center'}>
					<div className={'mr-4 flex w-full items-center justify-between'}>
						<Link href={'/'}>
							<div className={'flex-row-center cursor-pointer space-x-4'}>
								<LogoYearn className={'h-10 w-10'} />
								<h1 className={'mr-2 font-bold text-neutral-700 md:mr-4'}>
									{'Yearn Finance'}
								</h1>
							</div>
						</Link>
						<div className={'ml-auto hidden md:block'}>
							<KBarButton />
						</div>
					</div>
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
								onSelect={(option: TOptions): void => onSwitchChain(option.value as number, true)} />
						</div>
					) : null}
					{shouldUseWallets ? (
						<button
							onClick={(): void => {
								if (isActive) {
									onDesactivate();
								} else if (!isActive && address) {
									onSwitchChain(1, true);
								} else {
									openLoginModal();
								}
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
					<Link key={'/diclaimer'} href={'/diclaimer'}>{'Disclaimer'}</Link>
				]}/>
		</header>
	);
}

export default StandardHeader;