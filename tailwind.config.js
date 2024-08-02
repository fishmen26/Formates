/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#F97C2E'
      },
      fontFamily:{
        ibm-bold: ["IBMPlexSans-Bold","IBMPlexSans"],
        ibm-italic: ["IBMPlexSans-BoldItalic","IBMPlexSans"],
        ibm-extra-light: [,"IBMPlexSans-IBMPlexSans-ExtraLight"],
        ["ibm-extra-light-italic","IBMPlexSans-ExtraLightItalic"],
        ["ibm-italic","IBMPlexSans-Italic"],
        ["ibm-light", "IBMPlexSans-Light"],
        ["ibm-light-italic","IBMPlexSans-LightItalic"],
        ["ibm-medium","IBMPlexSans-Medium"],
        ["ibm-medium-italic","IBMPlexSans-MediumItalic"],
        ["ibm-regular","IBMPlexSans-Regular"],
        ["ibm-semi-bold","IBMPlexSans-SemiBold"],
    "IBMPlexSans-SemiBoldItalic": require("../assets/fonts/IBMPlexSans-SemiBoldItalic.ttf"),
    "IBMPlexSans-Text" : require("../assets/fonts/IBMPlexSans-Text.ttf"),
    "IBMPlexSans-TextItalic" : require("../assets/fonts/IBMPlexSans-TextItalic.ttf"),
    "IBMPlexSans-Thin" : require("../assets/fonts/IBMPlexSans-Thin.ttf"),
    "IBMPlexSans-ThinItalic" : require("../assets/fonts/IBMPlexSans-ThinItalic.ttf"),
      }
    },
  },
  plugins: [],
}

