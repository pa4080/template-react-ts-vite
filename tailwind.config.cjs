/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "mlt-1xl": "624px" // ~ 600px
      },
      backgroundColor: {
        "mlt-gray-1": "#646464",
        "mlt-gray-2": "#787878",
        "mlt-gray-3": "#a0a0a0",
        "mlt-gray-4": "#b4b4b4",
        "mlt-gray-5": "#c8c8c8",
        "mlt-gray-6": "#d4d4d4",
        "mlt-dark-0": "#080808",
        "mlt-dark-1": "#111111",
        "mlt-dark-2": "#242424",
        "mlt-dark-3": "#333333",
        "mlt-dark-4": "#3c3c3c",
        "mlt-dark-5": "#444444",
        "mlt-dark-6": "#555555",
        "mlt-blue-primary": "#548ADA",
        "mlt-blue-secondary": "#5d9fff",
        "mlt-purple-primary": "#9468D8",
        "mlt-purple-secondary": "#b07bff"
      },
      colors: {
        "mlt-gray-1": "#646464",
        "mlt-gray-2": "#787878",
        "mlt-gray-3": "#a0a0a0",
        "mlt-gray-4": "#b4b4b4",
        "mlt-gray-5": "#c8c8c8",
        "mlt-gray-6": "#d4d4d4",
        "mlt-dark-0": "#080808",
        "mlt-dark-1": "#111111",
        "mlt-dark-2": "#242424",
        "mlt-dark-3": "#333333",
        "mlt-dark-4": "#3c3c3c",
        "mlt-dark-5": "#444444",
        "mlt-dark-6": "#555555",
        "mlt-blue-primary": "#548ADA",
        "mlt-blue-secondary": "#5d9fff",
        "mlt-purple-primary": "#9468D8",
        "mlt-purple-secondary": "#b07bff",
        "mlt-yellow-primary": "#facc15",
        "mlt-yellow-secondary": "rgb(254 240 138)",
        "mlt-yellow-tertiary": "rgb(254 249 195)"
      },
      fontSize: {
        "mlt-auto-1": "8.3vw",
        "mlt-4xl-plus": "2.6rem"
      },
      fontFamily: {
        Starjout: ["Starjout", "normal"],
        Starjedi: ["Starjedi", "normal"],
        Roboto: ["Roboto", "Arial", "sans-serif"],
        Cairo: ["Cairo", "sans-serif"]
      },
      spacing: {
        "mlt-1-plus": "6px",
        "mlt-18": "4.5rem",
        "mlt-22": "5.5rem",
        "mlt-26": "6.5rem"
      },
      scale: {
        // https://github.com/tailwindlabs/tailwindcss/discussions/2146#discussioncomment-1996102
        flip: "-1"
      }
    }
  },
  plugins: []
};
