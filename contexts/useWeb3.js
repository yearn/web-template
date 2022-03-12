import	React, {createContext}				from	'react';
import	{ethers}							from	'ethers';
import	QRCodeModal							from	'@walletconnect/qrcode-modal';
import	{useWeb3React}						from	'@web3-react/core';
import	{InjectedConnector}					from	'@web3-react/injected-connector';
import	{WalletConnectConnector}			from	'@web3-react/walletconnect-connector';
import	ModalLogin							from	'components/ModalLogin';
import	useLocalStorage						from	'hooks/useLocalStorage';
import	useWindowInFocus					from	'hooks/useWindowInFocus';
import	useClientEffect						from	'hooks/useClientEffect';
import	useDebounce							from	'hooks/useDebounce';
import	{toAddress}							from	'utils';
import	performBatchedUpdates				from	'utils/performBatchedUpdates';

const walletType = {NONE: -1, METAMASK: 0, WALLET_CONNECT: 1, TRUSTWALLET: 2, COINBASE: 3, FORTMATIC: 4, PORTIS: 5};
const Web3Context = createContext();

function getProvider(chain = 'ethereum') {
	if (chain === 'ethereum') {
		return new ethers.providers.AlchemyProvider('homestead', process.env.ALCHEMY_KEY);
	} else if (chain === 'fantom') {
		return new ethers.providers.JsonRpcProvider('https://rpc.ftm.tools');
	} else if (chain === 'fork') {
		return new ethers.providers.JsonRpcProvider('http://localhost:8545');
	}
	return (new ethers.providers.AlchemyProvider('homestead', process.env.ALCHEMY_KEY));
}

export const Web3ContextApp = ({children}) => {
	const	web3 = useWeb3React();
	const   {activate, active, library, account, chainId, deactivate} = web3;
	const   [ens, set_ens] = useLocalStorage('ens', '');
	const   [lastWallet, set_lastWallet] = useLocalStorage('lastWallet', walletType.NONE);
	const   [disconnected, set_disconnected] = React.useState(false);
	const	[disableAutoChainChange, set_disableAutoChainChange] = React.useState(false);
	const	debouncedChainID = useDebounce(chainId, 500);
	const	windowInFocus = useWindowInFocus();
	const	[modalLoginOpen, set_modalLoginOpen] = React.useState(false);

	const onSwitchChain = React.useCallback((force) => {
		if (!force && (!active || disableAutoChainChange)) {
			return;
		}
		const	isCompatibleChain = [1, 250, 1337, 31337].includes(Number(debouncedChainID || 0));
		if (isCompatibleChain) {
			return;
		}
		if (!library || !active) {
			console.error('Not initialized');
			return;
		}
		library
			.send('wallet_switchEthereumChain', [{chainId: '0x1'}])
			.catch(() => set_disableAutoChainChange(true));
	}, [active, disableAutoChainChange, debouncedChainID, library]);

	React.useEffect(() => onSwitchChain(), [windowInFocus, onSwitchChain]);

	/**************************************************************************
	**	connect
	**	What should we do when the user choose to connect it's wallet ?
	**	Based on the providerType (AKA Metamask or WalletConnect), differents
	**	actions should be done.
	**	Then, depending on the providerType, a similar action, but different
	**	code is executed to set :
	**	- The provider for the web3 actions
	**	- The current address/account
	**	- The current chain
	**	Moreover, we are starting to listen to events (disconnect, changeAccount
	**	or changeChain).
	**************************************************************************/
	const connect = React.useCallback(async (_providerType) => {
		if (_providerType === walletType.METAMASK) {
			if (active) {
				deactivate();
			}
			const	injected = new InjectedConnector();
			activate(injected, undefined, true);
			set_lastWallet(walletType.METAMASK);
		} else if (_providerType === walletType.WALLET_CONNECT) {
			if (active) {
				deactivate();
			}
			const walletconnect = new WalletConnectConnector({
				rpc: {
					1: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
					250: 'https://rpc.ftm.tools',
					1337: 'http://localhost:8545',
					31337: 'http://localhost:8545',
				},
				chainId: 1,
				bridge: 'https://bridge.walletconnect.org',
				pollingInterval: 12000,
				qrcodeModal: QRCodeModal,
				qrcode: true,
			});
			try {
				await activate(walletconnect, undefined, true);
				set_lastWallet(walletType.WALLET_CONNECT);
			} catch (error) {
				console.error(error);
				set_lastWallet(walletType.NONE);
			}
		}
	}, [activate, active, deactivate, set_lastWallet]);

	useClientEffect(() => {
		if (!active && lastWallet !== walletType.NONE) {
			connect(lastWallet);
		}
	}, [active]);

	useClientEffect(() => {
		if (account) {
			getProvider()
				.lookupAddress(toAddress(account))
				.then((_ens) => set_ens(_ens || ''));
		}
	}, [account]);

	return (
		<Web3Context.Provider
			value={{
				address: account,
				ens,
				disconnected,
				chainID: Number(chainId || 0),
				onSwitchChain,
				active: active && [1, 250, 1337, 31337].includes(Number(chainId || 0)),
				provider: library,
				getProvider,
				openLoginModal: () => set_modalLoginOpen(true),
				onDesactivate: () => {
					performBatchedUpdates(() => {
						set_lastWallet(walletType.NONE);
						set_disconnected(true);
					});
					setTimeout(() => set_disconnected(false), 100);
				}
			}}>
			{children}
			<ModalLogin
				connect={connect}
				walletType={walletType}
				open={modalLoginOpen}
				set_open={set_modalLoginOpen} />
		</Web3Context.Provider>
	);
};

export const useWeb3 = () => React.useContext(Web3Context);
export default useWeb3;
