/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "320px",

      sm: "640px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }
    },
    extend: {
      rotate: {
        "0%, 100%": { transform: "rotateY(0)", transformStyle: " preserve-3d" },
        "100%": {
          transformStyle: " preserve-3d",
          transform: "rotateY(180deg)",
        },
      },
      // that is animation class
      animation: {
        "spin-slow": "spin 4s linear infinite",
        "rotate": "rotate 4s linear infinite",
      },
      // that is actual animation

      colors: {
        //main variants
        "main-50": "#FFFAEB",
        "main-color-300": "#FACF56",
        "main-color-400": "#F8B827",
        "main-color-500": "#F2970E",

        //secondary variants
        "secondary-100": "#DDFBE1",
        //white variants
        white: "#FFFFFF",
        "white-high-emp": "#fff",
        "white-medium-emp": "#eeeef4",
        "white-low-emp": "#9e9fa7",

        // neutral variants
        "neutral-200": "#EEEEEE",
        "neutral-300": "#E0E0E0",
        "neutral-50": "#fff",
        "neutral-40": "#F5F7FF",
        "neutratl-border-color": "E3E3E3",

        //black variants
        black: "#000",
        "black-600": "#808080",
        "black-700": "#404040",
        "black-800": "#1C1B1E",
        "black-900": "#303030",
        "black-mid": "#282828",
        "black-deep": "#3E3E59",
        "black-high": "#252525",
        "black-medium-emp": "#2f2f2f",

        "black-low-emp": "#5e6064",

        //gray variants
        "gray-custom": "#827E7E",
        "dark-grayish-900": "#3D3966",

        //trivaly
        darkslateblue: "#252050",
        mediumpurple: "#a59aff",
        "primary-color-100": "#eff1fe",
        "primary-color-200": "#cad1fb",
        "primary-color-500": "#706aea",
        "primary-color-900": "#3a327d",
        "primary-color-600": "#6a5ae0",
        "primary-color-300": "#a9b2f8",
        "primary-color-800": "#43359e",
        "primary-color-700": "#513fc3",
        "secondary-color-500": "#fe6e8a",

        "color-primary-color-100": "#eff1fe",
        "color-neutral-colors-50": "#fff",
        "color-primary-color-500": "#706aea",
        "color-text-colors-600-black-low-emp": "#5e6064",
        "color-primary-color-900": "#3a327d",
        "color-secondary-color-500": "#fe6e8a",
        "color-text-colors-100-white-medium-emp": "#eeeef4",
        "color-text-colors-disabled": "#C9C9CE",
        "border-colors-disabled": "#C9C9CE",
        //
        "color-text-colors-600-black-low-emp": "#5e6064",
        "color-primary-color-900": "#3a327d",
        "color-text-colors-50-white-high-emp": "#fff",

        //
        "color-status-info": "#54A0FF",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "text-button-button-2-medium-semibold-600": "Inter",
      },

      borderRadius: {
        "21xl": "40px",
        "81xl": "100px",
        "6xs-7": "6.7px",
        "8xs-1": "4.1px",
        "xs-1": "11.1px",
        "5xs-8": "7.8px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "2xl": "24px",
      "21xl": "40px",
      lg: "18px",
      "37xl": "56px",
      sm: "14px",
      "5xl": "24px",
      xs: "12px",
      "5xs-2": "7.2px",
      "29xl": "48px",
      "45xl": "64px",
      inherit: "inherit",
      "13xl": "32px",
      xs: "12px",
      inherit: "inherit",
    },
    boxShadow: {
      cardShadow: "0px 8px 24px 0px rgba(0, 0, 0, 0.05)",
      cardShadowTwo: "0px 8px 24px 0px rgba(112, 106, 234, 0.25)",
      iconShadow: "0px 13px 17.4px 0px rgba(0, 0, 0, 0.05)",
      navShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.08)",
      pricingBox: "0px_8px_24px_rgba(0,_0,_0,_0.05)",
      recommnededBox: "0px 24px 60px 0px rgba(58, 50, 125, 0.20)",
      intShadow: "0px 8px 24px 0px rgba(0, 0, 0, 0.05)",
      exploreCardsShadow: "0px 4.175px 12.525px 0px rgba(0, 0, 0, 0.05)",
      noShadow: "0px 0px 0px 0px",
    },
    backgroundImage: {
      quizLaunchBg: "linear-gradient(98deg, #373072 0%, #5246AF 99.59%)",
      contactInfobg: "url('@/assets/images/contactbackground.png')",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};



