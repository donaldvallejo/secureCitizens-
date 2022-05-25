const { fontFamily, colors } = require('./theme/options/');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./connections/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./containers/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily,
		extend: {
			colors,
			keyframes: {
				'fade-in-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-30px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
			},
			animation: {
				'fade-in-down': 'fade-in-down 6s ease-out',
			},
			screens: {
				sm: '640px',
				// => @media (min-width: 640px) { ... }

				md: '768px',
				// => @media (min-width: 768px) { ... }

				special: '880px',
				// => @media (min-width: 880px) { ... }

				lg: '1024px',
				// => @media (min-width: 1024px) { ... }

				xl: '1280px',
				// => @media (min-width: 1280px) { ... }

				'2xl': '1536px',
				// => @media (min-width: 1536px) { ... }
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
