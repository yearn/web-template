const Dotenv = require('dotenv-webpack');

module.exports = ({
	i18n: {
		locales: ['en', 'fr', 'es', 'de', 'pt', 'el', 'tr', 'vi', 'zh', 'hi', 'ja'],
		defaultLocale: 'en',
		localeDetection: false
	},
	experimental: {
		concurrentFeatures: true
	},
	plugins: [new Dotenv()],
	images: {
		domains: [
			'rawcdn.githack.com'
		]
	},
	env: {
		WEBSITE_URI: 'https://yearn-ui.major.tax/',
		WEBSITE_NAME: 'yUITemplate',
		WEBSITE_TITLE: 'Yearn UI Template',
		WEBSITE_DESCRIPTION: 'Template used for some Yearn\'s project',
		PROJECT_GITHUB_URL: 'https://github.com/Major-Eth/yUITemplate',
		USE_PRICES: true,
		USE_PRICE_TRI_CRYPTO: false,
		USE_WALLET: true,
		CG_IDS: ['yearn-finance'],
		TOKENS: [
			['0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e', 18, 1]
		],
		ALCHEMY_KEY: process.env.ALCHEMY_KEY,
		RPC_URL: {
			1: process.env.RPC_URL_MAINNET,
			250: process.env.RPC_URL_FANTOM || 'https://rpc.ftm.tools',
			42161: process.env.RPC_URL_ARBITRUM || 'https://arbitrum.public-rpc.com'
		}
	}
});
