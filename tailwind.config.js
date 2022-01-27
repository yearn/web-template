const colors = require('tailwindcss/colors');

module.exports = {
	corePlugins: {
		ringColor: false,
	},
	darkMode: 'class',
	purge: {
		content: [
			'./pages/**/*.js',
			'./components/**/*.js'
		],
	},
	theme: {
		fontFamily: {
			title: ['Roboto Slab', 'Roboto', 'serif'],
			sans: ['Roboto', 'sans-serif'],
			mono: ['IBM Plex Mono', 'monospace']
		},
		colors: {
			red: colors.red,
			white: colors.white,
			black: colors.black,
			slate: colors.slate,
			yblue: '#1e67f9',
			fadeWhite: '#F2F2F2',
			ygray: {
				'50': '#F5F5F5',
				100: '#333333',
				200: '#4F4F4F',
				300: '#828282',
				400: '#BDBDBD',
				500: '#E0E0E0',
				600: '#F2F2F2',
				'700': '#2c3e50',
				'900': '#363636',
			},
			dark: {
				900: '#0f172a',
				600: '#141e37',
				500: '#1E1E1E',
				400: '#21252E',
				200: '#535353',
				100: '#5d6e8f',
				50: 'rgba(255,255,255,0.7)',
				white: 'rgba(255,255,255,0.9)',
			},
		},
		extend: {
			width: {
				'64.5': '16.125rem',
				'235.5': '58.875rem'
			},
			maxWidth: {
				'64.5': '16.125rem',
				'235.5': '58.875rem',
				'xl': '552px',
				'4xl': '904px',
				'6xl': '1200px',
			},
			maxHeight: {
				'max': '4000px',
			},
			lineHeight: {
				'6xl': '64px',
			},
			fontSize: {
				'sm': ['15px', '24px'],
				'6xl': ['56px', '64px'],
			},
			typography: () => ({
				yblue: {
					css: {
						'a': {color: '#0657F9'},
						'h1': {color: '#333333'},
						'h2': {color: '#333333'},
						'h3': {color: '#333333'},
						'h4': {color: '#333333'},
						'h5': {color: '#333333'},
						'p': {color: '#333333'},
						'--tw-prose-links': '#0657F9'
					},
				},
				yblueDark: {
					css: {
						'a': {color: '#0657F9'},
						'h1': {color: '#F2F2F2'},
						'h2': {color: '#F2F2F2'},
						'h3': {color: '#F2F2F2'},
						'h4': {color: '#F2F2F2'},
						'h5': {color: '#F2F2F2'},
						'p': {color: '#F2F2F2'},
						'--tw-prose-links': '#0657F9'
					},
				},
			}),
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')
	],
};