import	React					from	'react';
import	useWeb3					from	'contexts/useWeb3';
import	usePrices				from	'contexts/usePrices';
import	useBalances				from	'contexts/useBalances';
import	IconHamburger			from	'components/icons/IconHamburger';
import	ModalMenu				from	'components/ModalMenu';
import	{truncateHex, formatAmount}			from	'utils';

const		YFI_ADDRESS = '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e';
function	Header() {
	const	{prices} = usePrices();
	const	{balancesOf} = useBalances();
	const	{active, address, ens, openLoginModal, deactivate, onDesactivate} = useWeb3();
	const	[openMenu, set_openMenu] = React.useState(false);

	return (
		<header className={'z-50 py-0 mx-auto w-full max-w-6xl bg-white-blue-1 md:py-4'}>
			<div className={'flex justify-between items-center py-3 px-2 h-auto bg-white rounded-sm md:p-6 md:h-20'}>
				<div className={'flex flex-row items-center'}>
					<h2 className={'mr-2 text-lg font-bold text-dark-blue-1 md:mr-4'}>
						{process.env.WEBSITE_TITLE}
					</h2>
				</div>
				<div className={'flex flex-row items-center space-x-6 md:hidden'}>
					<div
						onClick={() => set_openMenu(true)}
						className={'p-1 -m-1'}>
						<IconHamburger />
					</div>
				</div>
				<div className={'hidden flex-row items-center space-x-6 md:flex'}>
					<p className={'text-yearn-blue'}>{`YFI $ ${formatAmount(prices?.['yearn-finance']?.usd || 0, 2)}`}</p>
					<p className={'text-yearn-blue'}>{`Balance: ${formatAmount(balancesOf?.[YFI_ADDRESS] || 0, 6)} YFI`}</p>
					<a href={'https://cowswap.exchange/#/swap?outputCurrency=0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e'} target={'_blank'} rel={'noreferrer'}>
						<button className={'button-small button-filled'}>
							<p className={'font-normal'}>{'Buy YFI'}</p>
						</button>
					</a>
					<button
						onClick={() => {
							if (active) {
								deactivate();
								onDesactivate();
							} else {
								openLoginModal();
							}
						}}
						className={'truncate button-small button-light'}>
						{!active ? 'Connect wallet' : ens ? ens : truncateHex(address, 4)}
					</button>
				</div>
			</div>
			<ModalMenu open={openMenu} set_open={set_openMenu} />
		</header>
	);
}

export default Header;
