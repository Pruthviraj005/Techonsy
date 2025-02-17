/** @type {import('tailwindcss').Config} */
import { gray as _gray } from "tailwindcss/colors";

import svgToDataUri from "mini-svg-data-uri";

import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";
 

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const darkMode = "class";
export const theme = {
  container: {
    center: true,
    padding: "1rem",
  },

  screens: {
    xs: "450px",
    // => @media (min-width: 450px) { ... }
    sm: "575px",
    // => @media (min-width: 576px) { ... }
    md: "768px",
    // => @media (min-width: 768px) { ... }
    lg: "992px",
    // => @media (min-width: 992px) { ... }
    xl: "1200px",
    // => @media (min-width: 1200px) { ... }
    "2xl": "1400px",
  },
  extend: {
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#121723",
      dark: "#1D2430",
      primary: "#4A6CF7",
      yellow: "#FBB040",
      "bg-color-dark": "#171C28",
      "body-color": {
        DEFAULT: "#788293",
        dark: "#959CB1",
      },
      stroke: {
        stroke: "#E3E8EF",
        dark: "#353943",
      },
      gray: {
        ..._gray,
        dark: "#1E232E",
        light: "#F0F2F9",
      },
    },

    boxShadow: {
      signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
      one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
      two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
      three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
      sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
      "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)",
      submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",
      "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)",
      btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",
      "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",
      "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)",
    },
    dropShadow: {
      three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
    },
  },
};
export const plugins = [
  require('tailwind-scrollbar'),
  addVariablesForColors,
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "bg-grid": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        }),
        "bg-grid-small": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        }),
        "bg-dot": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
    );
  },
];

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
