/* eslint-disable @typescript-eslint/explicit-function-return-type */
const {join} = require('path');

module.exports = {
	presets: [
		require('@yearn/web-lib/tailwind.plugin')
	],
	content: [
		join(__dirname, 'pages', '**', '*.{js,jsx,ts,tsx}'),
		join(__dirname, 'components', 'icons', '**', '*.{js,jsx,ts,tsx}'),
		join(__dirname, 'components', '**', '*.{js,jsx,ts,tsx}'),
		join(__dirname, 'node_modules', '@yearn', 'web-lib', 'dist', 'layouts', '**', '*.js'),
		join(__dirname, 'node_modules', '@yearn', 'web-lib', 'dist', 'components', '**', '*.js'),
		join(__dirname, 'node_modules', '@yearn', 'web-lib', 'dist', 'contexts', '**', '*.js'),
		join(__dirname, 'node_modules', '@yearn', 'web-lib', 'dist', 'icons', '**', '*.js'),
		join(__dirname, 'node_modules', '@yearn', 'web-lib', 'dist', 'utils', '**', '*.js')
	],
	theme: {
		extend: {
			height: {
				'inherit': 'inherit'
			},
			animation: {
				'rotate-center': 'rotate-center 15s linear infinite',
				'weight-light': 'fade-in-bottom 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
				'weight-normal': 'fade-in-bottom 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
				'weight-heavy': 'fade-in-bottom 0.9s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'
			},
			keyframes: {
				'fade-in-bottom': {
					'0%': {
						transform: 'translateY(50px)',
						opacity: '0'
					},
					to: {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'rotate-center': {
					'0%': {
						transform: 'rotate(0) scale(1.5)'
					},
					to: {
						transform: 'rotate(360deg) scale(1.5)'
					}
				}
			}
		}
	},
	plugins: []
};