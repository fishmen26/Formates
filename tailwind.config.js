/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#F97C2E'
      },
      fontFamily:{
        ibold: ["IBMPlexSans-Bold","IBMPlexSans"],
        iboldItalic: ["IBMPlexSans-BoldItalic","IBMPlexSans"],
        iextraLight: ["IBMPlexSans-ExtraLight","IBMPlexSans"],
        iextraLightItalic: ["IBMPlexSans-ExtraLightItalic","IBMPlexSans"],
        iitalic: ["IBMPlexSans-Italic","IBMPlexSans"],
        ilight: ["IBMPlexSans-Light","IBMPlexSans"],
        ilightItalic: ["IBMPlexSans-LightItalic","IBMPlexSans"],
        imedium: ["IBMPlexSans-Medium","IBMPlexSans"],
        imediumItalic: ["IBMPlexSans-MediumItalic","IBMPlexSans"],
        iregular: ["IBMPlexSans-Regular","IBMPlexSans"],
        isemiBold: ["IBMPlexSans-SemiBold","IBMPlexSans"],
        isemiBoldItalic: ["SemiBoldItalic","IBMPlexSans"],
        itext: ["IBMPlexSans-Text","IBMPlexSans"],
        itextItalic: ["IBMPlexSans-TextItalic","IBMPlexSans"],
        ithin: ["IBMPlexSans-Thin","IBMPlexSans"],
        ithinItalic: ["IBMPlexSans-ThinItalic", "IBMPlexSans"]
      }
    },
  },
  plugins: [],
}

