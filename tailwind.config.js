const plugin = require('tailwindcss/plugin')

module.exports = {
	mode: 'jit',
	content: [
		'./lib/modules/**/*.html',
		'./lib/modules/**/*.js',
		'./views/*.html',
		'./views/**/*.html'
	],
	safelist: [
		'fill-blue',
		'fill-gold',
		'fill-light-grey',
		'fill-black',
		'fill-extra-light-grey',
	],
	theme: {

		fontFamily: {
			'cora': ['cora', 'sans-serif'],
			'gotham': ['gotham', 'sans-serif'],
		},

		fontWeight: {
			light: 300,
			normal: 400,
			medium: 500,
			bold: 700,
		},

		fontSize: {
			'xxs': ['0.625rem', '1.5'], // 10px
			'xs': ['0.75rem', '1.6'], // 12px
			'sm': ['0.875rem', '1.6'], // 14px
			'base': ['1rem', '1.6'], // 16px
			'lg': ['1.0625rem', '1.5'], // 16px
			'xl': ['1.125rem', '1.5'], // 18px
			'2xl': ['1.375rem', '1.4'], // 22px
			'3xl': ['1.875rem', '1'], // 30px
			'4xl': ['2.375rem', '1.1'], // 40px
			'5xl': ['3.75rem', '1.1'], // 60px
			'6xl': ['4.5rem', '1.1'] // 80px
		},

		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1440px'
		},

		colors: {
			'apos-green': '#00BF9A',
			transparent: 'transparent',
			current: 'currentColor',

			// Origin

			blue: {
				DEFAULT: '#59718C',
				200: '#315878',
				100: '#59718C',
				80: '#59718C',
				60: '#9AA8B6',
				40: '#BCC6CF',
				20: '#DEE3E7',
				10: '#EFF1F3',
			},

			gold: {
				DEFAULT: '#EEAC5C',
				60: '#F5CD9A',
				40: '#F8DDBC',
				20: '#FBEFDD',
				10: '#FDF6EE',
			},

			// Utility greys
			'black': '#000000',
			'light-grey': '#C4C4C4',
			'extra-light-grey': '#F2F2F2',
			'white': '#FFFFFF',
		},

		extend: {

			height: {
				'80vh': '80vh',
				'60vh': '60vh',
				'50vh': '50vh',
				'40vh': '40vh',
				'20vh': '20vh',
				'2px': '2px',
				'3px': '3px',
				'4px': '4px',
				'5px': '5px',
				'6px': '6px'
			},
			margin: {
				'4.5': '1.125rem'
			},
			lineHeight: {
				'lax': '1.75'
			},
			maxWidth: {
				'1/4': '25%',
				'1/2': '50%',
				'3/4': '75%',
				'8xl': '120rem',
				'9xl': '160rem',
			},
			ringWidth: {
				'3': '3px'
			},
			zIndex: {
				'200': '200',
				'300': '300'
			},
			inset: {
				'unset': 'unset',
			},
			scale: {
				'175': '1.75',
				'200': '2',
			},
			backgroundImage: {
				'vertical-gradient': "linear-gradient(180deg, #BDD2E9 0%, #E1C5E0 100%)",
				'horizontal-gradient': "linear-gradient(90.17deg, #F2F2F2 -5.36%, #D6C3D5 78.45%, #BECCDB 111.76%)"
			},
			borderRadius: {
      'extra-large': '10rem',
    }
		},
	},
	plugins: [
		require('tailwind-scrollbar'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/line-clamp'),
		plugin(function ({ addVariant, e }) {
			addVariant('required', ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => {
					return `.${ e(`required${ separator }${ className }`) }:required`
				})
			})
		}),
		plugin(function ({ addVariant }) {
			addVariant('important', ({ container }) => {
				container.walkRules(rule => {
					rule.selector = `.important\\:${ rule.selector.slice(1) }`
					rule.walkDecls(decl => {
						decl.important = true
					})
				})
			})
		})
	],
}
