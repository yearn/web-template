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
		'bg-dark-background',
		'bg-dark-background-variant',
		'bg-dark-secondary',
		'text-dark-primary',
		'bg-dark-surface',
		'text-dark-icons',
		'text-dark-icons-variant',
		'text-dark-texts',
		'text-dark-titles',
		'text-dark-titles-variant',
		'border-dark-primary',

		'bg-light-background',
		'bg-light-background-variant',
		'bg-light-secondary',
		'text-light-primary',
		'bg-light-surface',
		'text-light-icons',
		'text-light-icons-variant',
		'text-light-texts',
		'text-light-titles',
		'text-light-titles-variant',
		'border-light-primary',

		'bg-blue-background',
		'bg-blue-background-variant',
		'bg-blue-secondary',
		'text-blue-primary',
		'bg-blue-surface',
		'text-blue-icons',
		'text-blue-icons-variant',
		'text-blue-texts',
		'text-blue-titles',
		'text-blue-titles-variant',
		'border-blue-primary',
	],
	theme: {
		colors: {
			'light': {
				// 900: '#001746', //Titles
				// 800: '#183672',
				// 700: '#012A7C',

				600: '#004ADF', //Primary-Variant
				500: '#0657F9', //Primary
				// 400: '#C6D7F9',
				300: '#E0EAFF', //Secondary
				200: '#F4F7FB', //Background
				100: '#F9FBFD', //Surface-Variant
				50: '#FFFFFF', //Surface

				'background': '#F4F7FB',
				'background-variant': '#E0EAFF',
				'surface': '#FFFFFF',
				'surface-variant': '#F9FBFD',
				'primary': '#0657F9',
				'primary-variant': '#004ADF',
				'secondary': '#E0EAFF',
				'titles': '#001746',
				'titles-variant': '#0657F9',
				'texts': '#7F8DA9',
				'icons': '#CED5E3',
				'icons-variant': '#475570',
			},

			'dark': {
				// 900: '#FFFFFF',
				// 800: '#FE0000',
				// 700: '#FE0000',

				600: '#FFFFFF',
				500: '#FFFFFF', //Primary
				// 400: '#272727',
				300: '#272727', //Secondary
				200: '#141414', //Background
				100: '#191919', //Surface-Variant
				50: '#000000', //Surface

				'background': '#141414',
				'background-variant': '#272727',
				'surface': '#000000',
				'surface-variant': '#191919',
				'primary': '#FFFFFF',
				'primary-variant': '#FFFFFF',
				'secondary': '#272727',
				'titles': '#FFFFFF',
				'titles-variant': '#FFFFFF',
				'texts': '#A8A8A8',
				'icons': '#A8A8A8',
				'icons-variant': '#FFFFFF',
			},
			
			'blue': {
				// 900: '#FFFFFF',
				// 800: '#FE0000',
				// 700: '#FE0000',

				600: '#004ADF',
				500: '#0657F9', //Primary
				// 400: '#272727',
				300: '#0657F9', //Secondary
				200: '#012A7C', //Background
				100: '#012A7C', //Surface-Variant
				50: '#001746', //Surface

				'background': '#012A7C',
				'background-variant': '#001E59',
				'surface': '#001746',
				'surface-variant': '#012A7C',
				'primary': '#0657F9',
				'primary-variant': '#004ADF',
				'secondary': '#0657F9',
				'titles': '#FFFFFF',
				'titles-variant': '#FFFFFF',
				'texts': '#7F8DA9',
				'icons': '#7F8DA9',
				'icons-variant': '#FFFFFF',
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