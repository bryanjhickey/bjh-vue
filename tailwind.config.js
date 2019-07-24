// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
    theme: {
        container: {
            center: true,
            padding: '1rem'
        },
        borderWidth: {
            '40': '40px'
        },
        extend: {
            colors: {
                red: '#DE2929',
                white: '#ffffff'
            },
            fontFamily: {
                sans: [
                    'Montserrat',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    '"Noto Sans"',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"'
                ]
            },
            fontWeight: {
                normal: '400',
                bold: '700',
                black: '900'
            }
        }
    },
    variants: {
        variants: {
            borderWidth: ['responsive', 'hover'],
            borderColor: ['responsive', 'hover']
        }
    }
}
