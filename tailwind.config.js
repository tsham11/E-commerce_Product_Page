/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF7E1B",
        black: "#1D2026",
      },
      width: {
        "19px": "19px",
        "28rem": "445px",
        "51px": "51px",
        "272px": "272px",
        "312px": "312px",
        "360px": "360px",
      },
      height: {
        "13px": "13px",
        "52px": "52px",
        "188px": "188px",
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans"],
      },
      fontSize: {
        "10px":"10px",
        "28px": "28px",
        "44px": "44px",
      },
      lineHeight: {
        "48px": "48px",
      },
    },
  },
  plugins: [],
};
