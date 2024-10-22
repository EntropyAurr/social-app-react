/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        pThin: ["Poppins-Thin", "sans-serif"],
        pExtraLight: ["Poppins-ExtraLight", "sans-serif"],
        pLight: ["Poppins-Light", "sans-serif"],
        pRegular: ["Poppins-Regular", "sans-serif"],
        pMedium: ["Poppins-Medium", "sans-serif"],
        pSemiBold: ["Poppins-SemiBold", "sans-serif"],
        pBold: ["Poppins-Bold", "sans-serif"],
        pExtraBold: ["Poppins-ExtraBold", "sans-serif"],
        pBlack: ["Poppins-Black", "sans-serif"],

        iThin: ["Inter_18pt-Thin", "serif"],
        iExtraLight: ["Inter_18pt-ExtraLight", "serif"],
        iLight: ["Inter_18pt-Light", "serif"],
        iRegular: ["Inter_18pt-Regular", "serif"],
        iMedium: ["Inter_18pt-Medium", "serif"],
        iSemiBold: ["Inter_18pt-SemiBold", "serif"],
        iBold: ["Inter_18pt-Bold", "serif"],
        iExtraBold: ["Inter_18pt-ExtraBold", "serif"],
        iBlack: ["Inter_18pt-Black", "serif"],

        uBold: ["Ubuntu-Bold", "serif"],
        uLight: ["Ubuntu-Light", "serif"],
        uMedium: ["Ubuntu-Medium", "serif"],
        uRegular: ["Ubuntu-Regular", "serif"],

        oExtraLight: ["Oxanium-ExtraLight", "serif"],
        oLight: ["Oxanium-Light", "serif"],
        oRegular: ["Oxanium-Regular", "serif"],
        oMedium: ["Oxanium-Medium", "serif"],
        oSemiBold: ["Oxanium-SemiBold", "serif"],
        oBold: ["Oxanium-Bold", "serif"],
        oExtraBold: ["Oxanium-ExtraBold", "serif"],

        bRegular: ["BalooBhai2-Regular", "serif"],
        bMedium: ["BalooBhai2-Medium", "serif"],
        bSemiBold: ["BalooBhai2-SemiBold", "serif"],
        bBold: ["BalooBhai2-Bold", "serif"],
        bExtraBold: ["BalooBhai2-ExtraBold", "serif"],
      },
    },
  },
  plugins: [],
};
