const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	corePlugins: {
		ringColor: false,
	},
	darkMode: 'class',
	content: [
		'./pages/**/*.js',
		'./components/**/*.js'
	],
	safelist: [
		{
			pattern: /(text|bg|border)-(dark|blue|light)-(background|backgroundVariant|surface|surfaceVariant|primary|primaryVariant|secondary|titles|titlesVariant|texts|icons|iconsVariant|disabled)/,
			variants: ['hover'],
		},
		{
			pattern: /(text|bg|border)-(dark|blue|light)-(button)-(filled|outlined|disabled)-(primary|variant|text|disabled|disabled-text)/,
			variants: ['hover'],
		},
		{
			pattern: /(text|bg|border)-(dark|blue|light)-(icons)-(primary|variant)/,
			variants: ['hover'],
		},
	],
	theme: {
		colors: {
			'light': {
				background: '#F4F7FB',
				backgroundVariant: '#E0EAFF',
				surface: '#FFFFFF',
				surfaceVariant: '#F9FBFD',
				primary: '#0657F9',
				primaryVariant: '#004ADF',
				secondary: '#E0EAFF',
				titles: '#001746',
				titlesVariant: '#0657F9',
				texts: '#7F8DA9',
				disabled: '#CED5E3',
				icons: {
					primary: '#CED5E3',
					variant: '#475570'
				},
				button: {
					filled: {
						primary: '#0657F9',
						variant: '#004ADF',
						text: '#FFFFFF',
					},
					outlined: {
						primary: '#FFFFFF',
						variant: '#E0EAFF',
						text: '#0657F9',
					},
					disabled: {
						primary: '#F4F7FB',
						text: '#CED5E3',
					}
				}
			},

			'dark': {
				background: '#141414',
				backgroundVariant: '#272727',
				surface: '#000000',
				surfaceVariant: '#191919',
				primary: '#FFFFFF',
				primaryVariant: '#FFFFFF',
				secondary: '#272727',
				titles: '#FFFFFF',
				titlesVariant: '#FFFFFF',
				texts: '#A8A8A8',
				disabled: '#CED5E3',
				icons: {
					primary: '#A8A8A8',
					variant: '#FFFFFF'
				},
				button: {
					filled: {
						primary: '#0657F9',
						variant: '#004ADF',
						text: '#FFFFFF',
					},
					outlined: {
						primary: '#FFFFFF',
						variant: '#272727',
						text: '#FFFFFF',
					},
					disabled: {
						primary: '#141414',
						text: '#A8A8A8',
					}
				}
			},
			
			'blue': {
				background: '#012A7C',
				backgroundVariant: '#001E59',
				surface: '#001746',
				surfaceVariant: '#012A7C',
				primary: '#0657F9',
				primaryVariant: '#004ADF',
				secondary: '#0657F9',
				titles: '#FFFFFF',
				titlesVariant: '#FFFFFF',
				texts: '#7F8DA9',
				disabled: '#CED5E3',
				icons: {
					primary: '#7F8DA9',
					variant: '#FFFFFF'
				},
				button: {
					filled: {
						primary: '#0657F9',
						variant: '#004ADF',
						text: '#FFFFFF',
					},
					outlined: {
						primary: '#0657F9',
						variant: '#012A7C',
						text: '#0657F9',
					},
					disabled: {
						primary: '#012A7C',
						text: '#7F8DA9',
					}
				}
			},
			


			'dark-blue-1': '#001746',
			'dark-blue-2': '#183672',
			'dark-blue-3': '#012A7C',
			'gray-blue-1': '#475570',
			'gray-blue-2': '#7F8DA9',
			'gray-blue-3': '#CED5E3',
			'yearn-blue': '#0657F9',
			'yearn-blue-light-1': '#C6D7F9',
			'yearn-blue-light-2': '#E0EAFF',
			'yearn-blue-dark': '#004ADF',
			'white': '#FFFFFF',
			'white-blue-1': '#F4F7FB',
			'white-blue-2': '#F9FBFD',
		},
		extend: {
			fontFamily: {
				roboto: ['Roboto', ...defaultTheme.fontFamily.sans]
			},
			width: {
				30: '7.5rem',
				33: '8.25rem',
				38: '9.5rem',
				42: '10.5rem',
				50: '12.5rem',
				55: '13.75rem',
			},
			height: {
				30: '7.5rem',
			},
			maxWidth: {
				'xl': '552px',
				'4xl': '904px',
				'6xl': '1200px',
			},
			fontSize: {
				'sm': ['12px', '16px'],
				'base': ['16px', '24px'],
				'lg': ['20px', '32px'],
				'xl': ['24px', '32px'],
				'4xl': ['40px', '56px'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')
	],
};