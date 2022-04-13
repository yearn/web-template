const Dotenv = require('dotenv-webpack');

module.exports = ({
	i18n: {
		locales: ['en', 'fr', 'es', 'de', 'pt', 'el', 'tr', 'vi', 'zh', 'hi', 'ja'],
		defaultLocale: 'en',
		localeDetection: false
	},
	experimental: {
		concurrentFeatures: true,
		nextScriptWorkers: true
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
		USE_WALLET: true,
		USE_PRICES: true,
		USE_PRICE_TRI_CRYPTO: false,
		CG_IDS: ['yearn-finance'],
		TOKENS: [
			['0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e', 18, 1]
		],
		RPC_URL: {
			1: process.env.RPC_URL_MAINNET,
			250: process.env.RPC_URL_FANTOM || 'https://rpc.ftm.tools',
			42161: process.env.RPC_URL_ARBITRUM || 'https://arbitrum.public-rpc.com'
		},
		ALCHEMY_KEY: process.env.ALCHEMY_KEY,

		USE_FEEDBACKS: true,
		LINEAR_OAUTH_TOKEN: process.env.LINEAR_OAUTH_TOKEN,
		LINEAR_TEAM_ID: process.env.LINEAR_TEAM_ID,
		LINEAR_PROJECT_NAME: process.env.LINEAR_PROJECT_NAME

	}
});
