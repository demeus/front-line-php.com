const defaultTheme = require("tailwindcss/defaultTheme");

const plugin = require('tailwindcss/plugin')

module.exports = {
    important: true,
    theme: {
        fontFamily: {
            sans: ["Inter", ...defaultTheme.fontFamily.sans],
            display: ["Staatliches", ...defaultTheme.fontFamily.sans],
            mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono]
        },
        colors: {
            transparent: "transparent",
            white: "#fff",
            black: "#2c1b1d",
            spatie: '#197593',
            yellow: {
                100: '#fcf8e7',
                500: '#f0de38'
            },
            purple: {
                400: '#4530a8',
                500: '#47286f'
            },
            blue: {
                200: '#daf1f5',
                300: '#c1e2e8',
                500: '#0756b0',  
            },
            green: {
                300: '#abcf73',
                500: '#75ad20',
                600: '#639517'
            },
            red: {
                400: '#cc342a',
                500: '#ab190f'
            },
        },

        extend: {
            inset: {
                full: "100%"
            },
            opacity:{
                20: '0.2',
            },
            textOpacity:{
                10: '0.1',
                90: '0.9'
            },
            fontSize: {
                '7xl' : '6rem'
            },
            maxWidth: {
                article: 'calc(66ch + 8rem)',
            }
        }
    },
    variants: {
        opacity: ["responsive", "hover", "focus", "group-hover"],
        backgroundColor: ({ after }) => after(['target']),
        boxShadow: ({ after }) => after(['target']),
        textColor: ({ after }) => after(['target']),
        backgroundOpacity: ({ after }) => after(['target'])
    },
    plugins: [
        plugin(function({ addVariant, e }) {
          addVariant('target', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
              return `.${e(`target${separator}${className}`)}:target`
            })
          })
        })
      ]
};
