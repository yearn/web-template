import	React, {createContext}				from	'react';
import	{ethers}							from	'ethers';
import	QRCodeModal							from	'@walletconnect/qrcode-modal';
import	{useWeb3React}						from	'@web3-react/core';
import	{InjectedConnector}					from	'@web3-react/injected-connector';
import	{ConnectorEvent}					from	'@web3-react/types';
import	{WalletConnectConnector}			from	'@web3-react/walletconnect-connector';
import	ModalLogin							from	'components/ModalLogin';
import	useLocalStorage						from	'hooks/useLocalStorage';
import	useDebounce							from	'hooks/useDebounce';
import	{toAddress}							from	'utils';

const walletType = {NONE: -1, METAMASK: 0, WALLET_CONNECT: 1};
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
	const	{activate, active, library, connector, account, chainId, deactivate} = web3;
	const	[provider, set_provider] = React.useState(undefined);
	const	[address, set_address] = useLocalStorage('address', '');
	const	[ens, set_ens] = useLocalStorage('ens', '');
	const	[chainID, set_chainID] = useLocalStorage('chainID', -1);
	const	[lastWallet, set_lastWallet] = useLocalStorage('lastWallet', walletType.NONE);
	const	[, set_nonce] = React.useState(0);
	const	[disableAutoChainChange, set_disableAutoChainChange] = React.useState(true);
	const	[disconnected, set_disconnected] = React.useState(false);
	const	[modalLoginOpen, set_modalLoginOpen] = React.useState(false);
	const	debouncedChainID = useDebounce(chainID, 500);

	const onUpdate = React.useCallback(async (update) => {
		if (update.provider) {
			set_provider(library);
		}
		if (update.chainId) {
			const	isANumber = !isNaN(update.chainId) && !String(update.chainId).startsWith('0x');
			set_chainID(isANumber ? Number(update.chainId) : parseInt(update.chainId, 16));
		}
		if (update.account) {
			set_disconnected(true);
			await getProvider().lookupAddress(toAddress(update.account)).then(_ens => set_ens(_ens || ''));
			set_address(toAddress(update.account));
			set_disconnected(false);
		}
		set_nonce(n => n + 1);
	}, [library]);

	const onDesactivate = React.useCallback(() => {
		set_disconnected(true);
		set_chainID(-1);
		set_provider(undefined);
		set_lastWallet(walletType.NONE);
		set_address('');
		set_ens('');
		if (connector !== undefined) {
			connector
				.off(ConnectorEvent.Update, onUpdate)
				.off(ConnectorEvent.Deactivate, onDesactivate);
		}
	}, [connector]);

	const onActivate = React.useCallback(async () => {
		connector
			.on(ConnectorEvent.Update, onUpdate)
			.on(ConnectorEvent.Deactivate, onDesactivate);
		
		set_disconnected(false);
		set_provider(library);
		set_address(toAddress(account));
		const	isANumber = !isNaN(chainId) && !String(chainId).startsWith('0x');
		set_chainID(isANumber ? Number(chainId) : parseInt(chainId, 16));
		await getProvider().lookupAddress(toAddress(account)).then(_ens => set_ens(_ens || ''));
	}, [account, chainId, connector, library, onDesactivate, onUpdate]);

	const onSwitchChain = React.useCallback((force) => {
		if (!force && (!active || disableAutoChainChange)) {
			return;
		}
		const	isCompatibleChain = (
			Number(debouncedChainID) === 1 ||
			Number(debouncedChainID) === 250 ||
			Number(debouncedChainID) === 1337 ||
			Number(debouncedChainID) === 31337
		);
		if (isCompatibleChain) {
			return;
		}
		if (!provider || !active) {
			console.error('Not initialized');
			return;
		}
		provider
			.send('wallet_switchEthereumChain', [{chainId: '0x1'}])
			.catch(() => set_disableAutoChainChange(true));
	}, [active, disableAutoChainChange, debouncedChainID, provider]);

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

	React.useEffect(() => {
		if (active) {
			onActivate();
		}
	}, [active, onActivate]);

	React.useEffect(() => {
		if (!active && lastWallet !== walletType.NONE) {
			connect(lastWallet);
		}
	}, [active]);

	return (
		<Web3Context.Provider
			value={{
				address,
				ens,
				disconnected,
				chainID,
				onSwitchChain,
				active: active && (chainID === 1 || chainID === 250 || chainID === 1337 || chainID === 31337),
				provider,
				getProvider,
				openLoginModal: () => set_modalLoginOpen(true)
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
