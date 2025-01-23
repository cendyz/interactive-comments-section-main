/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
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
