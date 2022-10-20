/* eslint-disable @typescript-eslint/explicit-function-return-type */
const {join} = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	presets: [require('@yearn-finance/web-lib/tailwind.config.cjs')],
	content: [
		join(__dirname, 'pages', '**', '*.{js,jsx,ts,tsx}'),
		join(__dirname, 'components', 'icons', '**', '*.{js,jsx,ts,tsx}'),
		join(__dirname, 'components', '**', '*.{js,jsx,ts,tsx}'),
		join(__dirname, 'utils', '**', '*.{js,jsx,ts,tsx}'),
		join(__dirname, 'node_modules', '@yearn-finance', 'web-lib', 'layouts', '**', '*.js'),
		join(__dirname, 'node_modules', '@yearn-finance', 'web-lib', 'components', '**', '*.js'),
		join(__dirname, 'node_modules', '@yearn-finance', 'web-lib', 'contexts', '**', '*.js'),
		join(__dirname, 'node_modules', '@yearn-finance', 'web-lib', 'icons', '**', '*.js'),
		join(__dirname, 'node_modules', '@yearn-finance', 'web-lib', 'utils', '**', '*.js')
	],
	theme: {
		extend: {
			fontFamily: {
				aeonik: ['Aeonik', ...defaultTheme.fontFamily.sans],
				mono: ['Aeonik Mono', ...defaultTheme.fontFamily.mono]
			}
		}
	},
	plugins: []
};