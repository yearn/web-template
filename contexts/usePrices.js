import	React, {createContext}		from	'react';
import	{ethers}					from	'ethers';
import	axios						from	'axios';
import	useWeb3						from	'contexts/useWeb3';
import	useLocalStorage				from	'hooks/useLocalStorage';

async function	getTriCryptoPrice({provider}) {
	const	TRI_CRYPTO_LP_TOKEN_ADDR = '0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF';
	const	UTILS_TRI_CRYPTO_LENS_ADDR = '0x83d95e0D5f402511dB06817Aff3f9eA88224B030';
	const	contract = new ethers.Contract(
		UTILS_TRI_CRYPTO_LENS_ADDR,
		['function getNormalizedValueUsdc(address, uint256) public view returns (uint256)'],
		provider
	);
	const priceUSDC = await contract.getNormalizedValueUsdc(
		TRI_CRYPTO_LP_TOKEN_ADDR,
		'1000000000000000000'
	);
	const triCryptoPrice = ethers.utils.formatUnits(priceUSDC, 6);
	return triCryptoPrice;
}

const	PricesContext = createContext();
export const PricesContextApp = ({children}) => {
	const	{getProvider} = useWeb3();
	const	[prices, set_prices] = useLocalStorage('prices', {});
	const	[, set_nonce] = React.useState(0);

	/**************************************************************************
	**	Fetch the prices of the list of CG_TOKENS
	**************************************************************************/
	React.useEffect(() => {
		if (process.env.USE_PRICES) {
			axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${process.env.CG_IDS}&vs_currencies=usd`).then(({data}) => {
				set_prices(data);
				set_nonce(n => n + 1);
				if (process.env.USE_PRICES_TRI_CRYPTO) {
					getTriCryptoPrice({provider: getProvider(process.env.RPC_NETWORK)}).then((price) => {
						data['triCrypto'] = {usd: Number(price)};
						data['crypto'] = {usd: Number(price)};
						data['3crypto'] = {usd: Number(price)};
						set_prices(data);
						set_nonce(n => n + 1);
					});
				}
			});
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<PricesContext.Provider value={{prices}}>
			{children}
		</PricesContext.Provider>
	);
};

export const usePrices = () => React.useContext(PricesContext);
export default usePrices;
