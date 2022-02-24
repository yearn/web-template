import	React, {useContext, createContext}	from	'react';
import	{Contract}							from	'ethcall';
import	{ethers}							from	'ethers';
import	useWeb3								from	'contexts/useWeb3';
import	useLocalStorage						from	'hooks/useLocalStorage';
import	{newEthCallProvider}				from	'utils';

const	ERC20ABI = [
	{'constant':true,'inputs':[{'name':'_owner','type':'address'}],'name':'balanceOf','outputs':[{'name':'balance','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'}
];

const	BalancesContext = createContext();
export const BalancesContextApp = ({children}) => {
	const	{active, provider, chainID, address, disconnected} = useWeb3();
	const	[, set_nonce] = React.useState(0);
	const	[balancesOf, set_balancesOf] = useLocalStorage('balances', {});

	/* 💙 - Yearn Finance *************************************************************************
	**	On disconnect, clear balances.
	**********************************************************************************************/
	React.useEffect(() => {
		if (disconnected) {
			set_balancesOf({});
			set_nonce(0);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [disconnected]);

	/* 💙 - Yearn Finance *************************************************************************
	**	For every tokens in env, we need to retrieve the balance of tokens in the user's wallet to
	**	be able to use it in the dAPP
	**********************************************************************************************/
	const retrieveBalances = React.useCallback(async () => {
		if (active && address && provider) {
			const	ethcallProvider = await newEthCallProvider(provider);
			const	multiCalls = [];

			for (let index = 0; index < process.env.TOKENS.length; index++) {
				const	token = process.env.TOKENS[index];
				const	contract = new Contract(token[0], ERC20ABI);
				multiCalls.push(contract.balanceOf(address));
			}

			const	callResult = await ethcallProvider.tryAll(multiCalls);
			const	_balancesOf = {};
			setTimeout(() => {
				let	rIndex = 0;
				for (let index = 0; index < process.env.TOKENS.length; index++) {
					const	token = process.env.TOKENS[index];
					_balancesOf[token[0]] = ethers.utils.formatUnits(callResult[rIndex++], token[1] || 18);
				}
				set_balancesOf(_balancesOf);
			}, 1);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [active, address, chainID, provider]);
	React.useEffect(() => {
		retrieveBalances();
	}, [retrieveBalances]);

	return (
		<BalancesContext.Provider value={{balancesOf}}>
			{children}
		</BalancesContext.Provider>
	);
};

export const useBowswap = () => useContext(BalancesContext);
export default useBowswap;
