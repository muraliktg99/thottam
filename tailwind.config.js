const colors = require('tailwindcss/colors')

module.exports = {
    important: true,
    future: {
        removeDeprecatedGapUtilities: true
    },
    theme: {
        colors: {
            white: '#ffffff',
            blue: {
                base: '#616161',
                primary: '#dbdbdb',
                medium: '#005c98'
            },
            green : {
                medium: 'rgb(16, 185, 129)'
            },
            black: {
                light: '#005c98',
                faded: '#00000059'
            },
            gray: {
                base: '#616161',
                background: '#fafafa',
                primary: '#dbdbdb'
            },
            red: {
                primary: '#ed4956'
            }
        }
    }
};