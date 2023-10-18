/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    './src/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/background-image.jpg')",
        "sidebar": "linear-gradient(180deg, #131313 0.01%, rgba(0, 0, 0, 0.30) 100.76%);",

      },
      colors: {
        primary: {
          DEFAULT: "#8C8BFF"
        },
        text: {
          DEFAULT: "#E3E3E3",
          main: "rgba(227, 227, 227, 0.70)"
        },
        bg: {
          main: "#141414",
          overlay: "#000000cc"
        },
        success: "rgba(96, 255, 121, 0.87)",
        warning: "rgba(246, 178, 45, 0.87)",
        error: "#CE2F2F",
        linear: {
          one: "#8685EF",
          two: "rgba(134, 133, 239, 0.55)",
          three: "rgba(134, 133, 239, 0.00)"
        }
      },
      fontSize: {
        sm: "12px",
        md: "14px",
        lg: "16px",
        xl: "18px",
        "2xl": "22px",
      },
      boxShadow : {
        "sh-black" : "4px 4px 8px 0px rgba(0, 0, 0, 0.25)"
      }

    },
  },
  plugins: [],
}
