import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["var(--font-kumbh)", "sans-serif"],
        redhat: ["var(--font-redhat)", "sans-serif"],
      },
      colors: {
        yellow: {
          light: "#FFF9E9",
        },
        purple: {
          normal: "#C385D0",
          dark: "#4C0253",
          light: "#EBD6EF",
          "light-2": "#7C4B87",
        },
      },
    },
  },
  plugins: [],
};
export default config;
