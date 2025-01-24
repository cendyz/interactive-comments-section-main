/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'light-gray': 'hsl(223, 19%, 93%)',
				white: 'hsl(0, 0%, 100%)',
				'light-grayish-blue': 'hsl(238.8, 20.3%, 46.3%)',
				'moderate-blue': 'hsl(238, 40%, 52%)',
				'soft-red': 'hsl(358, 79%, 66%)',
				'pale-red': 'hsl(357, 100%, 86%)',
				'dark-blue': 'hsl(212, 24%, 26%)',
				'grayish-blue': 'hsl(211, 10%, 45%)',
				'very-light-gray': 'hsl(228, 33%, 97%)',
				lightGrayDARK: 'hsl(223, 19%, 15%)',
				whiteDARK: 'hsl(0, 0%, 10%)',
				lightGrayishBlueDARK: 'hsl(239, 57%, 20%)',
				moderateBlueDARK: 'hsl(238.3, 39.4%, 65.7%)',
				softRedDARK: 'hsl(358.3, 54.5%, 61.2%)',
				paleRedDARK: 'hsl(357, 100%, 40%)',
				darkBlueDARK: 'hsl(212, 24%, 80%)',
				grayishBlueDARK: 'hsl(211, 10%, 70%)',
				veryLightGrayDARK: 'hsl(228, 33%, 20%)',
			},
			fontFamily: {
				sans: ['Rubik', 'sans'],
			},
			fontSize: {
				base: ['1.6rem'],
			},
			container: {
				center: true,
				margin: '1.5em',
			},
		},

		fontWeight: {
			thin: '400',
			bold: '500',
			bolder: '700',
		},
	},
	plugins: [],
}
