module.exports = {
  purge: [],
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        // wiggle: 'wiggle 1s ease-in-out infinite',
       }
    },
    textColor: {
      'gray': '#80838c',
      'textLightGray': '#d2d6dd',
      'textGray' : '#606573',
      'textDarkGray': '#777b86',
      'dark': '#00071a',
      'white': '#fff',
      'purple': '#6A75CA',
      'hoverPurple': '#525db1',
      'black': '#1A2323',
      'lightPurple': '#d2d6ee',
      'errorRed': '#e63946',
      'darkBlue': '#364165',
      'numberGray': '#b3b5ba',
    },
    backgroundColor: {
      'lightPurple': '#EFF2F8',
      'brightLightPurple': '#eef0ff',
      'purple': '#bac0e6',
      'darkPurple': '#6A75CA',
      'hoverPurple': '#5f6ab8',
      'white': '#fff',
      'orange': '#ffce7a',
      'darkOrange': '#f5b74e',
      'lightGray': '#d2d6dd',
      'green': '#71E454',
      'red': '#E45454',
      'brightRed': '#EA2742',
      'darkRed': '#db0c28',
    },
    borderColor: {
      'white' : '#fff',
      'lightGray': '#e0e1e4',
      // 'lightBluishGray': '#cfd3de',
      'lightPurple': '#bac0e6',
      'purple': '#6A75CA',
      'purpleMedium': '#858ed4',
      'brightLightPurple': '#eef0ff',
      'transparent': '#ffffff00',
    }, 
    fill: {
      'darkPurple': '#6A75CA'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
