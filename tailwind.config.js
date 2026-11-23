/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        sidebar: {
          DEFAULT: "rgb(var(--sidebar) / <alpha-value>)",
          foreground: "rgb(var(--sidebar-foreground) / <alpha-value>)",
          primary: "rgb(var(--sidebar-primary) / <alpha-value>)",
          "primary-foreground":
            "rgb(var(--sidebar-primary-foreground) / <alpha-value>)",
          accent: "rgb(var(--sidebar-accent) / <alpha-value>)",
          "accent-foreground":
            "rgb(var(--sidebar-accent-foreground) / <alpha-value>)",
          active: "rgb(var(--sidebar-active) / <alpha-value>)",
          "active-foreground":
            "rgb(var(--sidebar-active-foreground) / <alpha-value>)",
          border: "rgb(var(--sidebar-border) / <alpha-value>)",
          ring: "rgb(var(--sidebar-ring) / <alpha-value>)",
        },
      },
      // Home-page menu list dropping open below lg.
      keyframes: {
        "menu-open": {
          from: { opacity: "0", transform: "translateY(-1rem) scaleY(0.9)" },
          to: { opacity: "1", transform: "translateY(0) scaleY(1)" },
        },
      },
      animation: {
        "menu-open": "menu-open 200ms ease-out",
      },
      screens: {
        xl: "1280px",
        "2xl": "1800px",
        "3xl": "2600px",
      },
    },
  },
  plugins: [],
};
